import styled from "styled-components";

export const Fieldset = styled.fieldset`
    border: 1px solid ${({ theme }) => theme.color.silver};
    background-color: ${({ theme }) => theme.color.alabaster};
    margin: 20px auto;
    box-shadow: 0 0 30px ${({ theme }) => theme.color.lynch};
    border-radius: 5px;
`;

export const Legend = styled.legend`
    background-color: ${({ theme }) => theme.color.lynch};
    padding: 3px 10px;
    border-radius: 5px;
    color: ${({ theme }) => theme.color.aliceBlue};
`;

export const LabelText = styled.span`
    display: inline-block;
    width: 100px;
    margin: 20px 20px 10px 10px;
`;

export const Select = styled.select`
    max-width: 400px;
    padding: 10px;
    margin: 0 auto;
    width: 100%;
    border: 1px solid ${({ theme }) => theme.color.silver};
    border-radius: 1px;
    color: rgb(53, 54, 54);
    background-color: ${({ theme }) => theme.color.alabaster};
`;

export const Button = styled.button`
    background-color: ${({ theme }) => theme.color.wistful};
    border: none;
    font-weight:500;
    color: ${({ theme }) => theme.color.capeCod};
    width: 100%;
    padding: 10px;
    margin: 15px 0  auto;
    border-radius: 4px;
    transition: 0.75s;

    &:hover{
        filter:brightness(80%);
    }

    &:active{
        filter:brightness(65%);
    }
`;

export const ExchangeDate = styled.p`
    color: ${({ theme }) => theme.color.lynch};
    margin: 0;
    font-size: 13px;
    text-align: center;
    padding-top: 15px;
`;