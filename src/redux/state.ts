
 export type RootStateDataType= {
    profilePage: ProfilePageType
    dialogsPage: DialogPageType

}
 export type PostsDataType= {
    id: number
    message: string
    likesCount: number
}
export type DialogsDataType = {
    id: number
    name: string
}
export type MessagesDataType = {
    id: number
    message: string
}
export type ProfilePageType= {
    postsData: Array<PostsDataType>
}
export type DialogPageType= {
    dialogsData: Array<DialogsDataType>
    messagesData: Array<MessagesDataType>
}
let stateData: RootStateDataType = {
    profilePage: {
        postsData: [
            {id: 1, message: "Hi,how are you?", likesCount: 22},
            {id: 2, message: "Good", likesCount: 15},
            {id: 3, message: "How do you do?", likesCount: 2},
            {id: 4, message: "It is OK!!?", likesCount: 212},
            {id: 5, message: "how are you?", likesCount: 73}
        ]
    },
    dialogsPage: {
        dialogsData: [
            {id: 1, name: "Dimych"},
            {id: 2, name: "Andrey"},
            {id: 3, name: "Sveta"},
            {id: 4, name: "Sasha"},
            {id: 5, name: "Viktor"},
            {id: 6, name: "Valera"}
        ],
        messagesData: [
            {id: 1, message: "Hi"},
            {id: 2, message: "How is you it-kamasutra?"},
            {id: 3, message: "How are you?"},
            {id: 4, message: "What is your name?"},
            {id: 5, message: "Good!"},
            {id: 6, message: "Yo"}
        ]

    },
};

export default stateData;