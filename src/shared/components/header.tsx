import React from 'react';

export const Header = () => {
  return (
    <div className="bg-red-100">
      <img
        className="w-10 h-10"
        alt="logo"
        src={require('../images/logo.png')}
      />
    </div>
  );
};
