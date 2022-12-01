import React from "react";
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

type DialogTtem = {
    name: string
    id: number
}
type Message = {
    name: string
    message: string
}


const DialogItem = (props: DialogTtem) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}> {props.name}</NavLink>
        </div>
    )
}

const Message = (props: any) => {
    return (
        <div className={s.dialogs}>{props.message}</div>
    )
}

const Dialogs = () => {

    let dialogs = [
        {id: 1, name: "PROHOR"},
        {id: 2, name: "Andrey"},
        {id: 3, name: "Sveta"},
        {id: 4, name: "Sasha"},
        {id: 5, name: "Victor"},
        {id: 6, name: "Valera"},
    ]

    let messages = [
        {id: 1, message: "Hi"},
        {id: 2, message: "How us your it-kamasutra"},
        {id: 3, message: "Yo"},
        {id: 4, message: "Yo"},
        {id: 5, message: "Yo"},
    ]

    let dialogsElements = dialogs.map(d => {
        <DialogItem name={d.name} id={d.id}/>
    })
    let messagesElements = messages.map((m) => {
        <Message message={m.message}/>
    })


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>

                {dialogsElements}


            </div>
            <div className={s.messages}>
                {/*<Message message={messages[0].message}/>*/}
                {/*<Message message={messages[1].message}/>*/}
            </div>
        </div>

    )
}

export default Dialogs