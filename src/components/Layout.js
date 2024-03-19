//Estructura básica para todas las páginas de la aplicación,
//para no repetir codigo, solo importar y utilizar el componente Layout
import React from 'react';
import { Outlet } from 'react-router-dom'; //Renderiza ruta secundaria
import Footer from './Footer';
import Headers from './Header';

const Layout = () => {
    return (
        <>
            <Headers />
            <Outlet />
            <Footer />
        </>
    );
};

export default Layout;
