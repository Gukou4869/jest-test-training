// UserFetcher.tsx

import React, { useEffect, useState } from "react";

interface User {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
}

export const UserFetcher = () => {
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
        const userData = await response.json();
        setUser(userData);
      } catch (e) {
        setError("Failed to fetch user.");
      }
    };

    fetchUser();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!user) {
    return <div>Loading...</div>;
  }

  return <div>{user.name}</div>;
};
