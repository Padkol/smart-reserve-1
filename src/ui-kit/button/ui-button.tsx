import classNames from 'classnames';
import React, { PropsWithChildren } from 'react';

const variantStyles: Record<Variant, string> = {
  primary: 'bg-primary text-white hover:bg-primary/80',
  destructive: 'bg-red-500 text-white hover:bg-red-700',
  outlined:
    'bg-transparent border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white',
};

type Variant = 'primary' | 'destructive' | 'outlined';

export const UIButton = ({
  variant = 'primary',
  className,
  children,
  ...props
}: React.ComponentPropsWithoutRef<'button'> & { variant?: Variant }) => {
  const baseStyles =
    'px-4 py-2 border border-black rounded transition-all duration-200 ease-in-out cursor-pointer';

  const buttonClasses = classNames(
    baseStyles,
    variantStyles[variant],
    className,
  );

  return (
    <button className={buttonClasses} {...props}>
      {children}
    </button>
  );
};
