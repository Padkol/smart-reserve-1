import React, { FC, PropsWithChildren } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router';
import { SignIn } from './modules/auth/routes';

type ProtectedRouteProps = PropsWithChildren<{
  user: { id: string } | null;
}>;

const ProtectedRoute = ({ user, children }: ProtectedRouteProps) => {
  if (!user) {
    return <Navigate to="/sign-in" replace />;
  }

  return <>{children}</>;
};

function App() {
  return (
    <div className="App">
      <SignIn />
      {/*<BrowserRouter>*/}
      {/*  <Routes>*/}
      {/*    <Route element={<SignIn />} path="/sign-in" />*/}
      {/*  </Routes>*/}
      {/*</BrowserRouter>*/}
    </div>
  );
}

export default App;
