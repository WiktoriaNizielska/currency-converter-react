import styled from "styled-components";

export const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const AnimationContainer = styled.div`
  background-color: ${({ theme }) => theme.color.alabaster};
  border-radius: 20%;
  height: 80px;
  width: 80px;
  margin: 15px;
  animation-name: rotate;
  animation-duration: 3s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;

  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

export const LoadingAnimation = styled.div`
  background: ${({ theme }) => theme.color.wistful};
  height: 25px;
  width: 25px;
  border-radius: 50%;
  animation-name: load;
  animation-duration: 4s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  animation-fill-mode: both;

  @keyframes load {
    0% {
      background: ${({ theme }) => theme.color.wistful};
    }
    25% {
      margin-top: 0;
      margin-left: 55px;
      background: ${({ theme }) => theme.color.blueHaze};
    }
    50% {
      margin-top: 55px;
      margin-left: 55px;
      background: ${({ theme }) => theme.color.wistful};
    }
    75% {
      margin-top: 55px;
      margin-left: 0;
      background: ${({ theme }) => theme.color.blueHaze};
    }
  }
`;

export const LoadingText = styled.p`
  font-size: 25px;
  text-align: center;
  margin: 0;
  padding: 20px;
  animation-name: color;
  animation-duration: 2s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  animation-fill-mode: both;
  animation-direction: alternate;

  @keyframes color {
    from {
      color: ${({ theme }) => theme.color.wistful};
    }
    to {
      color: ${({ theme }) => theme.color.abbey};
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 15px;
  }
`;
