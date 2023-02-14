import React from 'react'
import { Link } from 'react-router-dom';

export default function Bloglist(props) {
  const blogs = props.blogs;
  return (
    <div className='blog-list'>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <Link to={`/blogs/${blog.id}`}>
            <h2>{blog.title}</h2>
            <p>Written By: {blog.author}</p>
            <hr />
          </Link>

        </div>
      ))}
    </div>
  )
}
