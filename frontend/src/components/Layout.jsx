// src/components/Layout.jsx
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from './Navbar';

const Layout = ({ children, title = 'Donde Yaque' }) => {
  return (
    <>
      <Helmet>
        <title>{title} — Donde Yaque</title>
        <meta name="description" content="Catálogo de ropa confeccionada con elegancia y atención al detalle. Alta costura accesible." />
      </Helmet>
      <Navbar />
      <main>{children}</main>
    </>
  );
};

export default Layout;