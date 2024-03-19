// Renderiza una tarjeta de blog con una imagen, título, fecha y una breve descripción
// y proporciona un enlace para ver más detalles del blog
import React from 'react';
import { Link } from 'react-router-dom';

const BlogCard = () => {
    return (
        <div className='blog-card'>
            <div className='card-image'>
                <img src='images/blog-1.jpg' className='img-fluid w-100' alt='blog' />
            </div>
            <div className='blog-content'>
                <p className='date'>1 Sep, 2021</p>
                <h5 className='title'>Nuestra Quinua</h5>
                <p className='desc'>Hace un año decidimos ponernos en acción,
                    la consigna fue la búsqueda de productores de proximidad,
                    investigar...
                </p>
                <Link to='/blog/:id' className='button'>
                    Leer Mas
                </Link>
            </div>
        </div>
    );
};

export default BlogCard;