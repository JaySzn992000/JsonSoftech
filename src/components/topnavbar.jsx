import React from "react";
import "./topnavbar.css";

const Topnavbar = () => {
return (
<div>
<nav className="small_nav">
<ul>
<i className="fa fa-map-marker"></i>
<li> "Amritpuri East of Kailash New Delhi 93/4 , 4th Floor"</li>

{/*  */}

<i className="fa fa-phone"></i>
<li> 920552 7356 / 93110 71290 </li>

{/*  */}

<i className="fa fa-envelope"></i>
<li>Jsonsoftech@gmail.com</li>

{/*  */}
</ul>

<div>
<a href="https://wa.me/9311071290">
<i className="fa-brands fa-whatsapp"></i>
</a>

<a href="https://www.instagram.com/javascript_css_react.js/reels/">
<i className="fa-brands fa-instagram"></i>
</a>

<a href="https://www.linkedin.com/in/jay-kumar-4645b81b3/">
<i className="fa-brands fa-linkedin"></i>
</a>
</div>
</nav>
</div>
);

};

export default Topnavbar;
