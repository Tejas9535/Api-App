import React from "react";
import { render, screen } from "../../../testSetup";
import AnimeNews from "../AnimeNews";

describe("AnimeNews", () => {
  test("should test heading", async () => {
    const props = {
      fetchAnimeNews: jest.fn(),
    };
    render(<AnimeNews {...props} />);
    expect(await screen.findByRole("heading", { level: 1 }));
  });
});
