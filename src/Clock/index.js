import { ClockContainer } from "./styled";
import { useCurrentDate } from "./useCurrentDate";

const formatDate = (date) => date.toLocaleString(undefined,
  {
    weekday: "long",
    day: "numeric",
    month: "long",
    hour: "numeric",
    minute: "numeric",
    second: "numeric"
  });

const Clock = () => {
  const date = useCurrentDate();

  return (
    <ClockContainer>
      Dzisiaj jest&nbsp;
      {formatDate(date)}
    </ClockContainer>
  )
};

export default Clock;