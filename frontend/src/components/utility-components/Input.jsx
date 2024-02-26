/* eslint-disable react/prop-types */
import { memo } from "react";
import { forwardRef } from "react";

// eslint-disable-next-line react/display-name, react/prop-types
const Input = memo(
  forwardRef(({ type, placeholder }, ref) => {
    return (
      <input
        type={type}
        ref={ref}
        placeholder={placeholder}
        className="input font-inter px-3 py-2 mb-4 text-[#3F292B] outline-none border rounded-lg "
      />
    );
  })
);
export default Input;
