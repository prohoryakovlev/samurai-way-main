import React from 'react';
import './App.css';
import OpenAllMaps from "./maps.";
import Technologies from "./Technologies";

import Footer from "./Footer";
import Navigation from "./Navigation";
import Header from "./components/Header/Header";
import Navbar from "./components/NavBar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from './components/Dialogs/Dialogs';
import {BrowserRouter, Route} from "react-router-dom";


function App() {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className={"app-wrapper-contend"}>
                    <Route path={"/dialogs"} component={Dialogs}/>
                    <Route path={"/profile"} component={Profile}/>
                </div>
            </div>
        </BrowserRouter>
    );
}


export default App;
// https://cs6.pikabu.ru/avatars/898/v898702-1233531445.jpg
