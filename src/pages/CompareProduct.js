import React from 'react';
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import Container from '../components/Container';

const CompareProduct = () => {
    return (
        <>
            <Meta title={"Compara Productos"} />
            <BreadCrumb title="Compara Productos" />
            <Container class1='compare-product-wrapper py-5 home-wrapper-2'>
                <div className='row'>
                    <div className='col-3'>
                        <div className='compare-product-card position-relative'>
                            <img
                                src='images/cross.svg'
                                alt='cross'
                                className='position-absolute cross img-fluid'
                            />
                            <div className='product-card-image'>
                                <img src='images/crackers.jpg' alt='crackers' />
                            </div>
                            <div className='compare-product-details'>
                                <h5 className='title'>
                                    Galletitas Crackers Con Semillas
                                </h5>
                                <h6 className='price mb-3 mt-3'>$1.799</h6>
                                <div>
                                    <div className='product-detail'>
                                        <h5>Marca:</h5>
                                        <p>Smams</p>
                                    </div>
                                    <div className='product-detail'>
                                        <h5>Tipo:</h5>
                                        <p>Sin Tacc</p>
                                    </div>
                                    <div className='product-detail'>
                                        <h5>Disponibilidad:</h5>
                                        <p>En Stock</p>
                                    </div>
                                    <div className='product-detail'>
                                        <h5>Cantidad:</h5>
                                        <p>150 Gr</p>
                                    </div>
                                    <div className='product-detail'>
                                        <h5>Sabor:</h5>
                                        <p>Mix Semillas</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-3'>
                        <div className='compare-product-card position-relative'>
                            <img
                                src='images/cross.svg'
                                alt='cross'
                                className='position-absolute cross img-fluid' />
                            <div className='product-card-image'>
                                <img src='images/crackers.jpg' alt='crackers' />
                            </div>
                            <div className='compare-product-details'>
                                <h5 className='title'>
                                    Galletitas Crackers Con Semillas
                                </h5>
                                <h6 className='price mb-3 mt-3'>$1.799</h6>
                                <div>
                                    <div className='product-detail'>
                                        <h5>Marca:</h5>
                                        <p>Smams</p>
                                    </div>
                                    <div className='product-detail'>
                                        <h5>Tipo:</h5>
                                        <p>Sin Tacc</p>
                                    </div>
                                    <div className='product-detail'>
                                        <h5>Disponibilidad:</h5>
                                        <p>En Stock</p>
                                    </div>
                                    <div className='product-detail'>
                                        <h5>Cantidad:</h5>
                                        <p>150 Gr</p>
                                    </div>
                                    <div className='product-detail'>
                                        <h5>Sabor:</h5>
                                        <p>Mix Semillas</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
};

export default CompareProduct;