import React from "react";
import Navbar from "../components/navbar";
import Topnavbar from "../components/topnavbar";
import SliderComponent from "../components/slider";
import AboutSection from "../components/aboutsection";
import Industries from "../components/industries";
import ContactusForm from "../components/contactusform";
import DashboardSlider from "../components/DashboardSlider";
import Header from "./header";
import ChatApp from "./chatApp";
import "./home.css";

const Home = () => {

return (

<div>
<Topnavbar></Topnavbar>
<Navbar></Navbar>

{/*  */}

<SliderComponent></SliderComponent>

{/*  */}

<AboutSection></AboutSection>
<Industries></Industries>

{/*  */}

<h2 className="h1_Dash">Dashboard's Creation</h2>
<DashboardSlider></DashboardSlider>
<ContactusForm></ContactusForm>
<ChatApp></ChatApp>
<Header></Header>

<a href="https://api.whatsapp.com/send/?phone=9311071290&text&type=phone_number&app_absent=0" target="_blank">
<img className="whatsapp_icon"
src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/2044px-WhatsApp.svg.png" alt="Chat on WhatsApp"/>
</a>

</div>

);
};

export default Home;
