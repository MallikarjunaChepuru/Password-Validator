// Write your code here

import {useState} from 'react'

import {
  MainContainer,
  PasswordValidateContainer,
  Heading,
  Text,
  PasswordInput,
  ErrorMessage,
} from './styledComponents'

const PasswordValidator = () => {
  const [password, setPassword] = useState('')

  const onChangePassword = event => {
    setPassword(event.target.value)
  }

  const showErrorMessage = password.length < 8

  // console.log(password)

  return (
    <MainContainer>
      <PasswordValidateContainer>
        <Heading>Password Validator</Heading>
        <Text>Check how strong and secure is your password</Text>
        <PasswordInput
          type="password"
          onChange={onChangePassword}
          value={password}
        />
        {showErrorMessage && (
          <ErrorMessage>
            Your password must be at least 8 characters
          </ErrorMessage>
        )}
      </PasswordValidateContainer>
    </MainContainer>
  )
}
export default PasswordValidator
