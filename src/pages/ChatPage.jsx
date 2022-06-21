import { collection, onSnapshot } from 'firebase/firestore'
import { firestoreDb } from '../index'
import { useState } from 'react'
import MessageContainer from '../components/MessageContainer'
import SendMessageBox from '../components/SendMessageBox'
import ChatHeaderCard from '../components/ChatHeaderCard'

export default function ChatPage () {

  return (
        <>
            <ChatHeaderCard/>
            <div className={'chat-box'} style={{ minHeight: `${window.innerHeight}px` }}>
                <MessageContainer fromMe={true} chatText={'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum'}/>
                <MessageContainer fromMe={false} chatText={'Hello'}/>
                <MessageContainer fromMe={true} chatText={'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum'}/>
                <MessageContainer fromMe={true} chatText={'Hello'}/>
                <MessageContainer fromMe={false} chatText={'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum'}/>
                <MessageContainer fromMe={false} chatText={'Hello'}/>
                <MessageContainer fromMe={true} chatText={'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum'}/>
                <MessageContainer fromMe={false} chatText={'Hello'}/>
                <MessageContainer fromMe={true} chatText={'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum'}/>
                <MessageContainer fromMe={true} chatText={'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum'}/>
                <MessageContainer fromMe={false} chatText={'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum'}/>
                <MessageContainer fromMe={false} chatText={'Hello'}/>
            </div>

            <div className={'d-flex w-100 position-sticky-bottom bg-fade-up'}>
                <SendMessageBox/>
            </div>

        </>
  )
}
