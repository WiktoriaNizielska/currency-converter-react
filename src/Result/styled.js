import styled from "styled-components";

export const Wrapper = styled.p`
    text-align: center;
    border: 1px solid ${({ theme }) => theme.color.silver};
    background-color: ${({ theme }) => theme.color.alabaster};
    box-shadow: 0 0 30px ${({ theme }) => theme.color.lynch};
    border-radius: 5px;
    padding: 10px 5px;
    margin-top: 40px;
`;