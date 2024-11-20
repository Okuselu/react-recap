import React, { useState } from "react";
import BoilingVerdict from "./BoilingVerdict";

const TemperatureInput: React.FC = () => {
  const [temperature, setTemperature] = useState(0);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTemperature(Number(e.target.value));
  };

  return (
    <div>
      <input type="number" value={temperature} onChange={handleChange} />
      <BoilingVerdict celsius={temperature} />
    </div>
  );
};

export default TemperatureInput;
