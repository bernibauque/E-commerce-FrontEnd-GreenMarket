import React from 'react';
import { Link } from 'react-router-dom';
import Marquee from 'react-fast-marquee';
import BlogCard from '../components/BlogCard';
import ProductCard from '../components/ProductCard';
import SpecialProduct from '../components/SpecialProduct';
import Container from '../components/Container';
import { services } from '../utils/Data';

const Home = () => {

    return (
        <>
            <Container class1='home-wrapper-1 py-5'>
                <div className='row'>
                    <div className='col-6'>
                        <div className='main-banner position-relative'>
                            <img
                                src='images/main-banner-1.jpg'
                                className='img-fluid rounded-3'
                                alt='main banner'
                            />
                            <div className='main-banner-content position-absolute'>
                                <h4>NUEVO ADEREZO LIGHT</h4>
                                <h5>0% Calorias</h5>
                                <p>Sin agregados ni azucares</p>
                                <Link className='button'>COMPRAR</Link>
                            </div>
                        </div>
                    </div>
                    <div className='col-6'>
                        <div className='d-flex flex-wrap gap-10 justify-content-between align-items-center'>
                            <div className='small-banner position-relative'>
                                <img
                                    src='images/catbanner-01.jpg'
                                    className='img-fluid rounded-3'
                                    alt='main banner'
                                />
                                <div className='small-banner-content position-absolute'>
                                    <h4>NUEVAS MARCAS</h4>
                                    <h5>Legumbres</h5>
                                    <p>Con ingredientes <br /> Sin Tacc</p>
                                </div>
                            </div>
                            <div className='small-banner position-relative'>
                                <img
                                    src='images/catbanner-02.jpg'
                                    className='img-fluid rounded-3'
                                    alt='main banner'
                                />
                                <div className='small-banner-content position-absolute'>
                                    <h4>NUEVA FORMULA</h4>
                                    <h5>Aceites</h5>
                                    <p>Con menos calorias</p>
                                </div>
                            </div>
                            <div className='small-banner position-relative'>
                                <img
                                    src='images/catbanner-03.jpg'
                                    className='img-fluid rounded-3'
                                    alt='main banner'
                                />
                                <div className='small-banner-content position-absolute'>
                                    <h4>NATURALES</h4>
                                    <h5>Especias</h5>
                                    <p>De todo el <br /> continente</p>
                                </div>
                            </div>
                            <div className='small-banner position-relative'>
                                <img
                                    src='images/catbanner-04.jpg'
                                    className='img-fluid rounded-3'
                                    alt='main banner'
                                />
                                <div className='small-banner-content position-absolute'>
                                    <h4>SALUDABLES</h4>
                                    <h5>Infusiones</h5>
                                    <p>Con conservantes de <br /> origen natural</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
            <Container class1='home-wrapper-2 py-5'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='services d-flex align-items-center justify-content-between'>
                            {services?.map((i, j) => {
                                return (
                                    <div className='d-flex align-items-center gap-15' key={j}>
                                        <img src={i.image} alt='services' />
                                        <div>
                                            <h6>{i.title}</h6>
                                            <p className='mb-0'>{i.tagline}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div >
            </Container >
            <Container class1='home-wrapper-2 py-5'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='categories d-flex jusstify-content-between flex-wrap align-items-center'>
                            <div className='d-flex gap align-items-center'>
                                <div>
                                    <h6>Endulzantes</h6>
                                    <p>10 Productos</p>
                                </div>
                                <img src='images/Endulzante.jpg' alt='camera' />
                            </div>
                            <div className='d-flex gap align-items-center'>
                                <div>
                                    <h6>Cereales</h6>
                                    <p>10 Productos</p>
                                </div>
                                <img src='images/Cereal.jpg' alt='camera' />
                            </div>
                            <div className='d-flex gap align-items-center'>
                                <div>
                                    <h6>Mermeladas</h6>
                                    <p>10 Productos</p>
                                </div>
                                <img src='images/Mermelada.jpg' alt='camera' />
                            </div>
                            <div className='d-flex gap align-items-center'>
                                <div>
                                    <h6>Encurtidos</h6>
                                    <p>10 Productos</p>
                                </div>
                                <img src='images/Encurtido.jpg' alt='camera' />
                            </div>
                            <div className='d-flex gap align-items-center'>
                                <div>
                                    <h6>Aderezos</h6>
                                    <p>10 Productos</p>
                                </div>
                                <img src='images/Aderezo.jpg' alt='camera' />
                            </div>
                            <div className='d-flex gap align-items-center'>
                                <div>
                                    <h6>Semillas</h6>
                                    <p>10 Productos</p>
                                </div>
                                <img src='images/Semilla.jpg' alt='camera' />
                            </div>
                            <div className='d-flex gap align-items-center'>
                                <div>
                                    <h6>Jugos</h6>
                                    <p>10 Productos</p>
                                </div>
                                <img src='images/Jugo.jpg' alt='camera' />
                            </div>
                            <div className='d-flex gap align-items-center'>
                                <div>
                                    <h6>Vinos</h6>
                                    <p>10 Productos</p>
                                </div>
                                <img src='images/Vino.jpg' alt='camera' />
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
            <Container class1='featured-wrapper py-5 home-wrapper-2'>
                <div className='row'>
                    <div className='col-12'>
                        <h3 className='section-heading'>Nuestros Productos</h3>
                    </div>
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </div>
            </Container>
            <Container class1='famous-wrapper py-5 home-wrapper-2'>
                <div className='row'>
                    <div className='col-3'>
                        <div className='famous-card position-relative'>
                            <img src='images/famous-1.jpg' className='img-fluid' alt='famous' />
                            <div className='famous-content position-absolute'>
                                <h5>Aceites</h5>
                                <h6>Palacio De Los Olivos</h6>
                                <p>Aceite De Oliva Virgen Lata 3L</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-3'>
                        <div className='famous-card position-relative'>
                            <img src='images/famous-2.jpg' className='img-fluid' alt='famous' />
                            <div className='famous-content position-absolute'>
                                <h5 className='text-dark'>Galletas</h5>
                                <h6 className='text-dark'>Lovvit</h6>
                                <p className='text-dark'>Galletitas De Limon Lovvit Sin Tacc 180g</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-3'>
                        <div className='famous-card position-relative'>
                            <img src='images/famous-3.jpg' className='img-fluid' alt='famous' />
                            <div className='famous-content position-absolute'>
                                <h5 className='text-dark'>Cafe</h5>
                                <h6 className='text-dark'>Nescafé Gold</h6>
                                <p className='text-dark'>Café Nescafé Gold Sin Azucar 100gr</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-3'>
                        <div className='famous-card position-relative'>
                            <img src='images/famous-4.jpg' className='img-fluid' alt='famous' />
                            <div className='famous-content position-absolute'>
                                <h5 className='text-dark'>Yogurt</h5>
                                <h6 className='text-dark'>Coco Iogo - Crudda</h6>
                                <p className='text-dark'>Yogurt Sabor Durazno Sin Azúcar Agregadas</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
            <Container class1='special-wrapper py-5 home-wrapper-2'>
                <div className='row'>
                    <div className='col-12'>
                        <h3 className='section-heading'>Oferta del dia</h3>
                    </div>
                </div>
                <div className='row'>
                    <SpecialProduct />
                    <SpecialProduct />
                    <SpecialProduct />
                    <SpecialProduct />
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
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </div>
            </Container>
            <Container class1='marque-wrapper home-wrapper-2 py-5'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='marquee-inner-wrapper card-wrapper'>
                            <Marquee className='d-flex'>
                                <div className='mx-4 w-25'>
                                    <img src='images/brand-01.png' alt='brand' />
                                </div>
                                <div className='mx-4 w-25'>
                                    <img src='images/brand-02.png' alt='brand' />
                                </div>
                                <div className='mx-4 w-25'>
                                    <img src='images/brand-03.png' alt='brand' />
                                </div>
                                <div className='mx-4 w-25'>
                                    <img src='images/brand-04.png' alt='brand' />
                                </div>
                                <div className='mx-4 w-25'>
                                    <img src='images/brand-05.png' alt='brand' />
                                </div>
                                <div className='mx-4 w-25'>
                                    <img src='images/brand-06.png' alt='brand' />
                                </div>
                                <div className='mx-4 w-25'>
                                    <img src='images/brand-07.png' alt='brand' />
                                </div>
                                <div className='mx-4 w-25'>
                                    <img src='images/brand-08.png' alt='brand' />
                                </div>
                            </Marquee>
                        </div>
                    </div>
                </div>
            </Container>
            <Container class1='blog-wrapper py-5 home-wrapper-2'>
                <div className='row'>
                    <div className='col-12'>
                        <h3 className='section-heading'>Nuestro Blog</h3>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-3'>
                        <BlogCard />
                    </div>
                    <div className='col-3'>
                        <BlogCard />
                    </div>
                    <div className='col-3'>
                        <BlogCard />
                    </div>
                    <div className='col-3'>
                        <BlogCard />
                    </div>
                </div>
            </Container>
        </>
    );
};

export default Home;