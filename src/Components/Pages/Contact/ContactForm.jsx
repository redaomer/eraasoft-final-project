import React, { useState } from 'react';
import { submitRequest } from '../../services/strapi';

export default function ContactForm(){
  const [form,setForm]=useState({name:'',email:'',phone:'',message:''});
  const [status,setStatus]=useState(null);
  const onChange=e=>setForm({...form,[e.target.name]:e.target.value});
  const onSubmit=async e=>{ e.preventDefault(); setStatus('sending'); try{ await submitRequest(form); setStatus('sent'); setForm({name:'',email:'',phone:'',message:''}); }catch(err){ setStatus('error'); console.error(err); } };
  return (
    <form onSubmit={onSubmit} style={{maxWidth:520}}>
      <input name="name" placeholder="Name" value={form.name} onChange={onChange} required />
      <input name="email" type="email" placeholder="Email" value={form.email} onChange={onChange} required />
      <input name="phone" placeholder="Phone" value={form.phone} onChange={onChange} />
      <textarea name="message" placeholder="Message" value={form.message} onChange={onChange} required />
      <button type="submit">Send</button>
      {status && <div>Status: {status}</div>}
    </form>
  );
}
