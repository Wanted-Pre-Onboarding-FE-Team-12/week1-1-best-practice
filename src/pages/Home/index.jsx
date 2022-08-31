import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import AuthContext from 'store/authStore';

import TodoList from '@components/TodoList';
import TodoForm from '@components/TodoForm';
import Layout from 'layout';

const Home = () => {
  const { authToken } = useContext(AuthContext);

  return (
    <Layout>
      {!authToken && <Navigate to="/auth" replace />}
      <TodoForm />
      <TodoList />
    </Layout>
  );
};

export default Home;
