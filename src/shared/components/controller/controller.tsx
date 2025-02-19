import React, { PropsWithChildren, createContext, useContext } from 'react';
import {
  Control,
  FieldPath,
  FieldValues,
  PathValue,
  useController,
} from 'react-hook-form';
import { UIView, UIViewProps } from '../../../ui-kit/ui-view/ui-view';
import classNames from 'classnames';

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
  disableError?: boolean;
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
  disableError,
  ...props
}: ControllerProps<T, Name>) => {
  return (
    <ControllerProvider
      name={name}
      control={control}
      preprocess={preprocess}
      postprocess={postprocess}
    >
      <ControllerError {...props} disabled={disableError} />
    </ControllerProvider>
  );
};

export type ErrorMessageProps = UIViewProps & {
  message: string | null | undefined;
  contentContainerClassName?: string;
};

export const ErrorMessage = ({
  message,
  children,
  contentContainerClassName,
  ...props
}: ErrorMessageProps) => {
  return (
    <UIView className="flex-1 w-full" {...props}>
      {children ? (
        <UIView
          className={classNames(
            'flex-1',
            message && 'ring-red-300 rounded-lg ring-2 ring-offset-1',
            contentContainerClassName,
          )}
        >
          {children}
        </UIView>
      ) : null}

      {message ? (
        <UIView className="bg-red-300 mt-3 rounded-lg px-2.5 py-1">
          {children ? (
            <UIView className="border-b-red-300 absolute -top-2.5 left-3 h-0 w-0 border-b-[10px] border-l-[6px] border-r-[6px] border-l-transparent border-r-transparent" />
          ) : null}

          <p className="">{message}</p>
        </UIView>
      ) : null}
    </UIView>
  );
};

export const ControllerError = ({
  disabled,
  ...props
}: Omit<ErrorMessageProps, 'message'> & { disabled?: boolean }) => {
  const {
    fieldState: { error },
  } = useControllerField();

  const errorMessage = !disabled ? (error?.root ?? error)?.message : null;

  return <ErrorMessage {...props} message={errorMessage} />;
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
