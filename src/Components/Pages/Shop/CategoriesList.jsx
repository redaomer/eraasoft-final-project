import React, { useEffect, useState } from 'react';
import { fetchCategories } from '../../../services/strapi';

export default function CategoriesList(){
  const [cats,setCats]=useState([]);
  useEffect(()=>{ fetchCategories().then(d=>setCats(d)).catch(console.error); },[]);
  if(!cats.length) return <div>No categories found</div>;
  return (<div className="categories-list">{cats.map(c=> <div key={c.id}>{c.attributes.name}</div>)}</div>);
}
