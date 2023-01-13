import { fireEvent, logRoles, render, screen } from "@testing-library/react";
import App, { replaceCamelWithSpace } from "./App";
test("test initial color of button and when clicked", () => {
  const { container } = render(<App />);
  logRoles(container);
  const colorButton = screen.getByRole("button", {
    name: "Change to Midnight Blue",
  });
  expect(colorButton).toHaveStyle({ "background-color": "MediumVioletRed" });

  fireEvent.click(colorButton);
  expect(colorButton).toHaveStyle({ "background-color": "MidnightBlue" });
  expect(colorButton).toHaveTextContent("Change to Medium Violet Red");
});

test("initial conditions", () => {
  render(<App />);
  const colorButton = screen.getByRole("button", {
    name: "Change to Midnight Blue",
  });
  expect(colorButton).toBeEnabled();

  const checkBox = screen.getByRole("checkbox");
  expect(checkBox).not.toBeChecked();
});

test("checked/unchecked conditions", () => {
  render(<App />);
  const checkBox = screen.getByRole("checkbox", { name: "Disable button" });
  const colorButton = screen.getByRole("button", {
    name: "Change to Midnight Blue",
  });

  // for checked
  fireEvent.click(checkBox);
  expect(colorButton).toBeDisabled();
  expect(checkBox).toBeChecked();

  // for unchecked
  fireEvent.click(checkBox);
  expect(colorButton).toBeEnabled();
  expect(checkBox).not.toBeChecked();
});

test("check gray background for MediumVioletRed background button", () => {
  render(<App />);
  const colorButton = screen.getByRole("button", {
    name: "Change to Midnight Blue",
  });
  const checkBox = screen.getByRole("checkbox", { name: "Disable button" });

  fireEvent.click(checkBox);
  expect(colorButton).toHaveStyle({ "background-color": "gray" });

  fireEvent.click(checkBox);
  expect(colorButton).toHaveStyle({ "background-color": "MediumVioletRed" });
});

test("check gray background for MediumVioletRed background button", () => {
  render(<App />);
  const colorButton = screen.getByRole("button", {
    name: "Change to Midnight Blue",
  });
  const checkBox = screen.getByRole("checkbox", { name: "Disable button" });

  // button click change bg to MidnightBlue
  fireEvent.click(colorButton);

  // checkbox check
  fireEvent.click(checkBox);
  expect(colorButton).toHaveStyle({ "background-color": "gray" });

  // checkbox uncheck
  fireEvent.click(checkBox);
  expect(colorButton).toHaveStyle({ "background-color": "MidnightBlue" });
});

describe("space before camel-case capital letters", () => {
  test("works for no inner capital letter", () => {
    render(<App />);
    expect(replaceCamelWithSpace("red")).toBe("red");
  });
  test("Works for one inner capital letter", () => {
    render(<App />);
    expect(replaceCamelWithSpace("MidnightBlue")).toBe("Midnight Blue");
  });
  test("Works for multiple inner capital letters", () => {
    render(<App />);
    expect(replaceCamelWithSpace("MediumVioletRed")).toBe("Medium Violet Red");
  });
});
