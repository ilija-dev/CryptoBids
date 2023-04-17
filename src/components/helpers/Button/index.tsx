import * as React from "react";

type ButtonProps = {
  text?: string;
  type: "button" | "reset" | "submit";
  className?: string;
  disabled?: boolean;
  onClick?: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void | null;
  isPrimary?: boolean;
  icon?: React.FC | null;
};

export default function Button({
  text,
  type,
  disabled = false,
  className,
}: //onClick = null,
ButtonProps) {
  return (
    <button
      className={`${className}`}
      onClick={() => {}}
      //onClick={event => onClick && onClick(event)}
      type={type}
      disabled={disabled}
    >
      {text}
    </button>
  );
}
