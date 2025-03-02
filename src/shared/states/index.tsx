import { makeAutoObservable } from 'mobx';
import React, { createContext, PropsWithChildren, useContext } from 'react';

import { AuthState } from './auth-state';

export class RootState {
  auth = new AuthState();

  constructor() {
    makeAutoObservable(this, {
      auth: false,
    });
  }
}

const RootStateContext = createContext<null | RootState>(null);

export const RootStateProvider = ({
  children,
  rootState,
}: PropsWithChildren<{ rootState: RootState }>) => {
  return (
    <RootStateContext.Provider value={rootState}>
      {children}
    </RootStateContext.Provider>
  );
};

export const useRootState = () => {
  const rootState = useContext(RootStateContext);

  if (!rootState) {
    throw new Error('useRootState must be used within RootStateProvider');
  }

  return rootState;
};
