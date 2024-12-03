interface TPost {
    id: number;
    src: string;
    heading: string;
    half: string;
    full: string;
  }
  
export const Posts: TPost[] = [
    {
      id: 1,
      src: "/images/post1.jpg",
      heading: "How to Get Started with Coding: A Beginner's Guide",
      half: "Welcome to the world of coding! Whether you want to build apps....",
      full: "Welcome to the world of coding! Whether you want to build apps, websites, or just learn problem-solving, coding is a valuable skill. But how do you start? This guide is for absolute beginners looking to dive into programming.",
    },
    {
      id: 2,
      src: "/images/post2.avif",
      heading:
        "The Power of Collaboration in Coding: Why Working with Others is Key",
      half: "Welcome to the world of coding! Whether you want to build apps....",
      full: "Welcome to the world of coding! Whether you want to build apps, websites, or just learn problem-solving, coding is a valuable skill. But how do you start? This guide is for absolute beginners looking to dive into programming.",
    },
    {
      id: 3,
      src: "/images/post3.webp",
      heading:
        "Mastering Frontend Development: Essential Skills You Need in 2024",
      half: "If you’re passionate about web development, mastering frontend skills....",
      full: "If you’re passionate about web development, mastering frontend skills is essential. In 2024, the demand for frontend developers continues to grow. Here's what you need to learn to stay ahead.",
    },
    {
      id: 4,
      src: "/images/post4.avif",
      heading: "Troubleshooting Common Coding Errors and How to Fix Them",
      half: "One of the most frustrating parts of coding is encountering errors....",
      full: "One of the most frustrating parts of coding is encountering errors. But every developer has faced them and knows how to troubleshoot. This blog will guide you through some common issues and the best ways to fix them.",
    },
  ];