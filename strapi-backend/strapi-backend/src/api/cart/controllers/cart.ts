import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::cart.cart', ({ strapi }) => ({
	async create(ctx) {
		const body = ctx.request.body?.data || ctx.request.body;
		const product = body?.product || body?.product?.id || null;
		const quantity = Number(body?.quantity || 1);
		const session = body?.session || null;
		const price = body?.price ?? null;
		const note = body?.note ?? null;

		if (!product) {
			return ctx.badRequest('Product id is required');
		}

		// find existing cart item for same session and product
		const filters: any = { product };
		if (session) filters.session = session;

			const es: any = (strapi as any).entityService;
			const existing = await es.findMany('api::cart.cart', {
				filters,
				limit: 1,
			});

			if (existing && existing.length > 0) {
				const id = existing[0].id;
				const current = await es.findOne('api::cart.cart', id, { fields: ['quantity'] });
				const currentQty = Number(current?.quantity || 0);
				const updated = await es.update('api::cart.cart', id, {
					data: { quantity: currentQty + quantity, price, note },
				});
				return this.transformResponse(updated);
			}

			const created = await es.create('api::cart.cart', {
				data: { product, quantity, session, price, note },
			});

			return this.transformResponse(created);
	},

	async find(ctx) {
		// ensure product is populated by default
		ctx.query = ctx.query || {};
		if (!ctx.query.populate) ctx.query.populate = 'product';
		return await super.find(ctx);
	}
}));
