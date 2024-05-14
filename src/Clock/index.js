import { ClockContainer } from "./styled";
import { useCurrentDate } from "./useCurrentDate";

const Clock = () => {
  const date = useCurrentDate();

  return (
    <ClockContainer>
      Dzisiaj jest&nbsp;
      {date.toLocaleString(undefined,
        {
          weekday: "long",
          day: "numeric",
          month: "long",
        }
      )},&nbsp;
      {date.toLocaleString(undefined,
        {
          hour: "numeric",
          minute: "numeric",
          second: "numeric"
        }
      )}
    </ClockContainer>
  )
};

export default Clock;