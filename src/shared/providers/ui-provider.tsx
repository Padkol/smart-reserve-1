import { observer } from 'mobx-react';
import React, { PropsWithChildren } from 'react';

import { RootState, RootStateProvider } from '../states';

type UIProviderProps = PropsWithChildren;

export const UIProvider = observer(({ children }: UIProviderProps) => {
  const rootState = new RootState();

  return (
    <RootStateProvider rootState={rootState}>{children}</RootStateProvider>
  );
});
