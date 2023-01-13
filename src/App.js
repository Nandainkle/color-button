import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

export function replaceCamelWithSpace(colorName) {
  return colorName.replace(/\B([A-Z])\B/g, " $1");
}

function App() {
  const [color, setColor] = useState("MediumVioletRed");
  const [checked, setChecked] = useState(false);
  const newButtonColor =
    color === "MediumVioletRed" ? "MidnightBlue" : "MediumVioletRed";
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
        Change to {replaceCamelWithSpace(newButtonColor)}
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
