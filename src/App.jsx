import React from "react";

function App() {
  const a = 3;
  const b = 4;
  const multiply = (a, b) => a * b;
  return (
    <>
      <p><b>a * b = {multiply(a, b)}</b></p>
      <p>hello</p>
    </>
  );
}

export default App;
