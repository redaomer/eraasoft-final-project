import React, { useEffect, useState } from 'react';
import { fetchTeamMembers } from '../../services/strapi';

export default function TeamMembersList(){
  const [items,setItems]=useState([]);
  useEffect(()=>{ fetchTeamMembers().then(d=>setItems(d)).catch(console.error); },[]);
  if(!items.length) return <div>No team members</div>;
  return (<div className="team-list">{items.map(t=> <div key={t.id}><strong>{t.attributes.name}</strong><div>{t.attributes.role}</div></div>)}</div>);
}
