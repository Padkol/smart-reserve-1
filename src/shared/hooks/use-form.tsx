import { z } from 'zod';
import { useEffect } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  useForm as useHookForm,
  UseFormProps,
  useWatch,
} from 'react-hook-form';

export const useForm = <T extends z.ZodType<object>, TContext = any>({
  schema,
  ...props
}: Omit<UseFormProps<z.input<T>, TContext>, 'resolver'> & { schema: T }) => {
  const form = useHookForm<
    z.input<typeof schema>,
    TContext,
    z.output<typeof schema>
  >({
    ...props,
    resolver: zodResolver(schema),
  });

  const fields = useWatch({ control: form.control });

  useEffect(() => {
    form.clearErrors('root');
  }, [fields, form]);

  return form;
};
