import React, { useState } from "react";

interface ToggleButtonProps {
  initialLabel?: string;
}

const ToggleButton: React.FC<ToggleButtonProps> = ({ initialLabel = "Click me" }) => {
  const [isToggled, setIsToggled] = useState(false);

  return <button onClick={() => setIsToggled((state) => !state)}>{isToggled ? "Toggled" : initialLabel}</button>;
};

export default ToggleButton;
