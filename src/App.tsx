import { useState } from "react";

export default function App() {
  const [text, setText] = useState<string>();

  const changeText = () => {
    setText("Boom!");
  };
  return (
    <div className="text-center p-40">
      <button onClick={changeText} className="border p-2">Click Me</button>
      <div className="text-red-600">{text}</div>
    </div>
  );
}
