import React from 'react'

import logo from '../images/Instagram_logo.svg'
import homeIcon from '../images/home.svg'
import chatIcon from '../images/chat.svg'
import postIcon from '../images/new_post.svg'
import compassIcon from '../images/compass.svg'
import likesIcon from '../images/likes.svg'

export default function HeaderCard () {
  return (
        <>
            <div className={'position-sticky-top'}>
                <div className={'d-flex flex-row justify-content-space-between align-items-center bg-white'}>
                    <img className={'p-10px'} src={logo} width={120} height={40}/>
                    <div>
                        <img className={'p-10px'} src={homeIcon} width={24} height={24}/>
                        <img className={'p-10px'} src={chatIcon} width={24} height={24}/>
                        <img className={'p-10px'} src={postIcon} width={24} height={24}/>
                        <img className={'p-10px'} src={compassIcon} width={24} height={24}/>
                        <img className={'p-10px'} src={likesIcon} width={24} height={24}/>
                        <img className={'p-10px'} src={likesIcon} width={24} height={24}/>
                    </div>
                </div>
                <div className={'h-1px bg-d7d7d7'}></div>
            </div>
        </>
  )
}
