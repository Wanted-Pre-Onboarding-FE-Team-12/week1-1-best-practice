import React, { useContext, useState } from "react";
import ModalContext from "store/modalStore";
import TodoContext from "store/todoStore";

// CSS
import { Modal } from "@mui/material";
import { Box } from "./style";

const CustomModal = ({ content }) => {
    const { modalOpen, setModalOpen, updateMode, setUpdateMode } =
        useContext(ModalContext);
    const { updateTodo, deleteTodo, todoId } = useContext(TodoContext);
    const [newTodo, setNewTodo] = useState(content.todo);

    const onChangeHandler = (e) => {
        setNewTodo(e.target.value);
    };

    const onClose = () => {
        setModalOpen(false);
        setUpdateMode(false);
    };

    const onDelete = () => {
        deleteTodo(todoId);
        onClose();
    };

    const onModify = () => {
        updateTodo(content.id, {
            todo: newTodo,
            isCompleted: content.isCompleted,
        });
        onClose();
    };

    return (
        <Modal
            open={modalOpen}
            onClose={onClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box>
                <div className="modal-container">
                    {updateMode ? (
                        <div className="modify-container">
                            <p>Todo 수정</p>
                            <input value={newTodo} onChange={onChangeHandler} />
                        </div>
                    ) : (
                        <p>삭제하시겠습니까?</p>
                    )}

                    <div className="btn-container">
                        <button onClick={onClose}>취소</button>
                        <button onClick={updateMode ? onModify : onDelete}>
                            확인
                        </button>
                    </div>
                </div>
            </Box>
        </Modal>
    );
};

export default CustomModal;
