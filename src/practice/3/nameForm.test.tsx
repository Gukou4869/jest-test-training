import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { NameForm } from "./nameForm";
import userEvent from "@testing-library/user-event";

describe("NameForm component", () => {
  test("ユーザーがテキストフィールドに入力した際に、その値が正しくコンポーネントの状態に反映される", async () => {
    const event = userEvent.setup();

    render(
      <NameForm
        onSubmit={() => {
          console.log("mock");
        }}
      />
    );

    const input = screen.getByLabelText(/name:/i);

    await event.type(input, "Shota");

    expect(input).toHaveValue("Shota");
  });

  test("form submits with the correct name", async () => {
    const mockSubmit = jest.fn();
    const event = userEvent.setup();
    render(<NameForm onSubmit={mockSubmit} />);

    // 名前を入力し、フォームを送信します
    const input = screen.getByLabelText(/name:/i);
    await event.type(input, "John Doe");
    await userEvent.click(screen.getByRole("button", { name: /submit/i }));

    // onSubmit コールバックが正しい引数で呼び出されたことを確認します
    expect(mockSubmit).toHaveBeenCalledWith("John Doe");
  });
});
