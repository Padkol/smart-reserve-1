import React, { FC, PropsWithChildren } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router';
import { SignIn } from './modules/auth/routes';
import { Layout } from './shared/components/layout';

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
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route element={<SignIn />} path="/sign-in" />
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
