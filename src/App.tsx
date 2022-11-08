import React from 'react';
import './App.css';
import OpenAllMaps from "./maps.";
import Technologies from "./Technologies";
import Header from "./Header";

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
export default App;
