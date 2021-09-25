import './App.scss';
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import AboutUs from "./pages/AboutUs/AboutUs";
import Sun from "./pages/Sun/Sun";
import OurBrands from "./pages/OurBrands/OurBrands";
import Sidebar from "./components/Sidebar/Sidebar";
import Footer from "./components/Footer/Footer";
import React from "react";

function App() {
    return (
        <Router>
            <div className="App">
                <Header />
                <Sidebar />
                <main>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/sun">
                        <Sun />
                    </Route>
                    <Route path="/about-us">
                        <AboutUs />
                    </Route>
                    <Route path="/our-brand">
                        <OurBrands />
                    </Route>
                    {/*<Route path="*">*/}
                    {/*    <div>404</div>*/}
                    {/*</Route>*/}
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
