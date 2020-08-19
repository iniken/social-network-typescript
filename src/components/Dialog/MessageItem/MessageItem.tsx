import React from 'react';
import s from "./MessageItem.module.css"


type MessageItemPropsType={
    message: string
}

const MessageItem = (props: MessageItemPropsType) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}

export default MessageItem;
