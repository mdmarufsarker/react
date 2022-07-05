import React from "react";
import heroImg from "../assets/grid-photo.jpg";

const Hero = () => {
  return (
    <section className="hero">
      <img src={heroImg} className="hero-img" alt="" />
      <h1 className="hero-header">Online Experiences</h1>
      <p className="hero-text">
        Join Unique interactive activities led by one-of-a-kind hosts-all
        without leaving home.
      </p>
    </section>
  );
};

export default Hero;
