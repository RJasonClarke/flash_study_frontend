import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./Home";
import CardsContainer from "./CardsContainer";
import CardsForm from "./CardsForm";
import CardStudy from "./CardStudy";
import About from "./About";

const Router = () => {
    return(
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/cards" element={<CardsContainer/>}></Route>
            <Route path="/cards/new" element={<CardsForm/>}></Route>
            <Route path="/study" element={<CardStudy/>}></Route>
            <Route path="/about" element={<About/>}></Route>
        </Routes>
    );
};

export default Router;