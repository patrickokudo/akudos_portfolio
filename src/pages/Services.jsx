import React from "react";
import Nav from "./Nav";
import "./Services.css";

function Services() {
  return (
    <>
      {" "}
      <Nav />
      <section className="services">
        <div className="design">
          <h2>Design</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut
            molestiae doloremque vitae deleniti explicabo ipsum dolorum,
            voluptateo.
          </p>
        </div>
        <div className="web-dev">
          <h2>Web Developement</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
            soluta tempora est fuga aspernatur nisi voluptatum odio dolorem.
          </p>
        </div>
        <div className="graphic-design">
          <h2>Graphic Design</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error eaque
            ipsum nihil commodi consequuntur sapiente excepturi, sequi!
          </p>
        </div>
        <div className="branding">
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex odit
            accusamus eligendi ducimus eaque consequatur! Rerum reprehenderit.
          </p>
        </div>
        <div className="marketing">
          <h2>Marketing</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero
            eum, ut voluptatum sunt adipisci esse praesentium laudantium
            dictaat!
          </p>
        </div>
        <div className="mobile-app">
          <h2>Mobile App Design</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus
            debitis eius aut iure, cupiditate ma aliquam.
          </p>
        </div>
        <div className="visual-editor">
          <h2>Visual Editor</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia unde,
            dolorem voluptas inventore gendi!
          </p>
        </div>
        <div className="consultancy">
          <h2>IT Consultancy</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit
            praesentium amet commodi ceat mollitia provident quisquam labore!
          </p>
        </div>
      </section>
      <h4 className="pricing">PRICING</h4>
      <h1 className="plan">choose your pricing plan</h1>
      <section className="cards">
        <div className="plan--1">
          <p>
            <span>$</span>49
          </p>
          <p></p>
          <ul>
            <li>Strategic Alliance</li>
            <li>Growth Expansion</li>
            <li>Buisness Planning</li>
            <li>Contact Negotiation</li>
            <li>Streategic Marketing</li>
          </ul>
          <button>GET STARTED</button>
        </div>
        <div className="plan--2">
          <p>
            <span>$</span>79
          </p>
          <p></p>
          <ul>
            <li>Strategic Alliance</li>
            <li>Growth Expansion</li>
            <li>Buisness Planning</li>
            <li>Contact Negotiation</li>
            <li>Streategic Marketing</li>
          </ul>
          <button>GET STARTED</button>
        </div>
        <div className="plan--3">
          <p>
            <span>$</span>109
          </p>
          <p></p>
          <ul>
            <li>Strategic Alliance</li>
            <li>Growth Expansion</li>
            <li>Buisness Planning</li>
            <li>Contact Negotiation</li>
            <li>Streategic Marketing</li>
          </ul>
          <button>GET STARTED</button>
        </div>
        <div className="plan--4">
          <p>
            <span>$</span>149
          </p>
          <p></p>
          <ul>
            <li>Strategic Alliance</li>
            <li>Growth Expansion</li>
            <li>Buisness Planning</li>
            <li>Contact Negotiation</li>
            <li>Streategic Marketing</li>
          </ul>
          <button>GET STARTED</button>
        </div>
      </section>
    </>
  );
}

export default Services;
