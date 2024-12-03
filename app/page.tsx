import About from "./components/About";
import BlogPost from "./components/BlogPost";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Process from "./components/Process";
import Service from "./components/Service";
import Team from "./components/Team";
import Testimonial from "./components/Testimonial";
import WhatWeDo from "./components/WhatWeDo";

export default function Home() {
  return (
    <>
      <Hero />
      <About/>
      <Process/>
      <WhatWeDo/>
      <Service/>
      <Team/>
      <Testimonial/>
      <Contact/>
      <BlogPost/>
   
    </>
  );
}
