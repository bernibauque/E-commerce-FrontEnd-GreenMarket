import React from 'react';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import ReactStars from 'react-rating-stars-component';
import { useState } from 'react';
import ProductCrd from "../components/ProductCard";
import Container from '../components/Container';

const OurStore = () => {
    const [grid, setGrid] = useState(4);

    return (
        <>
            <Meta title={'Nuestra Tienda'} />
            <BreadCrumb title='Nuestra Tienda' />
            <Container class1='store-wrapper home-wrapper-2 py-5'>
                <div className='row'>
                    <div className='col-3'>
                        <div className='filter-card mb-3'>
                            <h3 className='filter-title'>Comprar por categorias</h3>
                            <div>
                                <ul className='ps-0'>
                                    <li>Cereales</li>
                                    <li>Harinas</li>
                                    <li>Semillas</li>
                                    <li>Conservas</li>
                                </ul>
                            </div>
                        </div>
                        <div className='filter-card mb-3'>
                            <h3 className='filter-title'>Filtra por</h3>
                            <div>
                                <h5 className='sub-title'>Disponibilidad</h5>
                                <div>
                                    <div className='form-check'>
                                        <input
                                            className='form-check-input'
                                            type='checkbox'
                                            value=''
                                            id=''
                                        />
                                        <label className='form-check-label' htmlFor=''>
                                            En Stock (1)
                                        </label>
                                    </div>
                                    <div className='form-check'>
                                        <input
                                            className='form-check-input'
                                            type='checkbox'
                                            value=''
                                            id=''
                                        />
                                        <label className='form-check-label' htmlFor=''>
                                            Nuestro Stock (0)
                                        </label>
                                    </div>
                                </div>
                                <h5 className='sub-title'>Precio</h5>
                                <div className='d-flex align-items-center gap-10'>
                                    <div className='form-floating'>
                                        <input
                                            type='email'
                                            className='form-control'
                                            id='floatingInput'
                                            placeholder='From'
                                        />
                                        <label htmlFor='floatingInput'>Desde</label>
                                    </div>
                                    <div className='form-floating'>
                                        <input
                                            type='email'
                                            className='form-control'
                                            id='floatingInput1'
                                            placeholder='To'
                                        />
                                        <label htmlFor='floatingInput1'>Hasta</label>
                                    </div>
                                </div>
                                <h5 className='sub-title'>Tipo de Dieta</h5>
                                <div>
                                    <div className='form-check'>
                                        <input
                                            className='form-check-input'
                                            type='checkbox'
                                            value=''
                                            id=''
                                        />
                                        <label className='form-check-label' htmlFor=''>
                                            Libre de Gluten
                                        </label>
                                    </div>
                                    <div className='form-check'>
                                        <input
                                            className='form-check-input'
                                            type='checkbox'
                                            value=''
                                            id=''
                                        />
                                        <label className='form-check-label' htmlFor=''>
                                            Keto
                                        </label>
                                    </div>
                                    <div className='form-check'>
                                        <input
                                            className='form-check-input'
                                            type='checkbox'
                                            value=''
                                            id=''
                                        />
                                        <label className='form-check-label' htmlFor=''>
                                            Kosher
                                        </label>
                                    </div>
                                    <div className='form-check'>
                                        <input
                                            className='form-check-input'
                                            type='checkbox'
                                            value=''
                                            id=''
                                        />
                                        <label className='form-check-label' htmlFor=''>
                                            Vegano
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='filter-card mb-3'>
                            <h3 className='filter-title'>Tags de Productos</h3>
                            <div>
                                <div className='product-tags d-flex flex-wrap align-center gap-10'>
                                    <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>
                                        Semillas
                                    </span>
                                    <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>
                                        Cereales
                                    </span>
                                    <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>
                                        Lacteos
                                    </span>
                                    <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>
                                        Galletas
                                    </span>
                                    <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>
                                        Jugos
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className='filter-card mb-3'>
                            <h3 className='filter-title'>Productos Random</h3>
                            <div>
                                <div className='random-products mb-3 d-flex'>
                                    <div className='w-50'>
                                        <img src='images/yerba.jpg' className='img-fluid' alt='yerba' />
                                    </div>
                                    <div className='w-50'>
                                        <h5>
                                            Yerba Mate Canarias 1kg Uruguay Importada Premium
                                        </h5>
                                        <ReactStars
                                            count={5}
                                            size={24}
                                            value={4}
                                            edit={false}
                                            activeColor='#ffd700'
                                        />
                                        <b>$ 7999</b>
                                    </div>
                                </div>
                                <div className='random-products d-flex'>
                                    <div className='w-50'>
                                        <img src='images/yerba.jpg' className='img-fluid' alt='yerba' />
                                    </div>
                                    <div className='w-50'>
                                        <h5>
                                            Yerba Mate Canarias 1kg Uruguay Importada Premium
                                        </h5>
                                        <ReactStars
                                            count={5}
                                            size={24}
                                            value={4}
                                            edit={false}
                                            activeColor='#ffd700'
                                        />
                                        <b>$ 7999</b>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-9'>
                        <div className='filter-sort-grid mb-4'>
                            <div className='d-flex justify-content-between align-items-center'>
                                <div className='d-flex align-items-center gap-10'>
                                    <p className='mb-0 d-block' style={{ width: "150px" }}>
                                        Ordenar Por:
                                    </p>
                                    <select name='' className='form-control form-select' id=''>
                                        <option value='manual'>
                                            Destacados
                                        </option>
                                        <option value='best-selling' selected='selected'>
                                            Mas Vendidos
                                        </option>
                                        <option value='title-ascending'>
                                            Alfabeticamente, A-Z
                                        </option>
                                        <option value='title-descending'>
                                            Alfabeticamente, Z-A
                                        </option>
                                        <option value='price-ascending'>Precio mas alto al mas bajo</option>
                                        <option value='price-descending'>Precio mas bajo al mas alto</option>
                                        <option value='created-ascending'>Lo mas viejo a lo mas nuevo</option>
                                        <option value='created-descending'>Lo mas nuevo a lo mas viejo</option>
                                    </select>
                                </div>
                                <div className='d-flex align-items-center gap-10'>
                                    <p className='totalproducts mb-0'>21 Productos</p>
                                    <div className='d-flex gap-10 align-items-center grid'>
                                        <img
                                            onClick={() => {
                                                setGrid(3);
                                            }}
                                            src='images/gr4.svg'
                                            className='d-block img-fluid'
                                            alt='grid' />
                                        <img
                                            onClick={() => {
                                                setGrid(4);
                                            }}
                                            src='images/gr3.svg'
                                            className='d-block img-fluid'
                                            alt='grid' />
                                        <img
                                            onClick={() => {
                                                setGrid(6);
                                            }}
                                            src='images/gr2.svg'
                                            className='d-block img-fluid'
                                            alt='grid' />
                                        <img
                                            onClick={() => {
                                                setGrid(12);
                                            }}
                                            src='images/gr.svg'
                                            className='d-block img-fluid'
                                            alt='grid' />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='products-list pb-5'>
                            <div className='d-flex gap-10 flex-wrap'>
                                <ProductCrd grid={grid} />
                            </div>
                        </div>
                    </div>
                </div>
            </Container >
        </>
    );
};

export default OurStore;