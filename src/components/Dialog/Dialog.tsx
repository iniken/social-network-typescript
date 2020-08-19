import React from 'react';
import s from "./Dialog.module.css"
import {NavLink} from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";


const Dialog = (props: any) => {

    let dialogsElements = props.stateData.dialogsData.map((dialogMap:any) => <DialogItem name={dialogMap.name} id={dialogMap.id} /> );
    let messagesElements = props.stateData.messagesData.map((messageMap:any) => <MessageItem message={messageMap.message} /> );

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
