import React from 'react';
import './App.css';
import OpenAllMaps from "./maps.";

function App() {
    return (
        <div>
            <Header/>
            <Technologies/>
            <div className="App">
            <OpenAllMaps />
            </div>
        </div>
    );
}

function Technologies()  {
    return (
        <div>
            <ul>
                <li>css</li>
                <li>html</li>
                <li>js</li>
                <li>react</li>
            </ul>
        </div>
    )
}

function Header() {
    return (
        <div>
            <a>Home</a>
            <a>News Feed</a>
            <a>Messages</a>
        </div>
    )
}

export default App;
