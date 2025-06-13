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
I run JSON Softech, a Web Developement specializing in creative and
high-performance web solutions for small and mid-size businesses. As
the sole proprietor, I focus on delivering personalized services,
tailoring each project to meet the unique needs of my clients.{" "}
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
