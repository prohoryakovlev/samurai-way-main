import React from 'react';
import './App.css';
import OpenAllMaps from "./maps.";
import Technologies from "./Technologies";

import Footer from "./Footer";
import Navigation from "./Navigation";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";


function App() {
    return (
        <div className="App">
            <Header title={"NEW IMAGES"}/>
            <Navbar/>
            <Profile/>
        </div>
    );
}



export default App;
// https://cs6.pikabu.ru/avatars/898/v898702-1233531445.jpg
