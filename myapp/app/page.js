"use client";
import Hero from "./components/Hero";
// import Footer from "./components/Footer";
// import Navbar from "./components/Navbar";
import Faq from "./components/Faq";
import Content from "./components/Content";
import React from "react";
import Packages from "./components/packages";
import World from "./components/World";


export default function Home() {
  

  return (
    <div>
      {/* <Navbar/> */}
      <Hero/>
      <Packages/>
      <World/>
      <Faq/>
      <Content/>
      {/* <Footer/> */}
    </div>
   
  );
}
