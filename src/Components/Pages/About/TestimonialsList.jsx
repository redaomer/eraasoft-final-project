import React, { useEffect, useState } from 'react';
import { fetchTestimonials } from '../../services/strapi';

export default function TestimonialsList(){
  const [items,setItems]=useState([]);
  useEffect(()=>{ fetchTestimonials().then(d=>setItems(d)).catch(console.error); },[]);
  if(!items.length) return <div>No testimonials</div>;
  return (<div className="testimonials-list">{items.map(t=> <blockquote key={t.id}><strong>{t.attributes.name}</strong><p>{t.attributes.quote}</p></blockquote>)}</div>);
}
