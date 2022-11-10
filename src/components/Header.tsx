import React from "react";
import "./Header.css";

type ImagesType ={
    title:string
}

const Header = (props:ImagesType) => {
    return (
        <div >
            <img  src="https://cs6.pikabu.ru/avatars/141/v141934.jpg"/>
        </div>
    )
}
export default Header

