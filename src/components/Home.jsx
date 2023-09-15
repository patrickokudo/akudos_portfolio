import "./Section.css";
import { useState } from "react";
import React from "react";
import { Link } from "react-router-dom";
import Nav from "../pages/Nav";
import { Swiper, SwiperSlide } from "swiper/react";

function Section() {
  return (
    <>
      <header>
        <h2 className="intro" style={{ fontSize: 30 }}>
          alfx.
        </h2>
        <Nav />
      </header>
      <section className="section">
        <div className="info">
          <h3 className="job">FRONT END DEVELOPER</h3>
          <h1 className="name">I'm Patrick Okudo</h1>

          <aside>
            <div className="about-me">
              <h4>MORE ABOUT ME</h4>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="arrow"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </div>
            <div className="hire-me">
              <h4>HIRE ME</h4>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="arrow"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </div>
          </aside>
        </div>
        <div className="image"></div>
      </section>
    </>
  );
}

export default Section;
