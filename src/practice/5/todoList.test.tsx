// TodoList.test.tsx
import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { TodoList } from "./todoList";

describe("TodoList", () => {
  it("renders an empty todo list initially", () => {
    const { getByText } = render(<TodoList />);
    expect(getByText("Todo List")).toBeInTheDocument();
    expect(getByText("Add Todo")).toBeInTheDocument();
  });

  it("adds a new todo when the Add Todo button is clicked", () => {
    const { getByPlaceholderText, getByText } = render(<TodoList />);
    const input = getByPlaceholderText("Enter a new todo");
    const addButton = getByText("Add Todo");

    fireEvent.change(input, { target: { value: "New Todo" } });
    fireEvent.click(addButton);

    expect(getByText("New Todo")).toBeInTheDocument();
  });

  it("toggles the completion status of a todo when clicked", () => {
    const { getByPlaceholderText, getByText } = render(<TodoList />);
    const input = getByPlaceholderText("Enter a new todo");
    const addButton = getByText("Add Todo");

    fireEvent.change(input, { target: { value: "New Todo" } });
    fireEvent.click(addButton);

    const todoItem = getByText("New Todo");
    expect(todoItem).not.toHaveStyle("text-decoration: line-through");

    fireEvent.click(todoItem);
    expect(todoItem).toHaveStyle("text-decoration: line-through");

    fireEvent.click(todoItem);
    expect(todoItem).not.toHaveStyle("text-decoration: line-through");
  });

  it("does not add an empty todo", () => {
    const { getByPlaceholderText, getByText, queryByText } = render(<TodoList />);
    const input = getByPlaceholderText("Enter a new todo");
    const addButton = getByText("Add Todo");

    fireEvent.change(input, { target: { value: "   " } });
    fireEvent.click(addButton);

    expect(queryByText("   ")).not.toBeInTheDocument();
  });
});
