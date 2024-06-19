import styled from "styled-components";

export const ErrorText = styled.div`
    margin: 40px 20px 30px;
    text-align: center;
    font-size: 25px;
    border-radius: 5px;
    color: ${({ theme }) => theme.color.grey};    

    @media(max-width:767px) {
        font-size: 15px;
    }
`;

export const ErrorAnimation = styled.p`
    font-size: 50px;
    margin: 0;
    padding: 10px 10px 20px;
    opacity: 80%;
    text-shadow: 4px 4px 6px ${({ theme }) => theme.color.lynch};
    animation: 1s linear infinite alternate both color ;

    @keyframes color {
        from{
            color: ${({ theme }) => theme.color.grey};
        }
        to{
            color: ${({ theme }) => theme.color.red};
        }
    }
`;