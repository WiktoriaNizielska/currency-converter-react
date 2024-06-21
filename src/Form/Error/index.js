import { ErrorText, ErrorAnimation } from "./styled";

export const Error = () => (
  <ErrorText>
    <ErrorAnimation>✖</ErrorAnimation>
    Wystąpił błąd! Sprawdź połączenie z internetem.
  </ErrorText>
);