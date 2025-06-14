import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/home";
import About from "./pages/about";
import Services from "./pages/services";
import Contactus from "./pages/contactus";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Technologies from "./pages/technologies";
import Pricing from "./pages/Pricing";
import GetCostProject from "./pages/GetCostProject";

function App() {

return (
<div className="App">
<Router>
<Routes>
<Route path="/" element={<Home />}></Route>
<Route path="/About" element={<About />}></Route>
<Route path="/Services" element={<Services />}></Route>
<Route path="/Contactus" element={<Contactus />}></Route>
<Route path="/Technologies" element={<Technologies />}></Route>
<Route path="/Pricing" element={<Pricing />}></Route>
<Route path="/GetCostProject" element={<GetCostProject />}></Route>
<Route path="/Home" element={<Home />}></Route>
</Routes>
</Router>
</div>
);
}

export default App;
