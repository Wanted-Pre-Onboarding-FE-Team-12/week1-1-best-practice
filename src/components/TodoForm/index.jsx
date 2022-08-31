import React, { useContext } from 'react';
import AuthContext from 'store/authStore';

import * as todoApi from '@api/todoApi';
import useInput from '@hooks/useInput';

// CSS
import { Wrapper, Form } from './style';
import { Label } from '@components/AuthForm/style';
import { Button } from '@components/UI/Button';
import TodoContext from 'store/todoStore';
import { validateTodo } from 'utils/validation';

const TodoForm = () => {
  const { authToken } = useContext(AuthContext);
  const { createTodo } = useContext(TodoContext);

  const {
    value: todo,
    isValid: todoIsValid,
    valueChangeHandler: onChangeTodo,
    inputBlurHandler: onBlurTodo,
    resetHandler,
  } = useInput(validateTodo);

  // Todo 추가
  const createTodoHandler = () => {
    todoApi
      .createTodo(authToken, { todo })
      .then(response => {
        createTodo(response.data);
      })
      .catch(error => {});
  };

  const formSubmitHandler = e => {
    e.preventDefault();
    createTodoHandler();
    resetHandler();
  };

  return (
    <Wrapper>
      <Form onSubmit={formSubmitHandler}>
        <Label>
          <div>
            <input
              type="text"
              id="todo"
              name="todo"
              value={todo}
              onChange={onChangeTodo}
              onBlur={onBlurTodo}
            />
          </div>
        </Label>
        <Button type="submit" disabled={!todoIsValid}>
          추가
        </Button>
      </Form>
    </Wrapper>
  );
};

export default TodoForm;
