import { useEffect } from "react";
import { useRef } from "react";

export default function RefBasics() {
  const inputRef = useRef();

  //   useEffect(() => {
  //     console.log(inputRef);
  //   }, []);
  const setFocus = () => {
    inputRef.current.focus();
  };
  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={setFocus}>Focus</button>
    </div>
  );
}
