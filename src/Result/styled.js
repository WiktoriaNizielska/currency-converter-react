import styled from "styled-components";

export const Wrapper = styled.p`
    text-align: center;
    border: 1px solid ${({ theme }) => theme.color.silver};
    background-color: ${({ theme }) => theme.color.alabaster};
    box-shadow: 2px 8px 5px -9px ${({ theme }) => theme.color.abbey};
    border-radius: 2px;
    padding: 2px;
`;