// import { useState } from "react";

export default function Counter({ text, onClick }) {
  return <button onClick={onClick}>{text}</button>;
}
