import logo from '../images/Instagram_logo.svg'
import React, { useState } from 'react'
import routesConstants from '../routes/routesConstants'

export default function LoginPage (props) {
  // eslint-disable-next-line react/prop-types
  const { history } = props
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')

  function handleLogin () {
    if (userName === '' || password === '') {
      alert('Enter username and password to login')
    } else {
      localStorage.setItem('username', userName)
      // eslint-disable-next-line react/prop-types
      history.push(routesConstants.profileScreen)
    }
  }

  return (
        <>
            <div className={'d-flex position-absolute justify-content-center w-100 h-100 '}>
                <div className={'d-flex flex-column justify-content-center '}>
                    <div className={'card d-flex  flex-column align-items-center'}>
                        <img className={'p-10px'} src={logo} width={120} height={40}/>
                        <input
                            className={'w-300px p-5px m-10px'}
                            placeholder={'username'}
                            height={24}
                            onChange={(e) => {
                              setUserName(e.target.value)
                            }}
                        />
                        <input
                            className={'w-300px p-5px m-10px'}
                            placeholder={'password'}
                            height={24}
                            onChange={(e) => {
                              setPassword(e.target.value)
                            }}
                        />
                        <button
                            className={'m-20px'}
                            onClick={() => {
                              handleLogin()
                            }}>
                            Login
                        </button>
                    </div>
                </div>
            </div>

        </>
  )
}
