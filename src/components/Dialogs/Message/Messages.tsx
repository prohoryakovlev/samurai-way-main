import React from "react";
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";


type Messages = {
    name: string
    message: string
}

const Messages = (props: any) => {
    return (
        <div className={s.dialogs}>{props.message}</div>
    )
}

export default Messages