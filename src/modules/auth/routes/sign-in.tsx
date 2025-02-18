import React from 'react';
import { Layout } from '../../../shared';
import { UIInput } from '../../../ui-kit';

export const SignIn = () => {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex justify-center">
        <Layout.ScreenName title="Авторизація" />
      </div>

      <div className="flex flex-1 flex-col gap-5 items-start">
        <UIInput titleClassName="min-w-[100px]" title="Email" />

        <UIInput titleClassName="min-w-[100px]" title="Password" />
      </div>
    </div>
  );
};
