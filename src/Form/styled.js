import styled from "styled-components";

export const Fieldset = styled.fieldset`
    border: 1px solid rgb(204, 204, 204);
    background-color: hsla(0, 0%, 99%, 0.4);
    margin: 20px auto;
    box-shadow: 2px 8px 5px -9px rgba(78, 78, 83, 1);
    border-radius: 1px;
`;

export const Legend = styled.legend`
    background-color: rgba(97, 109, 143, 0.854);
    padding: 3px 10px;
    border-radius: 1px;
    color: rgb(240, 248, 255);
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
    border: 1px solid rgb(204, 204, 204);
    border-radius: 1px;
    color: rgb(53, 54, 54);
    background-color: rgba(245, 242, 242, 0.468);
`;

export const Button = styled.button`
    background-color: rgb(166, 177, 211);
    border: none;
    color: rgb(53, 54, 54);
    width: 100%;
    padding: 10px;
    border-radius: 1px;
    transition: 0.75s;

    &:hover{
        background-color: rgb(139, 148, 176);
    }

    &:active{
        background-color: rgb(123, 132, 157);
    }
`;