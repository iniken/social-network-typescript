import React from 'react';
import s from "./Dialog.module.css"
import {NavLink} from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";


const Dialog = (props:any) => {

    let dialogsElements = props.state.dialogs.map((d:any) => <DialogItem name={d.name} id={d.id} /> );
    let messagesElements = props.state.messages.map((m:any) => <MessageItem message={m.message} /> );

    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogsItem}>
                    {dialogsElements}
                </div>
                <div className={s.messages}>
                    {messagesElements}
                </div>
            </div>
        </div>
    )
}

export default Dialog;
