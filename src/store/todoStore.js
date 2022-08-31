import React, { useContext, useState } from 'react';
import * as todoApi from '@api/todoApi';
import AuthContext from './authStore';

const TodoContext = React.createContext({
  todos: [],
  todoId: '',
  content: {},
  setTodos: () => {},
  setTodoId: () => {},
  setContent: () => {},
  getTodo: () => {},
  createTodo: () => {},
  updateTodo: () => {},
});

export const TodoContextProvider = ({ children }) => {
  const { authToken } = useContext(AuthContext);
  const [todos, setTodos] = useState([]);
  const [todoId, setTodoId] = useState('');
  const [content, setContent] = useState('');

  // TodoList 불러오기
  const getTodoHandler = () => {
    todoApi
      .getTodos(authToken)
      .then(response => {
        setTodos(response.data);
      })
      .catch(error => {});
  };

  // Todo 생성
  const createTodoHandler = todo => {
    setTodos(prev => {
      return [...prev, todo];
    });
  };

  // Todo 수정
  const updateTodoHandler = (id, todoData) => {
    todoApi
      .updateTodo(authToken, id, todoData)
      .then(() => {
        getTodoHandler();
      })
      .catch(error => {
        if (error.response) {
          alert('오류발생, 수정되지 않았습니다!');
        }
      });
  };

  // Todo 삭제
  const deleteTodoHandler = id => {
    todoApi
      .deleteTodo(authToken, id)
      .then(() => {
        getTodoHandler();
      })
      .catch(error => {
        if (error.response) {
          alert('오류발생, 삭제되지 않았습니다!');
        }
      });
  };

  const contextValue = {
    todos,
    todoId,
    content,
    setTodos,
    setTodoId,
    setContent,
    getTodo: getTodoHandler,
    createTodo: createTodoHandler,
    updateTodo: updateTodoHandler,
    deleteTodo: deleteTodoHandler,
  };
  return <TodoContext.Provider value={contextValue}>{children}</TodoContext.Provider>;
};

export default TodoContext;
