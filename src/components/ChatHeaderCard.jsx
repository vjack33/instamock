import React from 'react'
import homeIcon from '../images/home.svg'
import profilePic from '../images/profile_pic.jpeg'

export default function ChatHeaderCard () {
  return (
        <>
            <div className={'position-sticky-top'}>
                <div className={'d-flex flex-row justify-content-space-between align-items-center bg-white'}>
                    <div className={'d-flex align-items-center'}>
                        <img className={'p-10px'} src={homeIcon} width={24} height={24}/>
                        <img className={'p-10px rounded-image'} src={profilePic} width={40} height={40}/>
                        <div className={'d-flex flex-column'}>
                            <span>user_name</span>
                            <span className={'font-size-12'}>user_id</span>
                        </div>
                    </div>
                    <div className={'d-flex align-items-center'}>
                        <img className={'p-10px'} src={homeIcon} width={24} height={24}/>
                        <img className={'p-10px'} src={homeIcon} width={24} height={24}/>
                    </div>
                </div>
                <div className={'h-1px bg-d7d7d7'}></div>
            </div>
        </>
  )
}
