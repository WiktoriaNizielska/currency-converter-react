import { useEffect, useState } from "react";
import { ClockContainer } from "./styled";

const Clock = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDate(new Date())
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

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