import React from 'react';
import AuthProvider from '../app/context/AuthProvider';

const MyApp = ({ Component, ...props }) => {
  return (
    <>
      <AuthProvider>
        <Component {...props} />
      </AuthProvider>
    </>
  );
};

export default MyApp;
