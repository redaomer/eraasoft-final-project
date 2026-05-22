import React from "react";
import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100">
      <div className="text-center p-5" style={{ maxWidth: "500px" }}>
        <h1 className="mb-4">Blog Page</h1>
        <p className="mb-4">
          Here you will find articles and news.
        </p>
        <Link to="/blog/news" className="btn btn-primary">
          Go to the news
        </Link>
      </div>
    </div>
  );
};

export default Blog;