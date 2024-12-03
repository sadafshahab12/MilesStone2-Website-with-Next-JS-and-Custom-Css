"use client";
import React, { useState } from "react";
import "../../globals.css";
import Image from "next/image";
import Button from "./Button";
import { Posts } from "@/app/api/post/data";

const PostCard = () => {
  // Use an array of booleans to track which posts are showing full content
  const [fullTextVisible, setFullTextVisible] = useState(
    Posts.map(() => false) // Initially, all posts show half text
  );

  const toggleText = (index:number) => {
    setFullTextVisible((prevState) => {
      const newState = [...prevState];
      newState[index] = !newState[index]; // Toggle the text visibility for the current post
      return newState;
    });
  };

  return Posts.map((post, index:number) => (
    <div className="post-card-container" key={post.id}>

        <div className="blog-img">
          <Image
            src={post.src}
            alt="blog-img"
            width={800}
            height={500}
            className="img"
          />
        </div>
        <div className="blog-content">
          <h2>{post.heading}</h2>
          {/* Show half text if fullTextVisible is false, else show full text */}
          <p>{fullTextVisible[index] ? post.full : post.half}</p>

          <div onClick={() => toggleText(index)}>
            <Button buttonText="Read Blog" />
          </div>
        </div>
      </div>
    
  ));
};

export default PostCard;
