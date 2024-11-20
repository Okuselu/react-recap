import React from "react";

interface BoilingVerdictProps {
  celsius: number;
}

const BoilingVerdict: React.FC<BoilingVerdictProps> = ({ celsius }) => {
  return (
    <div>{celsius >= 100 ? "Water will boil" : "Water will not boil"}</div>
  );
};

export default BoilingVerdict;
