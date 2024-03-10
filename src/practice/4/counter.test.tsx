// Counter.test.tsx
import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Counter } from "./counter";

describe("Counter", () => {
  it("renders the initial count as 0", () => {
    const { getByText } = render(<Counter />);
    expect(getByText("Count: 0")).toBeInTheDocument();
  });

  it("increments the count when the Increment button is clicked", () => {
    const { getByText } = render(<Counter />);
    const incrementButton = getByText("Increment");

    fireEvent.click(incrementButton);

    expect(getByText("Count: 1")).toBeInTheDocument();
  });

  it("decrements the count when the Decrement button is clicked", () => {
    const { getByText } = render(<Counter />);
    const decrementButton = getByText("Decrement");

    fireEvent.click(decrementButton);

    expect(getByText("Count: -1")).toBeInTheDocument();
  });

  it("displays the count correctly", () => {
    const { getByText } = render(<Counter />);
    const incrementButton = getByText("Increment");
    const decrementButton = getByText("Decrement");

    fireEvent.click(incrementButton);
    fireEvent.click(incrementButton);
    fireEvent.click(decrementButton);

    expect(getByText("Count: 1")).toBeInTheDocument();
  });
});
