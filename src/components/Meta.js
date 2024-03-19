// Utilizacion de biblioteca react-helmet para manejar metadatos de la página
import { Helmet } from 'react-helmet';
import React from 'react'

const Meta = (props) => {
    return (
        <Helmet>
            <meta charSet='utf-8' />
            <title>{props.title}</title>
        </Helmet>
    )
}

export default Meta