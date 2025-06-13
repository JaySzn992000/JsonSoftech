import React from "react";
import about from "../Images/about.png";
import "./aboutsection.css";

const AboutSection = () => {

return (

<div>

{/*  */}

<div className="about_flex_">
<img src={about}></img>

<div>
<h1>About !</h1>

<h2> E-commerce & Dashboard's Development </h2>
<p>
{" "}

I run JSON Softech, a Web Development specializing in creative and
high-performance web solutions for small and mid-size businesses. As
the sole proprietor, I focus on delivering personalized services,
tailoring each project to meet the unique needs of my clients.{" "}
</p>

</div>
</div>

{/*  */}
</div>

);

};

export default AboutSection;
