import React from 'react';
import classNames from 'classnames';

import { useControllerField } from './controller';
import { UIInput, UIInputProps } from '../../../ui-kit';

export type ControllerInputProps = UIInputProps & {
  legend?: boolean;
};

export const InputController = ({
  legend = false,
  maxLength,
  ...props
}: ControllerInputProps) => {
  const {
    fieldState: { error },
    field: { onChange, onBlur, value, ref },
  } = useControllerField<string | number | null | undefined>();

  return (
    <>
      <UIInput
        ref={ref}
        maxLength={maxLength}
        {...props}
        value={props.value ?? value?.toString()}
        onBlur={(e) => {
          onBlur();
          props.onBlur?.(e);
        }}
        onChange={(e) => {
          onChange(e.target.value);
          props.onChange?.(e);
        }}
      />

      {!error && typeof value === 'string' && maxLength && legend ? (
        <p className="text-muted-foreground mt-2.5">
          <span className="text-muted-foreground mr-0.5 inline-block w-fit min-w-[40px] text-center">
            {maxLength - value.length}
          </span>

          {`characters remaining (${maxLength} maximum).`}
        </p>
      ) : null}
    </>
  );
};
