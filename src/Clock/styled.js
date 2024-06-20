import styled from "styled-components";

export const ClockContainer = styled.p`
    text-align: end;
    font-family: "Roboto Mono", monospace;
    font-size: 11px;
    color: ${({ theme }) => theme.color.lynch};
    margin: 5px 5px 30px;

    @media(max-width:767px) {
        margin: 12px 5px 5px;
        font-size: 10px;
    }
`;
