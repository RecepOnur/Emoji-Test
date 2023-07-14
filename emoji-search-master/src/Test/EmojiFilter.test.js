import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect";
import React from "react";
import App from "../App";
import EmojiList from "../emojiList.json";

test("render emoji filter", () => {
  render(<App />);
  const emoji_filter = screen.getByPlaceholderText("Enter a emoji name");
  const value = "Joy";
  userEvent.type(emoji_filter, value);
  expect(screen.getByText(value)).toBeInTheDocument();
});
