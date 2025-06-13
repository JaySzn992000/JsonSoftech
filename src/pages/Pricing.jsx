import React from "react";
import "./Pricing.css";
import Topnavbar from "../components/topnavbar";
import Navbar from "../components/navbar";
import Header from "./header";
import ChatApp from "./chatApp";

const Pricing = () => {
return (
<div>
<Topnavbar></Topnavbar>
<Navbar></Navbar>

{/*  */}

<div className="Webs_itePrice">
<h2>Flexible Pricing Plans</h2>
<h1>Static Website Packages</h1>

<div className="Web_flex">
{/* 1st Div */}

<section>
<div className="Div_webPrice Div_fnd">
<p>Standard Plan</p>
<h1>₹ 4990</h1>
<p>Features Includes</p>
</div>
{/*  */}
<ul>
<li>5 pages Website</li>
<li>Premium Design</li>
<li>Mobile Responsive Website</li>
<li>Call Button Integration</li>
<li>WhatsApp Button Integration</li>
<li>Inquiry Form</li>
<li>24/7 Free Hosting Support</li>
<li>Free SSL Certificate</li>
<li>Domain & Hosting Setup</li>
<li>1 Month of Support</li>
</ul>
</section>

{/* 2nd Div */}

<section>
<div className="Div_webPrice Div_snd">
<p>Standard Plan</p>
<h1>₹ 6990</h1>
<p>Features Includes</p>
</div>

{/*  */}

<ul>
<li>12 pages Website</li>
<li>Premium Design</li>
<li>Mobile Responsive Website</li>
<li>Call Button Integration</li>
<li>WhatsApp Button Integration</li>
<li>Inquiry Form</li>
<li>24/7 Free Hosting Support</li>
<li>Interactive Elements</li>
<li>Social Media Integration</li>
<li>Domain & Hosting Setup</li>
<li>1 Month Support</li>
</ul>
</section>

{/* 3rd Div */}

<section>
<div className="Div_webPrice Div_trd">
<p>Standard Plan</p>
<h1>₹ 9990</h1>
<p>Features Includes</p>
</div>

<ul>
<li>React.JS</li>
<li>10 Pages</li>
<li>Premium Design</li>
<li>Enhanced Visuals</li>
<li>Interactive Elements</li>
<li>Mobile Responsive Website</li>
<li>Social Media Integration</li>
<li>Call Button Integration</li>
<li>WhatsApp Button Integration</li>
<li>Responsive and Fast Loading</li>
<li>Inquiry Form</li>
<li>24/7 Free Hosting Support</li>
<li>Domain & Hosting Setup</li>
<li>1 Month Support</li>
</ul>
</section>
</div>
{/*  */}
</div>

<ChatApp></ChatApp>
<Header></Header>
</div>
);

};

export default Pricing;
