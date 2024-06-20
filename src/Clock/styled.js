import styled from "styled-components";

export const ClockContainer = styled.p`
    text-align: end;
    font-family: "Roboto Mono", monospace;
    font-size: 11px;
    color: ${({ theme }) => theme.color.lynch};
    margin: 5px 5px 30px;
    padding-bottom: 10px;

    @media(max-width:${({ theme }) => theme.breakpoint.mobileMax}px) {
        margin: 12px 5px 5px;
        font-size: 10px;
    }
`;
