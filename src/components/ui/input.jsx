import * as React from "react";
import "./Input.css";

const Input = React.forwardRef(({ className, type = "text", ...props }, ref) => (
  <input
    type={type}
    className={`custom-input ${className}`}
    ref={ref}
    {...props}
  />
));
Input.displayName = "Input";

export { Input };
