import React from 'react';
import './App.css';
import OpenAllMaps from "./maps.";
import Technologies from "./Technologies";
import Header from "./Header";
import Footer from "./Footer";
import Navigation from "./Navigation";


function App() {
    return (
        <div className="App">
            <header className={"header"}>
                <img src="https://images.stockopedia.com/security_images/z-energy-nzc-zel.jpeg"/>
            </header>
            <div className={"nav"}>
                <div>
                    <a>Profile</a>
                </div>
                <div>
                    <a>Messages</a>
                </div>
                <div>
                    <a>News</a>
                </div>
                <div>
                    <a>Music</a>
                </div>
                <div>
                    <a>Settincs</a>
                </div>
            </div>
            <nav className={"content"}>
                <div>
                    <img src="http://4everstatic.com/pictures/850xX/nature/horizon,-river,-panorama-184711.jpg"/>
                </div>
                <div>
                    ava + description
                </div>
                <div>
                    My post
                    <div>
                        New post
                    </div>
                    <div>
                        <div>
                            post 1
                        </div>
                        <div>
                            post 2
                        </div>
                    </div>
                </div>
            </nav>
            https://cs6.pikabu.ru/avatars/898/v898702-1233531445.jpg
            {/*<Navigation />*/}
            {/*<Technologies/>*/}
            {/*<OpenAllMaps/>*/}
            {/*<Footer/>*/}
        </div>
    );
}

export default App;
