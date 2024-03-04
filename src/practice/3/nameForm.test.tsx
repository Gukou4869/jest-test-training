import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { NameForm } from "./nameForm";
import userEvent from "@testing-library/user-event";

describe("NameForm component", () => {
  it("ユーザーがテキストフィールドに入力した際に、その値が正しくコンポーネントの状態に反映される", async () => {
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
});
