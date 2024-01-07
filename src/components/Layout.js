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
