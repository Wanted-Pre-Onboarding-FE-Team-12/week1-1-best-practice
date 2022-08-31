import styled from "styled-components";

export const Box = styled.div`
    position: absolute;
    width: 600px;
    height: auto;
    top: 50%;
    left: 50%;
    background: hsl(210, 31%, 80%);
    border-radius: 7px;
    padding: 2rem;
    box-shadow: 6px 7px 13px 0px rgba(0, 0, 0, 0.57);
    transform: translate(-50%, -50%);

    .modal-container {
        display: flex;
        flex-direction: column;
        align-items: center;

        margin: 0 auto;
        p {
            font-size: 22px;
            margin-bottom: 3rem;
        }
    }
    .modify-container {
        width: 100%;
        text-align: center;
        p {
            margin-bottom: 1rem;
        }
        input {
            width: 80%;
            height: 3rem;
            padding: 0 1rem;
            font-size: 20px;
            border: none;
            border-radius: 4px;
            margin-bottom: 3rem;
        }
    }

    .btn-container {
        button {
            padding: 1rem 2.3rem;
            margin: 0 1.3rem;
            background: hsl(210, 42%, 49%);
            color: #fff;
            font-size: 17px;
            border: none;
            cursor: pointer;
            transition: 0.14s linear;

            &:hover {
                transform: translateY(-5px);
            }

            &:nth-child(1) {
                background: hsl(360, 47%, 44%);
            }
        }
    }
`;
