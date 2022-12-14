import React, { useContext, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import AuthContext from 'store/authStore';
import useInput from '@hooks/useInput';
import * as authApi from '@api/authApi';
import { validateEmail, validatePassword } from 'utils/validation';

// CSS
import { Error, Form, Header, Label, LinkContainer, Link, Wrapper } from './style';
import { Button } from '@components/UI/Button';

const AuthForm = () => {
  const { authFormType, toggleAuthFormType, setToken } = useContext(AuthContext);
  const navigate = useNavigate();
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const {
    value: email,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: onChangeEmail,
    inputBlurHandler: onBlurEmail,
  } = useInput(validateEmail);

  const {
    value: password,
    isValid: passwordIsValid,
    hasError: passwordHasError,
    valueChangeHandler: onChangePassword,
    inputBlurHandler: onBlurPassword,
  } = useInput(validatePassword);

  // 로그인, 회원가입 전환
  const toggleFormType = () => {
    if (authFormType === 'login') toggleAuthFormType('signup');
    if (authFormType === 'signup') toggleAuthFormType('login');
  };

  // Login
  const login = () => {
    authApi
      .signin({ email, password })
      .then(response => {
        setToken(response.data.access_token);
        navigate('/todo', { replace: true });
      })
      .catch(error => {});
  };

  // Signup
  const signup = () => {
    authApi
      .signup({ email, password })
      .then(() => {
        toggleAuthFormType('login');
        alert('회원가입 완료');
      })
      .catch(error => {
        alert(error.response.data.message);
      });
  };

  // Form Submit
  const formSubmitHandler = e => {
    e.preventDefault();
    if (authFormType === 'login') login();
    if (authFormType === 'signup') signup();
  };

  return (
    <Wrapper>
      <Header>{authFormType === 'login' ? '로그인' : '회원가입'}</Header>
      <Form onSubmit={formSubmitHandler}>
        <Label id="email-label" error={emailHasError}>
          <span>이메일 주소</span>
          <div>
            <input
              ref={emailRef}
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={onChangeEmail}
              onBlur={onBlurEmail}
            />
          </div>
          {emailHasError && <Error>이메일 형식(@포함)을 확인해주세요.</Error>}
        </Label>
        <Label id="password-label" error={passwordHasError}>
          <span>비밀번호</span>
          <div>
            <input
              ref={passwordRef}
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={onChangePassword}
              onBlur={onBlurPassword}
            />
          </div>
          {passwordHasError && <Error>비밀번호를 8자 이상으로 설정해주세요.</Error>}
        </Label>
        <Button type="submit" disabled={!emailIsValid && passwordIsValid}>
          {authFormType === 'login' ? '로그인' : '회원가입'}
        </Button>
      </Form>
      <LinkContainer>
        {authFormType === 'login' ? '아직 회원이 아니신가요?' : '이미 회원이신가요?'}
        <Link onClick={toggleFormType}>{authFormType === 'login' ? '회원가입' : '로그인'}</Link>
      </LinkContainer>
    </Wrapper>
  );
};

export default AuthForm;
