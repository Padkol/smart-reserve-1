import React, { PropsWithChildren, createContext, useContext } from 'react';
import {
  Control,
  FieldPath,
  FieldValues,
  PathValue,
  useController,
} from 'react-hook-form';

const ControllerContext = createContext<{
  name: FieldPath<any>;
  control: Control<any>;
  preprocess: (value: any) => any;
  postprocess: (value: any) => any;
} | null>(null);

type ControllerProviderProps<
  T extends FieldValues,
  Name extends FieldPath<T>,
> = PropsWithChildren<{
  name: Name;
  control: Control<T>;
  preprocess?: (value: PathValue<T, Name>) => PathValue<T, Name>;
  postprocess?: (value: PathValue<T, Name>) => PathValue<T, Name>;
}>;

export const ControllerProvider = <
  T extends FieldValues,
  Name extends FieldPath<T>,
>({
  control,
  name,
  children,
  preprocess = (v) => v,
  postprocess = (v) => v,
}: ControllerProviderProps<T, Name>) => {
  return (
    <ControllerContext.Provider
      value={{ name, control, preprocess, postprocess }}
    >
      {children}
    </ControllerContext.Provider>
  );
};

type ControllerProps<
  T extends FieldValues,
  Name extends FieldPath<T>,
> = ControllerProviderProps<T, Name>;

export const Controller = <T extends FieldValues, Name extends FieldPath<T>>({
  name,
  control,
  preprocess,
  postprocess,
}: ControllerProps<T, Name>) => {
  return (
    <ControllerProvider
      name={name}
      control={control}
      preprocess={preprocess}
      postprocess={postprocess}
    />
  );
};

export const useControllerField = <T,>() => {
  const ctx = useContext(ControllerContext);

  if (!ctx) {
    throw new Error(
      'useControllerField must be used within ControllerProvider',
    );
  }

  const controller = useController({ name: ctx.name, control: ctx.control });

  return {
    ...controller,
    field: {
      ...controller.field,
      value: ctx.preprocess(controller.field.value) as T,
      onChange: (value: T) => {
        controller.field.onChange(ctx.postprocess(value));
      },
    },
  };
};
