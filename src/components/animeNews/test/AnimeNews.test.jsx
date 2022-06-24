// import React from "react";
// import { render, screen } from "@testing-library/react";
// import AnimeNews from "../AnimeNews";

// describe("AnimeNews", () => {
//   test("should test heading", async () => {
//     render(<AnimeNews />);
//     expect(await screen.findByRole("heading", { level: 1 }));
//   });
// });

function sum(a, b) {
  return a + b;
}

test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});
