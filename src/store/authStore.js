import React, { useState } from 'react';

const AuthContext = React.createContext({
  authFormType: '',
  authToken: '',
  toggleAuthFormType: () => {},
  setToken: () => {},
  removeToken: () => {},
});

export const AuthContextProvider = ({ children }) => {
  const [authFormType, setAuthFormType] = useState('login');
  const initialToken = localStorage.getItem('token');
  const [authToken, setAuthToken] = useState(initialToken);

  const toggleAuthFormTypeHandler = formType => {
    setAuthFormType(formType);
  };

  const setTokenHandler = token => {
    setAuthToken(token);
    localStorage.setItem('token', token);
  };
  const removeTokenHandler = () => {
    setAuthToken('');
    localStorage.removeItem('token');
  };

  const contextValue = {
    authFormType: authFormType,
    authToken: authToken,
    toggleAuthFormType: toggleAuthFormTypeHandler,
    setToken: setTokenHandler,
    removeToken: removeTokenHandler,
  };

  return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>;
};
export default AuthContext;
