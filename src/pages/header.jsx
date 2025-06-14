import React from "react";
import { useNavigate } from "react-router-dom";
import "./header.css";

const Header = () => {
const navigate = useNavigate();

const handleNavigation = (path) => {
navigate(path);
};

return (

<div>
{/*  */}

<header>
<div className="headerdiv_">
<h1 style={{ color: "white", fontSize: "2.7rem" }}>Json Softech</h1>
<p>
At JSON Softech, we uphold a strong reputation for excellence 
in professional website development and design.
Specializing in strategic development, design, and hosting, 
we provide a one-stop solution for your online success. 
Though independently operated by our founder Jay, JSON Softech functions 
with the efficiency and dedication of a full-service agency — focused on delivering 
top-notch web solutions tailored to your business goals.
We are committed to ensuring the long-term success 
of every website project we take on.
</p>
</div>

{/*  */}

<ul>
<h1>Get In Touch</h1>
<h2>Email & Mob:</h2>
<li>
<a href="">Jsonsoftech@gmail.com</a>
</li>
<li>
<a href=""> Mob : +91 920552 7356</a>
</li>
</ul>

{/*  */}

<ul>
<li onClick={() => handleNavigation("/")}>
<a>Home</a>
</li>
<li onClick={() => handleNavigation("/About")}>
<a>About</a>
</li>
<li onClick={() => handleNavigation("/Services")}>
<a>Services</a>
</li>
<li onClick={() => handleNavigation("/Technologies")}>
<a>Technologies</a>
</li>
<li onClick={() => handleNavigation("/Pricing")}>
<a>Pricing</a>
</li>
<li onClick={() => handleNavigation("/GetCostProject")}>
<a>Get Project Cost</a>
</li>
</ul>

<ul>
<li>
<a href="">E-Commerce Development</a>
</li>
<li>
<a href="">Dashboard's Development</a>
</li>
<li>
<a href="">Custom Website Development</a>
</li>
<li>
<a href="">Website Development</a>
</li>
<li>
<a href="">API Integration</a>
</li>
<li>
<a href="">Web Hosting</a>
</li>
<li>
<a href="">Business Solutions</a>
</li>
</ul>
</header>

{/*  */}

</div>

);
};

export default Header;
