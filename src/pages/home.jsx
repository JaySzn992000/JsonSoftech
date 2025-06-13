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
{/* <Industries></Industries> */}

{/*  */}

<h2 className="h1_Dash">Dashboard's Creation</h2>
<DashboardSlider></DashboardSlider>
<ContactusForm></ContactusForm>
<ChatApp></ChatApp>
<Header></Header>
</div>

);
};

export default Home;
