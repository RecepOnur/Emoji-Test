import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect";
import React from "react";

import Header from "../Header";
import App from "../App";

test("renders header", () => {
  render(<App />);
  const headerElement = screen.getByText("Emoji Search");
  expect(headerElement).toBeInTheDocument();
});
