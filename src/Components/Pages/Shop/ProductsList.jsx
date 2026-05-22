import React, { useEffect, useState } from 'react';
import { fetchProducts, addToCart } from '../../../services/strapi';

const ProductsList = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    fetchProducts()
      .then(data => { if (mounted) setItems(data); })
      .catch(console.error)
      .finally(() => { if (mounted) setLoading(false); });
    return () => { mounted = false; };
  }, []);

  if (loading) return <div>Loading products...</div>;
  if (!items.length) return <div>No products found (make sure Strapi Product collection exists and Public role has find).</div>;

  const base = process.env.REACT_APP_STRAPI_URL || 'http://localhost:1337';

  const [adding, setAdding] = useState(null);
  const [message, setMessage] = useState('');

  const handleAdd = async (productId, qty = 1, price) => {
    setAdding(productId);
    setMessage('');
    try {
      const session = localStorage.getItem('cart_session') || ('anon-' + Math.random().toString(36).slice(2,9));
      localStorage.setItem('cart_session', session);
      const payload = { data: { product: productId, quantity: qty, price, session } };
      const res = await addToCart(payload);
      setMessage('Item added to cart');
      console.log('addToCart response', res);
    } catch (err) {
      console.error(err);
      setMessage('Failed to add to cart');
    } finally {
      setAdding(null);
    }
  };

  return (
    <div className="products-list">
      {message && <div className="mb-3 text-info">{message}</div>}
      {items.map(item => {
        const attrs = item.attributes || {};
        // image may be an array (images) or single (image) depending on your field
        const imgData = attrs.images?.data?.[0] || attrs.image?.data || null;
        const imageUrl = imgData?.attributes?.url ? base + imgData.attributes.url : null;
        const categoryName = attrs.category?.data?.attributes?.name || attrs.categoryName || '';
        return (
          <div key={item.id} className="product-tile">
            <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
              <h4 style={{margin:0}}>{attrs.title}</h4>
              {attrs.featured && <span style={{background:'#ffd',padding:'4px 8px',borderRadius:8}}>Featured</span>}
            </div>
            {imageUrl && <img src={imageUrl} alt={attrs.title} style={{ width: 220, display:'block', margin:'8px 0' }} />}
            <p style={{margin:'8px 0'}}>{attrs.description?.slice?.(0, 120) || ''}</p>
            <div style={{display:'flex', gap:12, alignItems:'center'}}>
              <div>Price: <strong>{attrs.price ?? '—'}</strong></div>
              <div>Stock: {attrs.stock ?? '—'}</div>
              {categoryName && <div>Category: {categoryName}</div>}
              <div style={{marginLeft:'auto', color:'#666'}}>{attrs.slug || 'no-slug'}</div>
            </div>
            <div style={{display:'flex', gap:8, marginTop:10}}>
              <button className="btn btn-success" disabled={adding===item.id} onClick={() => handleAdd(item.id, 1, attrs.price)}>
                {adding===item.id ? 'Adding...' : 'Add to Cart'}
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductsList;
 