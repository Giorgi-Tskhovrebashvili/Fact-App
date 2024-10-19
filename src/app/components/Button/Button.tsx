import { ButtonType } from "@/app/types";

const Button = ({
  className,
  onClick,
  children,
  disabled,
  style,
}: ButtonType) => {
  return (
    <button
      className={className}
      onClick={onClick}
      disabled={disabled}
      style={style}
    >
      {children}
    </button>
  );
};

export default Button;
