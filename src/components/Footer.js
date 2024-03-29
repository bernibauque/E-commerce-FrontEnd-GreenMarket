import React from 'react';
import { Link } from 'react-router-dom';
import { BsInstagram, BsFacebook, BsYoutube, BsWhatsapp } from "react-icons/bs";
import newsletter from "../images/newsletter.png";

const Footer = () => {
    return (
        <>
            <footer className='py-4'>
                <div className='container-xxl'>
                    <div className='row align-items-center'>
                        <div className='col-5'>
                            <div className='footer-top-data d-flex gap-30 align-items-center'>
                                <img src={newsletter} alt='newsletter' />
                                <h2 className='mb-0 text-white'>Regístrate para recibir nuestras promociones</h2>
                            </div>
                        </div>
                        <div className='col-7'>
                            <div className="input-group">
                                <input
                                    type="text"
                                    className="form-control py-1"
                                    placeholder="Escribe tu e-mail aqui"
                                    aria-label="Escribe tu e-mail aqui"
                                    aria-describedby="basic-addon2"
                                />
                                <span className="input-group-text p-2" id="basic-addon2">
                                    Suscribete
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <footer className='py-4'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-4'>
                            <h4 className='text-white mb-4'>Contactanos</h4>
                            <div>
                                <address className='text-white fs-6'>
                                    San Miguel de Tucuman,<br /> Tucuman, Argentina.
                                    <br /> Codigo postal: 4000
                                </address>
                                <a
                                    href='tel:+54 38126789376'
                                    className='mt-3 d-block mb-1 text-white'
                                >
                                    +54 38126789376
                                </a>
                                <a
                                    href='greenmarketuc@gmail.com'
                                    className='mt-2 d-block mb-0 text-white'
                                >
                                    greenmarketuc@gmail.com
                                </a>
                                <div className='social_icons d-flex align-items-center gap-30 mt-4'>
                                    <a className='text-white' href='#'>
                                        <BsInstagram className='fs-4' />
                                    </a>
                                    <a className='text-white' href='#'>
                                        <BsFacebook className='fs-4' />
                                    </a>
                                    <a className='text-white' href='#'>
                                        <BsYoutube className='fs-4' />
                                    </a>
                                    <a className='text-white' href='#'>
                                        <BsWhatsapp className='fs-4' />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className='col-3'>
                            <h4 className='text-white mb-4'>Informacion</h4>
                            <div className='footer-links d-flex flex-column'>
                                <Link to='/privacy-policy' className='text-white py-2 mb-1'>Politica de privacidad</Link>
                                <Link to='/refund-policy' className='text-white py-2 mb-1'>Politica de reembolsos</Link>
                                <Link to='/shipping-policy' className='text-white py-2 mb-1'>Politica de compra</Link>
                                <Link to='/term-conditions' className='text-white py-2 mb-1'>Terminos y condiciones</Link>
                                <Link to='/blogs' className='text-white py-2 mb-1'>Blog</Link>
                            </div>
                        </div>
                        <div className='col-3'>
                            <h4 className='text-white mb-4'>Cuenta</h4>
                            <div className='footer-links d-flex flex-column'>
                                <Link className='text-white py-2 mb-1'>Sobre nosotros</Link>
                                <Link className='text-white py-2 mb-1'>Preguntas frecuentes</Link>
                                <Link className='text-white py-2 mb-1'>Contacto</Link>
                            </div>
                        </div>
                        <div className='col-2'>
                            <h4 className='text-white mb-4'>Destacados</h4>
                            <div className='footer-links d-flex flex-column'>
                                <Link className='text-white py-2 mb-1'>Harinas</Link>
                                <Link className='text-white py-2 mb-1'>Aceites</Link>
                                <Link className='text-white py-2 mb-1'>Endulzantes</Link>
                                <Link className='text-white py-2 mb-1'>Especias</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </footer >
            <footer className='py-4'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-12'>
                            <p className='text-center mb-0 text-white'>
                                &copy; {new Date().getFullYear()}; Powered by Bernardita Bauque
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;