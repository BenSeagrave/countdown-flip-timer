import { useEffect, useState } from "react";

const useParseDate = (currentTime, endTime) => {
  const [days, setDays] = useState("1");
  const [hours, setHours] = useState("2");
  const [minutes, setMinutes] = useState("3");
  const [seconds, setSeconds] = useState("4");
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    let difference = Math.floor((endTime - currentTime) / 1000);
    if (difference < 0) { return setIsFinished(true) }

    // calculate days
    let days = Math.floor(difference / (86400));
    difference %= 86400;
    setDays(days);

    // calculate hours
    let hours = Math.floor(difference / (60 * 60));
    difference %= 3600;
    setHours(hours);

    // calculate minutes
    let minutes = Math.floor(difference / 60);
    difference %= 60;
    setMinutes(minutes);

    // calculate seconds
    let seconds = difference % 60;
    setSeconds(seconds);
  }, [currentTime, endTime])


  return {
    days,
    hours,
    minutes,
    seconds,
    isFinished
  }
}

export default useParseDate;