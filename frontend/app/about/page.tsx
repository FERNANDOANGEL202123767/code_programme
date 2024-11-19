"use client";
import React, { useState } from "react";
import Heading from "../utils/Heading";
import Header from "../components/Header";
import About from "./About";
import Footer from "../components/Footer";

type Props = {};

const Page = (props: Props) => {
  const [open, setOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(2);
  const [route, setRoute] = useState("Login");
  const [start, setStart] = useState(false);  // O el tipo adecuado

  return (
    <div>
      <Heading
        title="About us - Academy IQ"
        description="Academy IQ is a learning management system for helping programmers."
        keywords="programming,mern"
      />
      <Header
        open={open}
        setOpen={setOpen}
        activeItem={activeItem}
        setRoute={setRoute}
        route={route}
        start={start}  
        setStart={setStart} 
      />
      <About />
      <Footer />
    </div>
  );
};

export default Page;
