import React from 'react';
import { Link } from 'react-router';

export const Header = () => {
  return (
    <div className="flex-row flex items-center">
      <Link
        to="/sign-in"
        className="cursor-pointer flex-row group flex items-center gap-4"
      >
        <img
          className="transition-opacity duration-300 group-hover:opacity-80"
          height={86}
          width={92}
          alt="logo"
          src={require('../images/logo.png')}
        />

        <h1 className="text-left text-4xl font-bold text-center tracking-wide group-hover:text-[#FF9661] transition duration-300 ease-in-out">
          Smart
          <br />
          Reserve
        </h1>
      </Link>
    </div>
  );
};
