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
As a Freelancer, I embody Json Softech's reputation for excellence
in professional Website Development and design. Specializing in
strategy Development and hosting, I offer a one-stop solution for
your online success. Operated solely by me, Jay, a dedicated
individual passionate about delivering top-notch solutions, I am
committed to ensuring the success of your website projects.
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
{/* <li onClick={() => handleNavigation("/Services")}>
<a>Services</a>
</li>
<li onClick={() => handleNavigation("/Technologies")}>
<a>Technologies</a>
</li>
<li onClick={() => handleNavigation("/Pricing")}>
<a>Pricing</a>
</li> */}
<li onClick={() => handleNavigation("/GetCostProject")}>
<a>Contact</a>
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
{/* <a href="">API Integration</a> */}
</li>
{/* <li>
<a href="">Web Hosting</a>
</li> */}
{/* <li>
<a href="">Business Solutions</a>
</li> */}
</ul>
</header>

{/*  */}
</div>

);
};

export default Header;
