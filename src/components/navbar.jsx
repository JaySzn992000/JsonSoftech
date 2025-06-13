import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logoJson from "../Images/json_f-removebg-preview.png";
import "./navbar.css";

const Navbar = () => {
const navigate = useNavigate();

const handleNavigation = (path) => {
navigate(path);
};

const [isSticky, setIsSticky] = useState(false);
const [isMenuOpen, setIsMenuOpen] = useState(false);

useEffect(() => {
const handleScroll = () => {
setIsSticky(window.scrollY > 50);
};
window.addEventListener("scroll", handleScroll);

return () => {
window.removeEventListener("scroll", handleScroll);
};
}, []);

const toggleMenu = () => {
setIsMenuOpen(!isMenuOpen);
};

return (
<div>
<nav
className={`navSlider ${isSticky ? "sticky" : ""} ${
isMenuOpen ? "active" : ""
}`}
>
<div className="logo_div" onClick={() => handleNavigation("/Home")}>
<img src={logoJson} alt="Logo" />
<h1>
Json
<br /> Softech
</h1>
</div>

<div className="hamburger" onClick={toggleMenu}>
<span></span>
<span></span>
<span></span>
</div>

<ul className="nav_bar_ul">
<li onClick={() => handleNavigation("/")}>
<a>Home</a>
</li>
<li onClick={() => handleNavigation("/About")}>
<a>About</a>
</li>
{/* <li onClick={() => handleNavigation("/Services")}>
<a>Services</a>
</li> */}
<li onClick={() => handleNavigation("/Contactus")}>
<a>Contact</a>
</li>
{/* <li onClick={() => handleNavigation("/Technologies")}>
<a>Technologies</a>
</li> */}
{/* <li onClick={() => handleNavigation("/Pricing")}>
<a>Pricing</a>
</li> */}
{/* <li onClick={() => handleNavigation("/GetCostProject")}>
<a>Get Project Cost</a>
</li> */}
<button>
<a>Call: +91 920 552 7356</a>
</button>
</ul>
</nav>
</div>

);

};

export default Navbar;
