import React, { useContext } from 'react';
import ModalContext from 'store/modalStore';
import TodoContext from 'store/todoStore';

// CSS
import { Wrapper } from './style';
import { BsFillCheckCircleFill, BsFillTrashFill } from 'react-icons/bs';
import { MdModeEditOutline } from 'react-icons/md';

const TodoItem = ({ id, todo, isCompleted }) => {
  const { setTodoId, setContent, updateTodo } = useContext(TodoContext);
  const { setModalOpen, setUpdateMode } = useContext(ModalContext);

  // 완료 버튼 클릭
  const completeTodoHandler = () => {
    updateTodo(id, { todo, isCompleted: !isCompleted });
  };

  // 수정 버튼 클릭
  const handleModify = () => {
    setModalOpen(true);
    setUpdateMode(true);
    setContent({ id, todo, isCompleted });
  };

  // 삭제 버튼 클릭
  const handleDelete = () => {
    setModalOpen(true);
    setTodoId(id);
  };

  return (
    <>
      <Wrapper isCompleted={isCompleted}>
        <div className="todo">{todo}</div>
        <div className="task">
          <button className="onComplete" onClick={completeTodoHandler}>
            <BsFillCheckCircleFill />
          </button>
          <button className="onModify" onClick={handleModify}>
            <MdModeEditOutline />
          </button>
          <button className="onDelete" onClick={handleDelete}>
            <BsFillTrashFill />
          </button>
        </div>
      </Wrapper>
    </>
  );
};

export default TodoItem;
