import React, { useState, useEffect } from 'react'
import styled  from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faLock, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import Modal from '../component/Modal'

const Layout = styled.div`
  &:after {
    background-image: url("https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/rm281-adj-040-e.jpg?bg=transparent&con=3&cs=srgb&dpr=1&fm=jpg&ixlib=php-3.1.0&q=65&usm=15&vib=3&w=600&s=96aa65ac3350b3cefe002a7c88d0e098");
    opacity: 0.5;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
    z-index: -1;   
  }
  display: flex;
  background-image: url("https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/rm281-adj-040-e.jpg?bg=transparent&con=3&cs=srgb&dpr=1&fm=jpg&ixlib=php-3.1.0&q=65&usm=15&vib=3&w=600&s=96aa65ac3350b3cefe002a7c88d0e098");
  background-size: cover;
  height: 100%;
  flex-direction: column;
  align-items: center;
`

const LoginLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const LogoLayout = styled.div`
  display: flex;
  align-items: flex-end;
  padding: 20px 0;

`

const Logo = styled.img``

const LogoText = styled.span`
  font-weight: bold;
`
const MessageBox = styled.div`
  display: ${({show}) => show ?  'block': 'none'};
  padding: 10px;
  border-radius: 10px;
  margin-bottom: 10px;
  width: 225px;
  background-color: #ffe3e6;
  border-color: rgba(158,28,35,.2);
  font-size: 12px;
`

const UserNameLayout = styled.div`
  position: relative;
`
const UserNameIcon = styled(FontAwesomeIcon)`
  position: absolute;
  top: 7px;
  left: 14px;
`
const UserName = styled.input`
  height: 32px;
  border-radius: 20px;
  min-width: 200px;
  max-width: 500px;
  border: 0;
  margin-bottom: 10px;
  box-shadow: rgb(225, 225, 225) 0px 0px 10px 0px;
  padding-left: 35px;
  :focus {
    outline: transparent;
  }
`

const PasswordLayout = styled.div`
  position: relative;
`

const PasswordIcon = styled(FontAwesomeIcon)`
  position: absolute;
  top: 7px;
  left: 14px;
`
const Password = styled.input`
  height: 32px;
  border-radius: 20px;
  min-width: 200px;
  max-width: 500px;
  border: 0;
  margin-bottom: 10px;
  box-shadow: rgb(225, 225, 225) 0px 0px 10px 0px;
  padding-left: 35px;
  :focus {
    outline: transparent;
  }
`

const ShowPasswordIcon = styled(FontAwesomeIcon)`
  position: absolute;
  top: 9px;
  right: 14px;
`

const LoginBtn = styled.button`
  height: 32px;
  border-radius: 20px;
  padding: 15px;
  background-color: #F06115;
  border: 0;
  color: white;
  display: flex;
  align-items: center;
  margin-top: 15px;
  cursor: pointer;
  :focus {
    outline: transparent;
  }
`



const Login = () => {
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [userNameValidate, setUserNameValidate] = useState(false)
  const [passwordValidate, setPasswordValidate] = useState(false)
  const [showWarningMsg, setShowWarningMsg] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [submitCount, setSubmitCount] = useState(0)
  const [showPassword, setShowPassword] = useState(false)

  const userNameOnChange = (e) => {
    setUserName(e.target.value)
  }

  const passwordOnChange = (e) => {
    setPassword(e.target.value)
  }

  const validateUserName = () => {
    if (userName) {
      setUserNameValidate(false)
    }
    else {
      setUserNameValidate(true)
    }
  }

  const validatePassword = () => {
    if (password === 'P@$$W0RD') {
      setPasswordValidate(false)
    }
    else {
      setPasswordValidate(true)
    }
  }

  const LoginOnClick = () => {
    validateUserName()
    validatePassword()
    setSubmitCount(submitCount+1)
  }

  const showPasswordOnClick = () => {
    const passwordDom = document.getElementById('password-input')
    if (passwordDom.type === 'password') {
      passwordDom.type = 'text'
      setShowPassword(true)
    }
    else {
      passwordDom.type = 'password'
      setShowPassword(false)
    }
  }

  useEffect(() => { 
    if (userNameValidate || passwordValidate) {
      setShowWarningMsg(true)
    }
    if (!userNameValidate && !passwordValidate && submitCount > 0) {
      setShowWarningMsg(false)
      setShowModal(true)
    }
  }, [userNameValidate, passwordValidate, submitCount])


  return (
  <Layout>
    <LogoLayout>
      <Logo src="https://static.wixstatic.com/media/1a8a04_bb4575cf8a4a40a6960911310897e415~mv2.png/v1/fill/w_40,h_40,al_c,q_85,usm_0.66_1.00_0.01/1a8a04_bb4575cf8a4a40a6960911310897e415~mv2.webp" />
      <LogoText></LogoText>CORALINE
    </LogoLayout>
    
    <LoginLayout>
      <MessageBox show={showWarningMsg}>please input username or check your password is P@$$W0RD</MessageBox>
      <UserNameLayout>
        <UserNameIcon icon={faUser} />
        <UserName
          validate={userNameValidate}
          onChange={userNameOnChange}
          placeholder='username'
          maxLength={20}
        />

      </UserNameLayout>
      <PasswordLayout>
        <PasswordIcon icon={faLock} />
        <Password
          id="password-input"
          type="password"
          placeholder="password"
          validate={passwordValidate}
          onChange={passwordOnChange}
          maxLength={20}
        />
        <ShowPasswordIcon onClick={showPasswordOnClick} icon={showPassword ? faEyeSlash : faEye } />
      </PasswordLayout>
      <LoginBtn onClick={LoginOnClick}>Login</LoginBtn>
      <Modal show={showModal} onClose={() => setShowModal(false)}>
        ยินดีต้อนรับ คุณ {userName} เข้าสู่ระบบ
      </Modal>
    </LoginLayout>
  </Layout>
  )
}

export default Login
