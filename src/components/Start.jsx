import { useRef } from "react";

export default function Start({ setUsername }) {
  const inputRef = useRef();

  const handleClick = () => {
    inputRef.current.value && setUsername(inputRef.current.value);
  };

  return (
    <div className="start">
      <input
        className="startInput"
        placeholder="enter your name"
        ref={inputRef}
      />
      <br />
      <input
        type="password"
        className="startInput"
        placeholder="enter password"
        ref={inputRef}
      />
      <br />
      <button className="startButton" onClick={handleClick}>
        Start
      </button>
    </div>
  );
}
