import React from "react";
import s from './../Dialogs.module.css'


type Message = {
    name: string
    id: number
    message: any
}

const Message = (props: Message) => {
    return (
        <div className={s.dialog}>{props.message}</div>
    )
}

export default Message