import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect";
import React from "react";
import App from "../App";
import EmojiList from "../emojiList.json";

test("renders emoji list", () => {
  render(<App />);
  const emojis = EmojiList.slice(0, 20);
  emojis.map((emoji) => {
    expect(screen.getByText(emoji.title)).toBeInTheDocument();
  });
});
