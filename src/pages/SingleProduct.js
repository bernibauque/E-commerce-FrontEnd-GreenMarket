import React, { useState } from 'react';
import ReactStars from 'react-rating-stars-component';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import ProductCard from '../components/ProductCard';
import ReactImageZoom from "react-image-zoom";
import { TbGitCompare } from "react-icons/tb";
import { AiOutlineHeart } from "react-icons/ai";
import { Link } from 'react-router-dom';
import yerba from "../images/yerba.jpg"
import Container from '../components/Container';

const SingleProduct = () => {
    const props = {
        width: 594, /*ancho */
        height: 600, /*altura 332*/
        zoomWidth: 600,

        img: "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&d1=pexels-fernando-arcos-190819.jpg&fm=jpg"
    };

    const [orderedProduct, setorderedProduct] = useState(true);

    const copyToClipboard = (text) => {
        console.log('text', text)
        var textField = document.createElement('textarea')
        textField.innerText = text
        document.body.appendChild(textField)
        textField.select()
        document.execCommand('copy')
        textField.remove()
    };

    const closeModal = () => { };

    return (
        <>
            <Meta title={'Product Name'} />
            <BreadCrumb title='Product Name' />
            <Container class1='main-product-wrapper py-5 home-wrapper-2'>
                <div className='row'>
                    <div className='col-6'>
                        <div className='main-product-image'>
                            <div>
                                <ReactImageZoom {...props} />
                            </div>
                        </div>
                        <div className='other-product-images d-flex flex-wrap gap-15'>
                            <div>
                                <img src='https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
                                    className='img-fluid'
                                    alt=''
                                />
                            </div>
                            <div>
                                <img src='https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
                                    className='img-fluid'
                                    alt=''
                                />
                            </div>
                            <div>
                                <img src='https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
                                    className='img-fluid'
                                    alt=''
                                />
                            </div>
                            <div>
                                <img src='https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
                                    className='img-fluid'
                                    alt=''
                                />
                            </div>
                        </div>
                    </div>
                    <div className='col-6'>
                        <div className='main-product-details'>
                            <div className='border-bottom'>
                                <h3 className='title'>
                                    Galletitas SMAMS Rellenas De Mouse Chocolate 110G Sin Tacc
                                </h3>
                            </div>
                            <div className='border-bottom py-3'>
                                <p className='price'>$1327</p>
                                <div className='d-flex align-items-center gap-10'>
                                    <ReactStars
                                        count={5}
                                        size={24}
                                        value={4}
                                        edit={false}
                                        activeColor='#ffd700'
                                    />
                                    <p className='mb-0 t-review'>( 2 calificaciones )</p>
                                </div>
                                <a className='review-btn' href='#review'>Escribe una Reseña</a>
                            </div>
                            <div className=' py-3'>
                                <div className='d-flex gap-10 align-items-center mt-2 mb-3'>
                                    <h3 className='product-heading'>Tipo de dieta :</h3>
                                    <p className='product-data'>Sin Tacc</p>
                                </div>
                                <div className='d-flex gap-10 align-items-center mt-2 mb-3'>
                                    <h3 className='product-heading'>Marca :</h3>
                                    <p className='product-data'>SMAMS</p>
                                </div>
                                <div className='d-flex gap-10 align-items-center mt-2 mb-3'>
                                    <h3 className='product-heading'>Categoria :</h3>
                                    <p className='product-data'>Galletas</p>
                                </div>
                                <div className='d-flex gap-10 align-items-center mt-2 mb-3'>
                                    <h3 className='product-heading'>Tags :</h3>
                                    <p className='product-data'>Galletitas</p>
                                </div>
                                <div className='d-flex gap-10 align-items-center mt-2 mb-3'>
                                    <h3 className='product-heading'>Disponibilidad :</h3>
                                    <p className='product-data'>En Stock</p>
                                </div>
                                <div className='d-flex gap-10 align-items-center mt-2 mb-3'>
                                    <h3 className='product-heading'>Peso Neto :</h3>
                                    <p className='product-data'>105 gr</p>
                                </div>
                                <div className='d-flex gap-10 align-items-center mt-2 mb-3'>
                                    <h3 className='product-heading'>Formato de venta :</h3>
                                    <p className='product-data'>Unidad</p>
                                </div>
                                <div className='d-flex align-items-center gap-15 flex-row mt-2 mb-3'>
                                    <h3 className='product-heading'>Cantidad :</h3>
                                    <div className=''>
                                        <input
                                            type='number'
                                            name=''
                                            min={1}
                                            max={10}
                                            className='form-control'
                                            style={{ width: "70px" }}
                                            id='' />
                                    </div>
                                    <div className='d-flex align-items-center gap-30 ms-5'>
                                        <button className='button border-0' type='submit'>
                                            Agregar al carrito
                                        </button>
                                        <button className='button signup'>
                                            Comprar
                                        </button>
                                    </div>
                                </div>
                                <div className='d-flex align-items-center gap-15'>
                                    <div>
                                        <a href=''>
                                            <TbGitCompare className='fs-5 me-2' /> Añadir para Comparar
                                        </a>
                                    </div>
                                    <div>
                                        <a href=''>
                                            <AiOutlineHeart className='fs-5 me-2' /> Añadir a Wishlist
                                        </a>
                                    </div>
                                </div>
                                <div className='d-flex gap-10 flex-column my-3'>
                                    <h3 className='product-heading'>
                                        Compras y Devoluciones :
                                    </h3>
                                    <p className='product-data'>
                                        Envío y devoluciones gratuitos disponibles en todos
                                        los pedidos! <br /> Envios a todo el pais
                                        <b> de de 5 a 10 dias habiles</b>
                                    </p>
                                </div>
                                <div className='d-flex gap-10 align-items-center my-3'>
                                    <h3 className='product-heading'>
                                        Enlace de Producto :
                                    </h3>
                                    <a
                                        href='javascript:void(0);'
                                        onClick={() => {
                                            copyToClipboard(
                                                "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                                            );
                                        }}
                                    >
                                        Copiar Enlace del Producto
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
            <Container class1='description-wrapper py-5 home-wrapper-2'>
                <div className='row'>
                    <div className='col-12'>
                        <h4>Descripcion</h4>
                        <div className='bg-white p-3'>
                            <p>
                                Galletitas Rellenas de Chocolate. Presentación Individual
                                Envase 110 gr Peso Neto. Tapa de Chocolate -
                                Ingredientes: Almidón de maíz, azúcar, aceite de girasol
                                alto oleico, harina de arroz, agua, cacao, jarabe de glucosa,
                                leche en polvo, harina de soja, colorante caramelo, sal,
                                lecitina de soja, bicarbonato de sodio, bicarbonato de amonio,
                                colorante rojo, propionato de calcio, aroma chocolate y vainilla.
                            </p>
                        </div>
                    </div>
                </div>
            </Container>
            <Container class1='reviews-wrapper home-wrapper-2'>
                <div className='row'>
                    <div className='col-12'>
                        <h3 id='review'>Reviews</h3>
                        <div className='review-inner-wrapper'>
                            <div className='review-head d-flex justify-content-between align-items-end'>
                                <div>
                                    <h4 className='mb-2'>Opiniones de compradores</h4>
                                    <div className='d-flex align-items-center gap-10'>
                                        <ReactStars
                                            count={5}
                                            size={24}
                                            value={4}
                                            edit={false}
                                            activeColor='#ffd700'
                                        />
                                        <p className='mb-0'>Basado en 2 calificaciones</p>
                                    </div>
                                </div>
                                {orderedProduct && (
                                    <div>
                                        <a className='text-dark text-decoration-underline' href=''>
                                            Escribe una Reseña
                                        </a>
                                    </div>
                                )}
                            </div>
                            <div className='review-form py-4'>
                                <h4>Escribe una Reseña</h4>
                                <form action='' className='d-flex flex-column gap-15'>
                                    <div>
                                        <ReactStars
                                            count={5}
                                            size={24}
                                            value={4}
                                            edit={true}
                                            activeColor='#ffd700'
                                        />
                                    </div>
                                    <div>
                                        <textarea
                                            name=''
                                            id=''
                                            className='w-100 form-control'
                                            cols='30'
                                            rows='4'
                                            placeholder='Comentarios'
                                        ></textarea>
                                    </div>
                                    <div className='d-flex justify-content-end'>
                                        <button className='button border-0'>Enviar Reseña</button>
                                    </div>
                                </form>
                            </div>
                            <div className='reviews mt-4'>
                                <div className='review'>
                                    <div className='d-flex gap-10 align-items-center'>
                                        <h6 className='mb-0'>SoleRojas</h6>
                                        <ReactStars
                                            count={5}
                                            size={24}
                                            value={4}
                                            edit={false}
                                            activeColor='#ffd700'
                                        />
                                    </div>
                                    <p className='mt-3'>
                                        Muy buen producto, lo volvere a comprar.
                                    </p>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
            <Container class1='popular-wrapper py-5 home-wrapper-2'>
                <div className='row'>
                    <div className='col-12'>
                        <h3 className='section-heading'>Nuestros Productos Populares</h3>
                    </div>
                </div>
                <div className='row'>
                    <ProductCard />
                </div>
            </Container>

            <div
                className='modal fade'
                id='staticBackdrop'
                data-bs-backdrop='static'
                data-bs-keyboard='false'
                tabIndex='-1'
                aria-labelledby='staticBackdropLabel'
                aria-hidden='true'
            >
                <div className='modal-dialog modal-dialog-centered'>
                    <div className='modal-content'>
                        <div className='modal-header py-0 border-0'>
                            <button
                                type='button'
                                className='btn-close'
                                data-bs-dismiss='modal'
                                aria-label='Close'
                            ></button>
                        </div>
                        <div className='modal-body py-0'>
                            <div className='d-flex align-items-center'>
                                <div className='flex-grow-1 w-50'>
                                    <img src={yerba} className='img-fluid' alt='product image' />
                                </div>
                                <div className='d-flex flex-column flex-grow-1 w-50'>
                                    <h6 className='mb-3'>Apple Watch</h6>
                                    <p className='mb-1'>Quantity: asadsa</p>
                                    <p className='mb-1'>Color: nkdfn</p>
                                    <p className='mb-1'>Size: msamd</p>
                                </div>
                            </div>
                        </div>
                        <div className='modal-footer border-0 py-0 justify-content-center gap-30'>
                            <button type='button' className='button' data-bs-dismiss='modal'>
                                View my Cart
                            </button>
                            <button type='button' className='button signup'>
                                Checkout
                            </button>
                        </div>
                        <div className='d-flex-justify-content-center py-3'>
                            <Link
                                className='text-dark'
                                to='/product'
                                onClick={() => {
                                    closeModal();
                                }}
                            >
                                Continue To Shipping
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleProduct