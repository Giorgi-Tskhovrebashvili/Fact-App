import { InputType } from "@/app/common/types";

const Input = ({
  type,
  placeholder,
  value,
  onChange,
  disabled,
  className,
}: InputType) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      disabled={disabled}
      className={className}
    />
  );
};

export default Input;
