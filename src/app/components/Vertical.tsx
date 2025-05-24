import React from "react";

function Vertical({
  width = 974,
  height = 15,
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
        className={className}
        height={height}
        color={color}
        viewBox="0 0 974 15"
      >
        <path d="M973.5 7.5H0.5" stroke="#E5ECF4" strokeWidth="15" />
      </svg>
    </div>
  );
}

export default Vertical;
