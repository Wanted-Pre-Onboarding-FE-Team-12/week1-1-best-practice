import styled from "styled-components";

export const Wrapper = styled.div`
    margin: 4rem auto 0;
    max-width: 800px;
`;

export const Form = styled.form`
    display: grid;
    grid-template-columns: 1fr auto;
    grid-gap: 1rem;

    #todo {
        height: 3rem;
    }

    button {
        width: 4rem;
        height: 3rem;
        font-size: 15px;
        font-weight: 600;
        color: white;
    }
`;
