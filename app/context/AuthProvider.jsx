import React, { createContext, useState } from 'react';

const AUTH_CONTEXT = createContext();

const AuthProvider = ({ children }) => {
  const [bgcolor, setBgcolor] = useState({});

  const data = {
    bgcolor,
    setBgcolor,
  };

  return <AUTH_CONTEXT.Provider value={data}>{children}</AUTH_CONTEXT.Provider>;
};

export default AuthProvider;
