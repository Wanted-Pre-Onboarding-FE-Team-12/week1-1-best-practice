import styled from 'styled-components';

export const Wrapper = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0.5rem 0;
  padding: 1.2rem;
  background: ${props => (props.isCompleted ? '#cacaca' : '#2d3647')};
  border: none;
  border-radius: 4px;
  list-style: none;
  transition: 0.2s linear;

  .todo {
    font-size: 16px;
    color: white;
    background: transparent;
    outline: none;
    border: none;
  }
  .task {
    button {
      background: transparent;
      border: none;
      outline: none;
      font-size: 25px;
      cursor: pointer;
      transition: 0.15s linear;
      &:hover {
        transform: scale(1.2);
      }
    }
    .onComplete {
      color: ${props => (props.isCompleted ? '#666' : '#fff')};
      &:hover {
        color: hsl(125, 67%, 35%);
      }
    }
    .onModify {
      color: ${props => (props.isCompleted ? '#666' : '#fff')};
      &:hover {
        color: hsl(29, 74%, 92%);
      }
    }
    .onDelete {
      color: ${props => (props.isCompleted ? '#666' : '#fff')};
      &:hover {
        color: hsl(360, 71%, 66%);
      }
    }
  }

  &:hover {
    background: ${props => (props.isCompleted ? '#999' : '#4a5568')};
  }
`;
