import React from "react";

function Hamburger({
  width = 20,
  height = 16,
  color = "#FCB72B",
  className,
  onClick,
}: {
  width?: number;
  height?: number;
  color?: string;
  className?: string;
  onClick?: () => void;
}) {
  // Default values for width, height, and color
  return (
    <div>
      <svg
        widths={width}
        height={height}
        className={className}
        onClick={onClick}
        color={color}
        fill={color}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 16"
      >
        <rect width="19.6923" height="3.69231" fill="#FCB72B" />
        <rect y="6.15381" width="19.6923" height="3.69231" fill="#FCB72B" />
        <rect y="12.3077" width="19.6923" height="3.69231" fill="#FCB72B" />
      </svg>
    </div>
  );
}

export default Hamburger;
