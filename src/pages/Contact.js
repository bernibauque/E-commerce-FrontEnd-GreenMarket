import React from 'react';
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { IoHomeOutline } from "react-icons/io5";
import { BiPhoneCall, BiInfoCircle } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai"
import Container from '../components/Container';

const Contact = () => {
    return (
        <>
            <Meta title={"Contactanos"} />
            <BreadCrumb title="Contactanos" />
            <Container class1='contact-wrapper py-5 home-wrapper-2'>
                <div className='row'>
                    <div className='col-12'>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113927.15985767424!2d-65.30516607071696!3d-26.832834934150863!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94223792d6c56903%3A0xf88d5b92b5c56527!2sSan%20Miguel%20de%20Tucum%C3%A1n%2C%20Tucum%C3%A1n!5e0!3m2!1ses-419!2sar!4v1703714791807!5m2!1ses-419!2sar"
                            width="600"
                            height="450"
                            className='border-0 w-100'
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                    <div className='col-12 mt-5'>
                        <div className='contact-inner-wrapper d-flex justify-content-between'>
                            <div>
                                <h3 className='contact-title mb-4'>Contactanos</h3>
                                <form action='' className='d-flex flex-column gap-15'>
                                    <div>
                                        <input
                                            type='text'
                                            className='form-control'
                                            placeholder='Nombre'
                                        />
                                    </div>
                                    <div>
                                        <input
                                            type='email'
                                            className='form-control'
                                            placeholder='Email'
                                        />
                                    </div>
                                    <div>
                                        <input
                                            type='tel'
                                            className='form-control'
                                            placeholder='Numero Telefonico'
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
                                    <div>
                                        <button className='button border-0'>Enviar</button>
                                    </div>
                                </form>
                            </div>
                            <div>
                                <h3 className='contact-title mb-4'>Mantente en contacto con nosotros</h3>
                                <div>
                                    <ul className='ps-0'>
                                        <li className='mb-3 d-flex gap-15 align-items-center'>
                                            <IoHomeOutline className='fs-5' />
                                            <address className='mb-0'>
                                                San Miguel de Tucuman, Tucuman, Argentina
                                            </address>
                                        </li>
                                        <li className='mb-3 d-flex gap-15 align-items-center'>
                                            <BiPhoneCall className='fs-5' />
                                            <a href='+54 38126789376'>+54 38126789376</a>
                                        </li>
                                        <li className='mb-3 d-flex gap-15 align-items-center'>
                                            <AiOutlineMail className='fs-5' />
                                            <a href='mailto:greenmarketuc@gmail.com'>
                                                greenmarketuc@gmail.com
                                            </a>
                                        </li>
                                        <li className='mb-3 d-flex gap-15 align-items-center'>
                                            <BiInfoCircle className='fs-5' />
                                            <p className='mb-0'>Lunes a Viernes de 10:00 - 20:00</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default Contact