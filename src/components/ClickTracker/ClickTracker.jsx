import { useState, useEffect } from "react";

export default function ClickTracker() {
  const [clicks, setClicks] = useState(0);
  const [date, setDate] = useState(Date.now());

  useEffect(() => {
    console.log("clickTracker");
  }, []);

  useEffect(() => {
    if (clicks === 0) {
      return;
    }
    console.log("changeClick", clicks);
  }, [clicks]);

  useEffect(() => {
    console.log("Date", date);
  }, [date]);

  return (
    <div style={{ display: "flex", gap: 4 }}>
      <button onClick={() => setClicks(clicks + 1)}>Clicks: {clicks}</button>
      <button onClick={() => setClicks(0)}>Reset</button>
      <button onClick={() => setDate(Date.now())}>Date: {date}</button>
    </div>
  );
}
