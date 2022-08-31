import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';

import AuthContext from 'store/authStore';
import AuthForm from '@components/AuthForm';
import Layout from 'layout';

const Auth = () => {
  const { authToken } = useContext(AuthContext);

  return (
    <Layout>
      {authToken && <Navigate to="/todo" replace />}
      <AuthForm />
    </Layout>
  );
};

export default Auth;
