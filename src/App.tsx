import React from 'react';
import './App.css';


import Header from "./components/Header/Header";
import Navbar from "./components/NavBar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from './components/Dialogs/Dialogs';
import {BrowserRouter, Route} from "react-router-dom";
import News from './components/News/News';
import Music from "./components/Music/Music";
import Settings from './components/Settings/Settings';


function App() {

    let posts = [
        {id: 1, message: "Hi, how are you?", likesCount: 12},
        {id: 2, message: "Its my first post", likesCount: 11},
        {id: 3, message: "Blabla", likesCount: 13},
        {id: 4, message: "Dadad", likesCount: 15},

    ]

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className={"app-wrapper-contend"}>
                    {/*<Route path={"/dialogs"} component={Dialogs}/>*/}
                    {/*<Route path={"/profile"} component={Profile}/>*/}


                    <Route path={"/dialogs"} render={()=> Dialogs }/>
                    <Route path={"/profile"} render={()=> Profile }/>


                    {/*<Route path={"/news"} component={News}/>*/}
                    {/*<Route path={"/music"} component={Music}/>*/}
                    {/*<Route path={"/settings"} component={Settings}/>*/}
                </div>
            </div>
        </BrowserRouter>
    );
}


export default App;
// https://cs6.pikabu.ru/avatars/898/v898702-1233531445.jpg
