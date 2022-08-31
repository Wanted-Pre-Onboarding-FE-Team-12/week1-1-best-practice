import React, { useContext, useEffect } from 'react';
import CustomModal from '@components/Modal';
import TodoContext from 'store/todoStore';
import TodoItem from '@components/TodoItem';
import ModalContext from 'store/modalStore';

// CSS
import { Wrapper } from './style';

const TodoList = () => {
  const { todos, content, getTodo } = useContext(TodoContext);
  const { modalOpen } = useContext(ModalContext);

  useEffect(() => {
    getTodo();
  }, [getTodo]);

  return (
    <Wrapper>
      {todos.map((item, index) => (
        <TodoItem key={index} todo={item.todo} isCompleted={item.isCompleted} id={item.id} />
      ))}
      {modalOpen && <CustomModal content={content} />}
    </Wrapper>
  );
};

export default TodoList;
