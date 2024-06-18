import { LoadingAnimation, LoadingText, LoadingContainer, AnimationContainer } from "./styled"

export const Loading = () => (
  <LoadingContainer>
    <AnimationContainer>
      <LoadingAnimation />
    </AnimationContainer>
    <LoadingText>
      Ładowanie kursów walut...
    </LoadingText>
  </LoadingContainer>
);