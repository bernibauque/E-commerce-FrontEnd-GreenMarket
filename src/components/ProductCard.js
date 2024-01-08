import React from 'react';
import ReactStars from 'react-rating-stars-component';
import { Link, useLocation } from 'react-router-dom';
import prodcompare from "../images/prodcompare.svg";
import wish from "../images/wish.svg";
import wishlist from "../images/wishlist.svg";
import yerba from "../images/yerba.jpg" /*watch */
import yerba1 from "../images/yerba-1.jpg" /*watch2 */
import addcart from "../images/add-cart.svg";
import view from "../images/view.svg";

const ProductCard = (props) => {
    const { grid } = props;
    let location = useLocation();

    return (
        <>
            <div
                className={` ${location.pathname == "/product" ? `gr-${grid}` : "col-3"} `}
            >
                <Link
                    to={`${location.pathname == "/" ? "product/:id" : ":id"}`}
                    className='product-card position-relative'>
                    <div className='wishlist-icon position-absolute'>
                        <button className='border-0 bg-transparent'>
                            <img src={wish} alt='wishlist' />
                        </button>
                    </div>
                    <div className='product-image'>
                        <img src={yerba} className='img-fluid' alt='product image' />
                        <img src={yerba1} className='img-fluid' alt='product image' />
                    </div>
                    <div className='product-details'>
                        <h6 className='brand'>Nuevo</h6>
                        <h5 className='product-title'>
                            Yerba Mate Canarias 1kg Uruguay Importada Premium
                        </h5>
                        <ReactStars
                            count={5}
                            size={24}
                            value={4}
                            edit={false}
                            activeColor='#ffd700'
                        />
                        <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
                            Yerba mate con la mayor proporción de hoja pura del mercado
                            y un adecuado equilibrio entre polvo y palo. Producto 100%
                            natural sin agregados artificiales de conservantes ni otros
                            productos químicos. Alta duración de sabor durante su consumo.
                        </p>
                        <p className='price'>$7999</p>
                    </div>
                    <div className='action-bar position-absolute'>
                        <div className='d-flex flex-column gap-15'>
                            <button className='border-0 bg-transparent'>
                                <img src={prodcompare} alt='compare' />
                            </button>
                            <button className='border-0 bg-transparent'>
                                <img src={view} alt='view' />
                            </button>
                            <button className='border-0 bg-transparent'>
                                <img src={addcart} alt='addcart' />
                            </button>
                        </div>
                    </div>
                </Link>
            </div>
            <div
                className={` ${location.pathname == "/product" ? `gr-${grid}` : "col-3"} `}
            >
                <Link
                    to={`${location.pathname == "/" ? "product/:id" : "product/:id"}`}
                    className='product-card position-relative'>
                    <div className='wishlist-icon position-absolute'>
                        <button className='border-0 bg-transparent'>
                            <img src={wish} alt='wishlist' />
                        </button>
                    </div>
                    <div className='product-image'>
                        <img src={yerba} className='img-fluid' alt='product image' />
                        <img src={yerba1} className='img-fluid' alt='product image' />
                    </div>
                    <div className='product-details'>
                        <h6 className='brand'>Nuevo</h6>
                        <h5 className='product-title'>
                            Yerba Mate Canarias 1kg Uruguay Importada Premium
                        </h5>
                        <ReactStars
                            count={5}
                            size={24}
                            value={4}
                            edit={false}
                            activeColor='#ffd700'
                        />
                        <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
                            Yerba mate con la mayor proporción de hoja pura del mercado
                            y un adecuado equilibrio entre polvo y palo. Producto 100%
                            natural sin agregados artificiales de conservantes ni otros
                            productos químicos. Alta duración de sabor durante su consumo.
                        </p>
                        <p className='price'>$7999</p>
                    </div>
                    <div className='action-bar position-absolute'>
                        <div className='d-flex flex-column gap-15'>
                            <button className='border-0 bg-transparent'>
                                <img src={prodcompare} alt='compare' />
                            </button>
                            <button className='border-0 bg-transparent'>
                                <img src={view} alt='view' />
                            </button>
                            <button className='border-0 bg-transparent'>
                                <img src={addcart} alt='addcart' />
                            </button>
                        </div>
                    </div>
                </Link >
            </div >
        </>
    );
};

export default ProductCard;