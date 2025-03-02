import { z } from 'zod';
import React from 'react';

import { UIButton } from '../../../../ui-kit';
import { Layout, useForm } from '../../../../shared';
import { Controller } from '../../../../shared/components/controller/controller';
import { InputController } from '../../../../shared/components/controller/input-controller';

const SignInSchema = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(8, 'Password must be at least 8 characters long')
    .max(100, 'Password must not exceed 100 characters')
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{8,}$/,
      'Password must contain at least one lowercase letter, one uppercase letter, one number, and one special character',
    ),
});

export const SignInScreen = () => {
  const form = useForm({ schema: SignInSchema });

  const onSubmit = form.handleSubmit((fields) => {
    console.log(fields);
  });

  return (
    <div className="items-center h-full justify-center flex flex-1">
      <div className="rounded-lg shadow-lg p-5 bg-gray-100 flex flex-col gap-10 max-w-xl w-full flex-1">
        <div className="flex justify-center">
          <Layout.ScreenName title="Авторизація" />
        </div>

        <div className="flex flex-1 flex-col gap-5 items-start justify-between">
          <div className="flex flex-col items-start gap-2.5 w-full">
            <label htmlFor="Email" className="text-right font-bold text-xl">
              Email
            </label>

            <Controller name="email" control={form.control}>
              <InputController placeholder="Type your email" title="Email" />
            </Controller>
          </div>

          <div className="flex flex-col items-start gap-2.5 w-full">
            <label htmlFor="Password" className="text-right font-bold text-xl">
              Password
            </label>

            <Controller name="password" control={form.control}>
              <InputController
                placeholder="Type your password"
                title="Password"
              />
            </Controller>
          </div>
        </div>

        <UIButton onClick={onSubmit} className="w-full">
          <p className="text-black font-bold">Вхід</p>
        </UIButton>
      </div>
    </div>
  );
};
