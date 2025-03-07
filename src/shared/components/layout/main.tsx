import React from 'react';
import { PropsWithChildren } from 'react';
import { Header } from '../header';

export const LayoutMain = ({ children }: PropsWithChildren) => {
  return (
    <div className="max-w-[1500px] min-h-[100vh] mx-auto px-4 gap-5 flex-col flex">
      <Header />

      {children}
    </div>
  );
};
