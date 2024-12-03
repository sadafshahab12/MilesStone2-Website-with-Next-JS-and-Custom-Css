import React from 'react'
import PostCard from '../components/ui/PostCard'
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Code & Connect | Blog",
};

const Blog = () => {
  return (
    <div>
        <section className="blog-post-sec animate__animated animate__lightSpeedInLeft ">
        <div className="blog-post">
          <h3>Our Blog</h3>
          <h1>Latest Post</h1>
        </div>
        <div className="post-cards">
          <PostCard />
        </div>
      </section>
    </div>
  )
}

export default Blog
