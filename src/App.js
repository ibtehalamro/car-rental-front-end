import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import {BrowserRouter} from "react-router-dom";
import LargeSection from "./Components/LargeSection/LargeSection";
import Welcoming from "./Components/Welcoming/Welcoming";
import LightCard from "./Components/LightCards/LightCard";
import Prices from "./Components/Prices/Prices";
import DarkCards from "./Components/DarkCards/DarkCards";
import Footer from "./Components/Footer/Footer";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Header/>
                <LargeSection/>
                <Welcoming/>
                <LightCard/>

                <DarkCards/>
                <Prices/>
                <Footer/>
            </BrowserRouter>
        </div>
    );
}

export default App;
