import React from 'react';
import { Link } from 'react-router-dom';
import { BiArrowBack } from "react-icons/bi";
import yerba from "../images/yerba.jpg";
import Container from '../components/Container';

const Checkout = () => {
    return (
        <>
            <Container class1='checkout-wrapper py-5 home-wrapper-2'>
                <div className='row'>
                    <div className='col-7'>
                        <div className='checkout-left-data'>
                            <h3 className='website-name'>Green Market</h3>
                            <nav
                                style={{ "--bs-breadcrumb-divider": ">" }}
                                aria-label="breadcrumb"
                            >
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item">
                                        <Link className='text-dark total-price' to="/cart">
                                            Carrito
                                        </Link>
                                    </li>
                                    &nbsp; /&nbsp;
                                    <li className="breadcrumb-item total-price active" aria-current="page">
                                        Información
                                    </li>
                                    &nbsp; /<li className="breadcrumb-item total-price active">Envio</li>
                                    &nbsp; /
                                    <li className="breadcrumb-item total-price active" aria-current="page">
                                        Pagos
                                    </li>
                                </ol>
                            </nav>
                            <h4 className='title total'>Información de Contacto</h4>
                            <p className='user-details total'>
                                Camila Carranza (cami3256@gmail.com)
                            </p>
                            <h4 className='mb-3'>Direccion de Envio</h4>
                            <form
                                action=''
                                className='d-flex gap-15 flex-wrap justify-content-between'
                            >
                                <div className='w-100'>
                                    <select
                                        name='' className='form-control form-select' id=''>
                                        <option value="" selected disabled >
                                            Selecciona un Pais
                                        </option>
                                    </select>
                                </div>
                                <div className='flex-grow-1'>
                                    <input
                                        type='text'
                                        placeholder='Nombre'
                                        className='form-control'
                                    />
                                </div>
                                <div className='flex-grow-1'>
                                    <input
                                        type='text'
                                        placeholder='Apellido'
                                        className='form-control'
                                    />
                                </div>
                                <div className='w-100'>
                                    <input
                                        type='text'
                                        placeholder='Direccion'
                                        className='form-control'
                                    />
                                </div>
                                <div className='w-100'>
                                    <input
                                        type='text'
                                        placeholder='Numero de casa / Departamento'
                                        className='form-control' />
                                </div>
                                <div className='flex-grow-1'>
                                    <input
                                        type='text'
                                        placeholder='Ciudad'
                                        className='form-control' />
                                </div>
                                <div className='flex-grow-1'>
                                    <select
                                        name=''
                                        className='form-control form-select'
                                        id=''
                                    >
                                        <option
                                            value=""
                                            selected disabled>
                                            Provincia
                                        </option>
                                    </select>
                                </div>
                                <div className='flex-grow-1'>
                                    <input
                                        type='text'
                                        placeholder='Codigo Postal'
                                        className='form-control'
                                    />
                                </div>
                                <div className='w-100'>
                                    <div className='d-flex justify-content-between align-items-center'>
                                        <Link to='/cart' className='text-dark'>
                                            <BiArrowBack className='me-2' />
                                            Volver al Carrito
                                        </Link>
                                        <Link to='/cart' className='button'>
                                            Continuar Comprando
                                        </Link>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className='col-5'>
                        <div className='border-bottom py-4'>
                            <div className='d-flex gap-10 mb-2 align-items-center'>
                                <div className='w-75 d-flex gap-10'>
                                    <div className='w-25 position-relative'>
                                        <span
                                            style={{ top: "-10px", right: "2px" }}
                                            className='badge bg-secondary text-white rounded-circle p-2 position-absolute'>
                                            1
                                        </span>
                                        <img className='img-fluid' src={yerba} alt='product' />
                                    </div>
                                    <div>
                                        <h5 className='total-price'>Yerba Mate</h5>
                                        <p className='total-price'>s / #B5SCEDE</p>
                                    </div>
                                </div>
                                <div className='flex-grow-1'>
                                    <h5 className='total'>$100.00</h5>
                                </div>
                            </div>
                        </div>
                        <div className='border-bottom py-4'>
                            <div className='d-flex justify-content-between align-items-center'>
                                <p className='total'>Subtotal</p>
                                <p className='total-price'>$ 10000</p>
                            </div>
                            <div className='d-flex justify-content-between align-items-center'>
                                <p className='mb-0 total'>Envio</p>
                                <p className='mb-0 total-price'>$ 10000</p>
                            </div>
                        </div>
                        <div className='d-flex justify-content-between align-items-center border-bottom py-4'>
                            <h4 className='total'>Total</h4>
                            <h5 className='total-price'>$ 10000</h5>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
};

export default Checkout;