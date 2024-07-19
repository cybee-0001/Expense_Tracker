import React from 'react';
import './Button.css';

const Button = React.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Component = asChild ? 'span' : 'button';
  const variantClass = variant ? `btn-${variant}` : 'btn-default';
  const sizeClass = size ? `btn-${size}` : 'btn-default-size';

  return (
    <Component
      className={`btn ${variantClass} ${sizeClass} ${className}`}
      ref={ref}
      {...props}
    />
  );
});

Button.displayName = 'Button';

export default Button;
