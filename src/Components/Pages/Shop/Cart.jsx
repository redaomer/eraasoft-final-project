import React, { useEffect, useState } from 'react';
import { fetchCart, updateCart, removeFromCart, getCartSession } from '../../../services/strapi';

export default function Cart(){
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState(null);
  const session = getCartSession();

  const load = async () => {
    setLoading(true);
    try {
      const data = await fetchCart(session);
      setItems(data || []);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    let mounted = true;
    if (mounted) load();
    return () => { mounted = false; };
  }, [session]);

  const handleQty = async (id, q) => {
    setUpdating(id);
    try{
      await updateCart(id, { quantity: q });
  await load();
    }catch(err){ console.error(err); }
    setUpdating(null);
  }

  const handleDelete = async (id) => {
    setUpdating(id);
    try{
      await removeFromCart(id);
  await load();
    }catch(err){ console.error(err); }
    setUpdating(null);
  }

  if (loading) return <div>Loading cart...</div>;
  if (!items.length) return <div>Your cart is empty.</div>;

  return (
    <div className="container py-5">
      <h2>Shopping Cart</h2>
      <div className="cart-list">
        {items.map(it => {
          const id = it.id;
          const attrs = it.attributes || {};
          const product = attrs.product?.data?.attributes || {};
          const title = product.title || product.name || 'Product';
          const price = attrs.price ?? product.price ?? '—';
          const qty = attrs.quantity ?? 1;
          return (
            <div key={id} className="card mb-3 p-3 d-flex align-items-center">
              <div style={{width:'100%'}}>
                <div className="d-flex justify-content-between">
                  <strong>{title}</strong>
                  <div>{price}</div>
                </div>
                <div className="d-flex align-items-center mt-2" style={{gap:8}}>
                  <button className="btn btn-sm btn-outline-secondary" disabled={updating===id} onClick={()=>handleQty(id, Math.max(1, qty-1))}>-</button>
                  <div style={{minWidth:36, textAlign:'center'}}>{qty}</div>
                  <button className="btn btn-sm btn-outline-secondary" disabled={updating===id} onClick={()=>handleQty(id, qty+1)}>+</button>
                  <button className="btn btn-sm btn-danger ms-3" disabled={updating===id} onClick={()=>handleDelete(id)}>Delete</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
