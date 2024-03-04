// NameForm.tsx

import React, { useState } from "react";

interface NameFormProps {
  onSubmit: (name: string) => void;
}

export const NameForm: React.FC<NameFormProps> = ({ onSubmit }) => {
  const [name, setName] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(name);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input id="name" type="text" value={name} onChange={handleChange} />
      <button type="submit">Submit</button>
    </form>
  );
};
