import React from "react";

function Horizontal({
  width = 15,
  height = 513,
  color = "#E5ECF4",
  className,
}: {
  width?: number;
  height?: number;
  color?: string;
  className?: string;
}) {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        color={color}
        className={className}
        viewBox="0 0 15 513"
      >
        <path d="M7.5 512.5V0.5" stroke="#E5ECF4" strokeWidth="15" />
      </svg>
    </div>
  );
}

export default Horizontal;
