import React from 'react'
import styled  from 'styled-components'
import img from '../assets/myImg.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap, faBirthdayCake, faUser, faBriefcase, faBook, faGamepad, faApple } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

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
  background-image: url("https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/rm281-adj-040-e.jpg?bg=transparent&con=3&cs=srgb&dpr=1&fm=jpg&ixlib=php-3.1.0&q=65&usm=15&vib=3&w=600&s=96aa65ac3350b3cefe002a7c88d0e098");
  background-size: cover;
  height: 100%;
  flex-direction: column;
  align-items: center;
`

const ImageLayout = styled.div`
  padding: 20px 0;
`

const Image = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
`

const NameLayout = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const Name = styled.h1``

const NickName = styled.span`
  margin-left: 8px;
  font-size: 28px;
`

const ContentLayout = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 10px;
`

const LeftSide = styled.div`
  width: 49%;
`

const RightSide = styled.div`
  width: 49%;
`

const WhiteBox = styled.div`
  background-color: #ffffff;
  box-shadow: rgb(225, 225, 225) 0px 0px 10px 0px;
  border-radius: 5px;
  padding: 15px;
  margin-bottom: 5px;
`

const Icon = styled(FontAwesomeIcon)`
  margin-right: 20px;
  width: 20px;
`


const Title = styled.div`
  font-weight: 700;
  font-size: 20px;
  line-height: 1.2;
  margin-bottom: 15px;
`

const Text = styled.div`
  font-weight: 600;
  font-size: 16px;
  line-height: 1.2;
`

const DetailLayout = styled.div`
  display: flex;
  margin-bottom: 5px;
`

const ButtonLayout = styled.div`
  display: flex;
  justify-content: center;
`

const SignOut = styled(Link)`
  height: 32px;
  border-radius: 20px;
  padding: 15px;
  background-color: red;
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


const Profile = () => {
 
  return (
    <Layout>
      <ImageLayout>
        <Image
          src={img}
        />
      </ImageLayout>
      <NameLayout>
        <Name>Chakarin Amonkitwanit</Name>
        <NickName>(Kanun)</NickName>
      </NameLayout>
      <ContentLayout>
        <LeftSide>
          <WhiteBox>
            <Title>
              Biography
            </Title>
            <DetailLayout>
              <Icon icon={faGraduationCap} />
              <Text>
                Assumption Collect Thonburi
              </Text>
            </DetailLayout>
            <DetailLayout>
              <Icon icon={faGraduationCap} />
              <Text>
                Computer Science Silpakorn University
              </Text>
            </DetailLayout>
            <DetailLayout>
              <Icon icon={faUser} />
              <Text style={{marginLeft: '5px'}}>
                Gender male
              </Text>
            </DetailLayout>
            <DetailLayout>
              <Icon icon={faBirthdayCake} />
              <Text style={{marginLeft: '5px'}}>
                24 May 1992
              </Text>
            </DetailLayout>
          </WhiteBox>
          <WhiteBox>
            <Title>
              Hooby
            </Title>
            <DetailLayout>
              <Icon icon={faGamepad} />
              <Text>
                Playing Video Game, Watch Movie
              </Text>
            </DetailLayout>
            <DetailLayout>
              <Icon icon={faBook} />
              <Text style={{marginLeft: '5px'}}>
                Cook
              </Text>
            </DetailLayout>
          </WhiteBox>
        </LeftSide>
        <RightSide>
          <WhiteBox>
            <Title>
              Work Experience : ประวัติการทำงาน
            </Title>
            <DetailLayout>
              <Icon icon={faBriefcase} />
              <Text>
                Software Development Endineer at Legal Drive Nov 2016 - Nov 2018
              </Text>
            </DetailLayout>
            <DetailLayout>
              <Icon icon={faBriefcase} />
              <Text>
                Software Development Engineer at Ticketmelon Dec 2018 - Mar 2019
              </Text>
            </DetailLayout>
            <DetailLayout>
              <Icon icon={faBriefcase} />
              <Text>
                Software Development Engineer at Central Tech May 2019 - Sep 2020
              </Text>
            </DetailLayout>
            <DetailLayout>
              <Icon icon={faBook} />
              <Text>
                Skills: JavaScript / React / Redux / Express / HTML5 / CSS / POSTGRE SQL
              </Text>
            </DetailLayout>
          </WhiteBox>
        </RightSide>
      </ContentLayout>
      <ButtonLayout>
        <SignOut to="/login">
          Sign Out
        </SignOut>
      </ButtonLayout>
    </Layout>
  )
}

export default Profile
