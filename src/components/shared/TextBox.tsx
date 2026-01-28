import React from "react";

interface TextBoxprop {
  label: string;
  name: string;
  placeholder: string;
  type?: string;
  required?: boolean;
}
const TextBox = ({ label, name, placeholder, type = "text", required }: TextBoxprop) => {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name} className="text-light-dark font-semibold">
        {label}
      </label>
      <input
        name={name}
        className="input-box" 
        placeholder={placeholder}
        type={type}
        required={required}
      />
    </div>
  );
};

export default TextBox;
