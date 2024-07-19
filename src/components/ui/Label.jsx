import * as React from "react";
import "./Label.css";

const Label = React.forwardRef(({ className, ...props }, ref) => (
  <label ref={ref} className={`custom-label ${className}`} {...props} />
));
Label.displayName = "Label";

export { Label };
