// src/components/Layout.jsx
import React from 'react';
import { Helmet } from 'react-helmet-async';
import logo from '../assets/logo.jpg';

const Layout = ({ children, title = 'Catálogo' }) => {
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content="Catálogo de ropa confeccionada con elegancia" />
      </Helmet>
      <nav className="navbar-top">
        <div className="navbar-container">
          <img src={logo} alt="Logo" className="logo-navbar" />
        </div>
      </nav>
      <main>{children}</main>
    </>
  );
};

export default Layout;