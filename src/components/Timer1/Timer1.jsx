import { useRef, useState, useEffect } from "react";

export default function Timer1() {
  const [time, setTime] = useState(0);
  const timerRef = useRef();

  const startTimer = () => {
    timerRef.current = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);
    console.log(timerRef);
  };

  const stopTimer = () => {
    clearInterval(timerRef.current);
    console.log(timerRef);
  };

  useEffect(() => {
    return () => clearInterval(timerRef.current);
  }, []);

  return (
    <div>
      <p>Час: {time} секунд</p>
      <button onClick={startTimer}>Старт</button>
      <button onClick={stopTimer}>Стоп</button>
    </div>
  );
}
