import { authInstance } from './index';

export const getTodos = async authToken => {
  const data = await authInstance(authToken).get('/todos');
  return data;
};

export const createTodo = async (authToken, todo) => {
  const data = await authInstance(authToken).post('/todos', todo);
  return data;
};

export const updateTodo = async (authToken, id, todoData) => {
  const data = await authInstance(authToken).put(`/todos/${id}`, todoData);
  return data;
};

export const deleteTodo = async (authToken, id) => {
  const data = await authInstance(authToken).delete(`/todos/${id}`);
  return data;
};
