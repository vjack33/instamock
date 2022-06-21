import chatIcon from '../images/chat.svg'
import compassIcon from '../images/compass.svg'
import likesIcon from '../images/likes.svg'
import { useState } from 'react'

export default function SendMessageBox (props) {
  const [showSendBtn, setShowSendBtn] = useState(false)

  function sendMessage (toUser, msgText) {
    console.log(toUser + msgText)
  }

  function handleTextChanger (input) {
    if (input === '') {
      setShowSendBtn(false)
    } else {
      setShowSendBtn(true)
    }
  }

  return (
        <>
            <div className={'d-flex border-1px-d7d7d7 w-100 rad-22px m-20px align-items-center'}>
                <img className={'p-10px'} src={chatIcon} width={24} height={24}/>
                <input
                    className={'p-10px w-70 bg-none'}
                    placeholder={'send msg...'}
                    height={24}
                    onChange={(e) => {
                      handleTextChanger(e.target.value)
                    }}
                />
                <div hidden={showSendBtn} className={'position-absolute-right pr-20px'}>
                    <img className={'p-10px'} src={compassIcon} width={24} height={24}/>
                    <img className={'p-10px'} src={likesIcon} width={24} height={24} onClick={() => {
                      sendMessage()
                    }}/>
                </div>
                <span hidden={!showSendBtn} className={'position-absolute-right pr-40px font-bold color-blue'}>Send</span>
            </div>
        </>
  )
}
