import React from "react";
import "./ShinyText.css";

type ShinyTextProps = {
  text: string;
  speed?: number;
  className?: string;
};

const ShinyText: React.FC<ShinyTextProps> = ({
  text,
  speed = 3,
  className,
}) => {
  return (
    <h1
      className={`shiny-text ${className}`}
      style={{
        animationDuration: `${speed}s`,
      }}
    >
      {text}
    </h1>
  );
};

export default ShinyText;
