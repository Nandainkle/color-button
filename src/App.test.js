import { fireEvent, logRoles, render, screen } from "@testing-library/react";
import App from "./App";

test("test initial color of button and when clicked", () => {
  const { container } = render(<App />);
  logRoles(container);
  const colorButton = screen.getByRole("button", { name: "Change to blue" });
  expect(colorButton).toHaveStyle({ "background-color": "red" });

  fireEvent.click(colorButton);
  expect(colorButton).toHaveStyle({ "background-color": "blue" });
  expect(colorButton).toHaveTextContent("Change to red");
});

test("initial conditions", () => {
  render(<App />);
  const colorButton = screen.getByRole("button", { name: "Change to blue" });
  expect(colorButton).toBeEnabled();

  const checkBox = screen.getByRole("checkbox");
  expect(checkBox).not.toBeChecked();
});

test("checked/unchecked conditions", () => {
  render(<App />);
  const checkBox = screen.getByRole("checkbox", { name: "Disable button" });
  const colorButton = screen.getByRole("button", { name: "Change to blue" });

  // for checked
  fireEvent.click(checkBox);
  expect(colorButton).toBeDisabled();
  expect(checkBox).toBeChecked();

  // for unchecked
  fireEvent.click(checkBox);
  expect(colorButton).toBeEnabled();
  expect(checkBox).not.toBeChecked();
});
