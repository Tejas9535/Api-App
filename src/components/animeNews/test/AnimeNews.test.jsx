import React from "react";
import { render, screen } from "@testing-library/react";
import AnimeNews from "../AnimeNews";

describe("AnimeNews", () => {
  test("should test heading", async () => {
    render(<AnimeNews />);
    expect(await screen.findByRole("heading", { level: 1 }));
  });
});
