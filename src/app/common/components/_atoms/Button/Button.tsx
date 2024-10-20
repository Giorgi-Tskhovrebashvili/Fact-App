import { ButtonType } from "@/app/common/types";

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
