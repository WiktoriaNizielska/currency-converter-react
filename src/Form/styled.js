import styled from "styled-components";

export const Fieldset = styled.fieldset`
    border: 1px solid ${({ theme }) => theme.color.silver};
    background-color: ${({ theme }) => theme.color.alabaster};
    margin: 20px auto;
    box-shadow: 2px 8px 5px -9px ${({ theme }) => theme.color.abbey};
    border-radius: 1px;
`;

export const Legend = styled.legend`
    background-color: ${({ theme }) => theme.color.lynch};
    padding: 3px 10px;
    border-radius: 1px;
    color: ${({ theme }) => theme.color.aliceBlue};
`;

export const LabelText = styled.span`
    display: inline-block;
    width: 100px;
    margin: 10px 10px;
`;

export const Select = styled.select`
    max-width: 400px;
    padding: 10px;
    margin: auto 5px 15px;
    width: 100%;
    border: 1px solid ${({ theme }) => theme.color.silver};
    border-radius: 1px;
    color: rgb(53, 54, 54);
    background-color: ${({ theme }) => theme.color.alabaster};
`;

export const Button = styled.button`
    background-color: ${({ theme }) => theme.color.wistful};
    border: none;
    color: ${({ theme }) => theme.color.capeCod};
    width: 100%;
    padding: 10px;
    border-radius: 1px;
    transition: 0.75s;

    &:hover{
        filter:brightness(80%);
    }

    &:active{
        filter:brightness(80%);
    }
`;

export const Error = styled.p`
    margin: 10px 10px;
`;

export const Container = styled.div`
    margin: 10px 10px;
`;