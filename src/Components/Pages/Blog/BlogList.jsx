import React, { useEffect, useState } from 'react';
import { fetchBlogPosts } from '../../services/strapi';

export default function BlogList(){
  const [posts,setPosts]=useState([]);
  useEffect(()=>{ fetchBlogPosts().then(d=>setPosts(d)).catch(console.error); },[]);
  if(!posts.length) return <div>No blog posts</div>;
  return (<div className="blog-list">{posts.map(p=> <article key={p.id}><h3>{p.attributes.title}</h3><p>{p.attributes.excerpt}</p></article>)}</div>);
}
