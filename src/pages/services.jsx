import React from "react";
import Topnavbar from "../components/topnavbar";
import Navbar from "../components/navbar";
import Header from "./header";
import serviceImg from "../Images/services.png";
import ChatApp from "./chatApp";

const Services = () => {
return (
<div>
<Topnavbar></Topnavbar>
<Navbar></Navbar>

{/*  */}

<div className="technology_c">
<h1>I Provide</h1>

<p>
Tailored IT And Business Solution, Leveraging cutting-Edge
Technologies To Enclave Efficiency Strealine, Process, And Drive
Sustainable Growth For Organanizations.
</p>

<div className="techology_flex">
<div className="flex_main_con">
{/*  */}

<div>
<h2>
{" "}
E-commerce <br></br> Dashboards
</h2>
<p>
{" "}
E-commerce Dashboard <br></br> Solutions for you Business{" "}
</p>
</div>

{/*  */}

<div>
<h2>
{" "}
Static Website <br></br>
Development
</h2>
<p>
Static Website <br></br> Solutions
</p>
</div>

{/*  */}

<div>
<h2>API Integration</h2>
<p>
Streamlined API <br></br>
Integration{" "}
</p>
</div>

{/*  */}
</div>

<img src={serviceImg}></img>

<div className="flex_main_con">
{/*  */}

<div>
<h2>
Custom Web <br></br>
Development
</h2>
<p>
{" "}
Custom Website Solutions <br></br> Change your Website <br></br>{" "}
Dynamically
<br></br>
</p>
</div>

{/*  */}

<div>
<h2>
Static Website <br></br>
Development
</h2>
<p>
Static Website <br></br> Solutions
</p>
</div>

{/*  */}

<div>
<h2>
{" "}
Business Solutions <br></br>
</h2>
<p>
Streamlined Services for <br></br>
Business Efficiency.{" "}
</p>
</div>

{/*  */}
</div>

{/*  */}
</div>

<div></div>
</div>

{/*  */}

<ChatApp></ChatApp>
<Header></Header>
</div>

);
};

export default Services;
