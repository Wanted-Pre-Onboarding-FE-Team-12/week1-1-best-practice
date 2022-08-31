import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 30rem;
  margin: 10rem auto 0;
`;
export const Header = styled.header`
  text-align: center;
  font-size: 3rem;
  margin: 5rem 0;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.6rem;

  span {
    display: block;
    padding-bottom: 0.8rem;
    font-size: 1.3rem;
    font-weight: 500;
    color: ${props => (props.error ? `#f77` : `#111`)};
    cursor: pointer;
  }

  input {
    background: ${props => (props.error ? `rgba(255, 199, 199, 0.2)` : `#fff`)};
    width: 100%;
    height: 4rem;
    margin: 0 0 2rem;
    padding: 1.2rem;
    font-size: 1.3rem;
    box-sizing: border-box;
    border-radius: 4px;
    border: 1px solid ${props => (props.error ? `#f77` : `#dbdbdb`)};
    outline: none;
    transition: border 80ms ease-out, box-shadow 80ms ease-out;

    &:focus {
      box-shadow: 0 0 0 5px
        ${props => (props.error ? `rgba(255, 199, 199, 0.5)` : `rgba(130, 224, 250, 0.5)`)};
    }
  }
`;

export const Error = styled.div`
  margin: -1rem 0 1.5rem;
  font-size: 1.4rem;
  color: #f77;
`;

export const Success = styled.div`
  color: #2eb67d;
`;

export const LinkContainer = styled.p`
  margin: 3rem auto;
  font-size: 1.2rem;
`;

export const Link = styled.a`
  color: #1264a3;
  font-weight: 600;
  margin-left: 1rem;
  &:hover {
    text-decoration: underline;
  }
`;
