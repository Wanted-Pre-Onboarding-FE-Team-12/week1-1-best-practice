import React, { useContext } from 'react';
import { useMatch } from 'react-router-dom';

import AuthContext from 'store/authStore';

// CSS
import { Button } from '@components/UI/Button';
import { Wrapper } from './style';

const Header = () => {
  const isTodoPage = useMatch('/todo');
  const { authToken, removeToken } = useContext(AuthContext);

  const logout = () => {
    if (authToken) removeToken();
  };

  return (
    <Wrapper>
      <div className="title">
        <h1>{isTodoPage ? 'To Do List' : 'Auth'}</h1>
      </div>
      {authToken && <Button onClick={logout}>로그아웃</Button>}
    </Wrapper>
  );
};

export default Header;
