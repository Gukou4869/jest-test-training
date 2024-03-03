import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { UserFetcher } from "./fetchUser";

// fetchのモックをグローバルに設定
global.fetch = jest.fn();

beforeEach(() => {
  // 各テストの前にfetchのモックをクリア
  jest.clearAllMocks();
});

test("displays user data after successful fetch", async () => {
  // fetchが成功した時のモックデータ
  (fetch as jest.Mock).mockResolvedValueOnce({
    ok: true,
    json: async () => ({
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      isActive: true,
    }),
  });

  render(<UserFetcher />);

  // ローディングメッセージが表示されることを確認
  expect(screen.getByText("Loading...")).toBeInTheDocument();

  // 成功したfetchの後にユーザーデータが表示されることを確認
  const userData = await waitFor(() => screen.getByText("John Doe"));
  expect(userData).toBeInTheDocument();
});

test("displays error message after fetch failure", async () => {
  // fetchが失敗した時のモック
  (fetch as jest.Mock).mockRejectedValueOnce(new Error("Failed to fetch user."));

  render(<UserFetcher />);

  // エラーメッセージが表示されることを確認
  const errorMessage = await waitFor(() => screen.getByText("Error: Failed to fetch user."));
  expect(errorMessage).toBeInTheDocument();
});
