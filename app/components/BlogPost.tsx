import React from "react";
import PostCard from "./ui/PostCard";
import 'animate.css';

import "../globals.css";
const BlogPost = () => {
  return (
    <>
      <section className="blog-post-sec animate__animated animate__lightSpeedInLeft animate__delay-2s">
        <div className="blog-post">
          <h3>Our Blog</h3>
          <h1>Latest Post</h1>
        </div>
        <div className="post-cards">
          <PostCard />
        </div>
      </section>
    </>
  );
};

export default BlogPost;
