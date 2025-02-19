import React from 'react';
import classNames from 'classnames';

export type UIInputProps = {
  textClassName?: string;
  containerClassName?: string;
  id?: string;
} & React.ComponentPropsWithoutRef<'input'>;

export const UIInput = React.forwardRef<HTMLInputElement, UIInputProps>(
  ({ title, textClassName, containerClassName, id, ...props }, ref) => {
    return (
      <div
        className={classNames(
          'flex gap-2.5 justify-center items-center w-full',
          containerClassName,
        )}
      >
        <label
          htmlFor={id ?? title}
          className="bg-primary border items-center justify-center flex rounded-[10px] p-1 flex-1 cursor-pointer focus-within:bg-blue-100"
        >
          <input
            {...props}
            id={id ?? title}
            ref={ref}
            className={classNames(
              'flex border-none focus:border-none focus:outline-none focus:ring-0 flex-1 min-h-[38px] h-full',
              textClassName,
            )}
            type="text"
          />
        </label>
      </div>
    );
  },
);

// TypeScript requires a display name for forwarded refs
UIInput.displayName = 'UIInput';
