import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

export function replaceCamelWithSpace(colorName) {
  return colorName.replace(/\B([A-Z])\B/g, " $1");
}

function App() {
  const [color, setColor] = useState("red");
  const [checked, setChecked] = useState(false);
  const newButtonColor = color === "red" ? "blue" : "red";
  // mediumVioletRed, midnightBlue
  return (
    <div className="App">
      <button
        onClick={() => {
          setColor(newButtonColor);
        }}
        style={{ backgroundColor: checked ? "gray" : color }}
        disabled={checked}
      >
        Change to {newButtonColor}
      </button>

      <input
        type="checkbox"
        onChange={(e) => setChecked(e.target.checked)}
        value={checked}
        name="check"
        id="disableBtnCheckBox"
      />
      <label htmlFor="disableBtnCheckBox">Disable button</label>
    </div>
  );
}

export default App;
