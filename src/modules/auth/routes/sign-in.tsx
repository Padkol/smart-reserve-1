import React from 'react';
import { Layout } from '../../../shared';
import { UIButton, UIInput } from '../../../ui-kit';

export const SignIn = () => {
  return (
    <div className="items-center h-full justify-center flex flex-1">
      <div className="rounded-lg shadow-lg p-5 bg-gray-100 flex flex-col gap-10 max-w-xl w-full flex-1">
        <div className="flex justify-center">
          <Layout.ScreenName title="Авторизація" />
        </div>

        <div className="flex flex-1 flex-col gap-5 items-start justify-between">
          <UIInput
            titleClassName="min-w-[100px]"
            placeholder="Type your email"
            title="Email"
          />

          <UIInput
            titleClassName="min-w-[100px]"
            placeholder="Type your password"
            title="Password"
          />
        </div>

        <div>
          <UIButton className="w-full">
            <p className="text-black font-bold">Вхід</p>
          </UIButton>
        </div>
      </div>
    </div>
  );
};
