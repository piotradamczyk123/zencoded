import React from "react";
import Layout from "../components/layout";
import { Link } from "gatsby";
import Footer from "../components/footer";

// markup
const WhatPage = () => {
  return (
    <div>
      <Layout>
        <h1>What we do</h1>

        <p>Learn more about things that we can create for you.</p>
        <div>
          <h2>
            We make <span>websites</span> and they are <span>fast!</span>
          </h2>
        </div>
        <h3>
          They look like <span>websites</span> but they are <span>apps</span>
        </h3>
        <p>Find yourself in the future. Now.</p>
        <p>
          We use Gatsby for creating blazingly fast websites. Gatsby is the
          latest available technology that will turn standard website in robust,
          stable and most important extremely fast web experience.
        </p>
        <div>
          <h2>In clients we trust</h2>
        </div>
        <h3>Tell us your story</h3>
        <p>
          We make websites for small businesses, artists, self-made
          entrepreneuers and free souls.
        </p>
        <p>
          We believe that all people are equal regardless of the business scale.{" "}
        </p>
        <p>We deliver affordable, modern solution that are free to maintain!</p>
        <div>
          <img></img>
          <img></img>
          <img></img>
        </div>
        <h2>From design to code</h2>
        <h3>Its all about your needs</h3>
        <div>
          <img></img>
          <img></img>
        </div>
        <h4>
          Zencoded covers all steps in the process of making your website.{" "}
        </h4>
        <p>
          First we’ll analize your needs and requirments. Based on iduvidual
          information about project we create UX design for your page.
        </p>
        <p>
          After your approval of created project we’ll move on to the coding
          phase.{" "}
        </p>
        <p>
          Last but not least we’ll connect your domain and host your new
          blazingly fast website on Netlify.{" "}
        </p>
        <div>
          <img></img>
          <p>Analisys</p>
          <img></img>
          <p>Design</p>
          <img></img>
          <p>Code</p>
          <img></img>
          <p>Hosted</p>
        </div>

        <div>
          <p>learn</p>
          <Link to="/how">HOW</Link>
        </div>

        <Link to="/">go back!</Link>
      </Layout>
      <Footer />
    </div>
  );
};

export default WhatPage;
