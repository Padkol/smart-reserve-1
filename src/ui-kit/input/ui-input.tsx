import React from 'react';

export const UIInput = ({
  title,
  titleClassName,
}: {
  title?: string;
  titleClassName?: string;
}) => {
  return (
    <div className="flex gap-2.5 justify-center items-center w-full ">
      {title ? <p className={titleClassName}>{title}</p> : null}
      <input
        className="bg-red-100 border min-h-[40px] rounded-[10px] flex-1"
        type="text"
      />
    </div>
  );
};
