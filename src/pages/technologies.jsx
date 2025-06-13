import React from "react";
import Navbar from "../components/navbar";
import Topnavbar from "../components/topnavbar";
import JavascriptLogo from "../Images/JavaScript.png";
import NodejsLogo from "../Images/node js.png";
import ReactJs from "../Images/React.js.png";
import jquery from "../Images/jquery.webp";
import php from "../Images/php.webp";
import mySQL from "../Images/mySQL.png";
import ChatApp from "./chatApp";
import Header from "./header";
import "./technologies.css";
import TechnologiesSlider from "../components/technologiesSlider";

const Technologies = () => {
return (
<div>
<Topnavbar></Topnavbar>
<Navbar></Navbar>

<div className="Tech_web">
{/*  */}
<h1>Technology Stack</h1>
{/*  */}
<h2>
Transform Your Business with <span> Our Tech Solutions</span>
</h2>
{/*  */}
<div>
<span>
<h2>React.JS</h2>
<img src={ReactJs}></img>
</span>
<span>
<h2>JavaScript</h2>
<img src={JavascriptLogo}></img>
</span>

<span>
<h2>J-Query</h2>
<img src={jquery}></img>
</span>
</div>

<div>
<span>
<h2>Node.Js</h2>
<img src={NodejsLogo}></img>
</span>
<span>
<h2>PHP</h2>
<img src={php}></img>
</span>
<span>
<h2>My-SQL</h2>
<img src={mySQL}></img>
</span>
</div>
</div>

{/*  */}

{/*  */}

<TechnologiesSlider></TechnologiesSlider>

<ChatApp></ChatApp>
<Header></Header>
</div>
);
};

export default Technologies;
