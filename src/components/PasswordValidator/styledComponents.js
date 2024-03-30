// Style your elements here
import styled from 'styled-components'

export const MainContainer = styled.div`
  background-color: #24263c;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const PasswordValidateContainer = styled.div`
  background-color: #383a4e;
  height: 32vh;
  min-width: 350px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  @media screen and (min-width: 768px) {
    height: 40vh;
    width: 50%;
    min-width: 520px;
    max-width: 600px;
  }
`
export const Heading = styled.h1`
  color: white;
  font-family: 'Roboto';
  font-weight: bold;
  font-size: 25px;
  margin: 0px;
  line-height: 1.2 @media screen and (min-width: 768px) {
    font-size: 50px;
  }
`

export const Text = styled.p`
  color: #f8fafc;
  font-family: 'Roboto';
  font-size: 16px;
  width: 80%;
  text-align: center;
  margin-top: 12px;
  margin-bottom: 12px;
  line-height: 1.33;
  @media screen and (min-width: 768px) {
    font-size: 18px;
    width: 100%;
    margin-top: 24px;
    margin-bottom: 24px;
  }
`

export const PasswordInput = styled.input`
  color: #475569;
  background-color: #edeeff;
  font-size: 14px;
  height: 43px;
  border: 1px solid #24263c;
  @media screen and (min-width: 768px) {
    font-size: 24px;
    height: 47px;
  }
`

export const ErrorMessage = styled.p`
  color: #ef4444;
  font-family: 'Roboto';
  font-size: 12px;
  margin-top: 10px;

  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`
