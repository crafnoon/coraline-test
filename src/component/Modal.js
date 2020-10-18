import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

import { Link } from 'react-router-dom'

const Layout = styled.div`
  display: ${props => props.show ? 'block' : 'none'};
  box-sizing: border-box;
  position: fixed;
  top: 0;
  left: 0;
  width:100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
`

const CloseIcon = styled(FontAwesomeIcon)`
  position: absolute;
  top: 5px;
  right: 9px;
`

const ModalMask = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
  height: 100%;
  background-color: rgba(0,0,0,.45);
`

const ContentLayout = styled.div`
  padding: 30px;
  max-width: 500px;
  border-radius: 5px;
  position:fixed;
  background: white;
  width: 80%;
  height: auto;
  top:20%;
  left:50%;
  transform: translate(-50%,-50%);
  z-index: 10000;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Content = styled.div``

const GoToProfileBtn = styled(Link)`
  height: 32px;
  border-radius: 20px;
  padding: 15px;
  background-color: #F06115;
  border: 0;
  color: white;
  display: flex;
  align-items: center;
  margin-top: 15px;
  text-decoration: none;
  font-size: 14px;
  box-sizing: border-box;
  :focus {
    outline: transparent;
  }
`


const Modal = (props) => {
  const { show, onClose } = props
  const [isShow, setIsShow] = useState(false)
  useEffect(() => {
    if (show) {
      setIsShow(true)
    } else {
      setIsShow(false)
    }
  }, [show])
  
  return (
    <Layout show={isShow}>
      <ModalMask />
      <ContentLayout>
        <Content>
          {props.children}
        </Content>
        <GoToProfileBtn to="/profile">
          Go to profile 
        </GoToProfileBtn>
        <CloseIcon onClick={onClose} icon={faTimes}/>
      </ContentLayout>


    </Layout>
  )
  
}

export default Modal
