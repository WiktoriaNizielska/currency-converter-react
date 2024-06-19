import { ErrorText, ErrorAnimation } from "./styled";

export const Error = () => (
  <ErrorText>
    <ErrorAnimation>✖</ErrorAnimation>
    Wystąpił błąd! Sprawdź połącenie z intrnetem.
  </ErrorText>
);