import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";

test("Copy Emoji", () => {
  render(<App />);
  const copyEmoji = screen.getByText("Laughing");

  userEvent.click(copyEmoji);
  expect(copyEmoji.parentElement.getAttribute("data-clipboard-text")).toMatch(
    "😆"
  );
});
