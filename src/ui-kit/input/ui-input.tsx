import React from 'react';
import classNames from 'classnames';

export const UIInput = ({
  title,
  titleClassName,
  textClassName,
  id,
}: {
  title?: string;
  titleClassName?: string;
  textClassName?: string;
  id?: string;
}) => {
  return (
    <div className="flex gap-2.5 justify-center items-center w-full">
      {title ? (
        <label
          htmlFor={id ?? title}
          className={classNames('text-right font-bold text-xl', titleClassName)}
        >
          {title}
        </label>
      ) : null}

      <label
        htmlFor={id ?? title}
        className="bg-red-100 border items-center justify-center flex rounded-[10px] p-1 flex-1 cursor-pointer"
      >
        <input
          id={id ?? title}
          className={classNames(
            'flex border-none focus:border-none focus:outline-none focus:ring-0 flex-1 min-h-[38px] h-full',
            textClassName,
          )}
          type="text"
        />
      </label>
    </div>
  );
};
