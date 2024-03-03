// ToggleButton.test.tsx

import React from "react";
import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ToggleButton from "./toggleButton";

describe("ToggleButton", () => {
  // 1. 初期レンダリングの検証
  test('renders with default label "Off"', () => {
    render(<ToggleButton />);
    expect(screen.getByRole("button")).toHaveTextContent("Click me");
  });

  // 2. プロップスの検証
  test("renders with given initialLabel prop", () => {
    const testLabel = "Click me";
    render(<ToggleButton initialLabel={testLabel} />);
    expect(screen.getByRole("button")).toHaveTextContent(testLabel);
  });

  // 3. ユーザーインタラクションの検証
  test('toggles label from initialLabel to "On" on click', async () => {
    const initialLabel = "Click";
    const event = userEvent.setup();
    render(<ToggleButton initialLabel={initialLabel} />);
    const button = screen.getByRole("button");
    // 初期状態を検証
    expect(button).toHaveTextContent(initialLabel);
    // クリック後の状態を検証
    await event.click(button);
    expect(button).toHaveTextContent("Toggled");
  });

  // 4. スナップショットテスト
  test("matches the snapshot", () => {
    const { asFragment } = render(<ToggleButton />);
    expect(asFragment()).toMatchSnapshot();
  });
});
