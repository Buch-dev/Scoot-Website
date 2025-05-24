import React, { ReactNode } from "react";

const RegularButton = ({
  ref,
  onClick,
  children,
  className,
  disabled,
  type = "button",
}: {
  ref?: React.Ref<HTMLButtonElement>;
  onClick?: () => void;
  children?: ReactNode;
  className?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}) => {
  return (
    <button
    ref={ref}
      className={`${className} cursor-pointer`}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {children}
    </button>
  );
};

export default RegularButton;
