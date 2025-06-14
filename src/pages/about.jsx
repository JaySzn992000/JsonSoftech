import React from "react";
import Navbar from "../components/navbar";
import Topnavbar from "../components/topnavbar";
import Header from "./header";
import ChatApp from "./chatApp";
import about from "../Images/about.png";

const About = () => {
return (
<div>
<Topnavbar></Topnavbar>
<Navbar></Navbar>

<div className="about_flex_">
<img src={about}></img>

<div>
<h1>About !</h1>
<h2> E-commerce & Dashboard's Development. </h2>
<p>

{" "}
We are JSON Softech — a Web Development company specializing in creative, 
high-performance web solutions tailored for small and mid-sized businesses.
Our team is committed to delivering personalized, scalable, and 
results-driven digital experiences. At JSON Softech, we take pride in understanding 
our clients’ unique needs and turning their ideas into fully functional, user-friendly
 websites and web applications.{" "}
</p>

</div>
</div>

{/*  */}

<ChatApp></ChatApp>
<Header></Header>
</div>
);
};

export default About;
