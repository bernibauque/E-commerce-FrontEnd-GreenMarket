import React from 'react';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import { Link } from 'react-router-dom';
import Container from '../components/Container';
import CustomInput from '../components/CustomInput';

const Resetpassword = () => {
    return (
        <>
            <Meta title={'Restablece la contraseña'} />
            <BreadCrumb title='Restablece la contraseña' />
            <Container class1='login-wrapper py-5 home-wrapper-2'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='auth-card'>
                            <h3 className='text-center mb-3'>Restablece la contraseña</h3>
                            <form action='' className='d-flex flex-column gap-15'>
                                <CustomInput
                                    type='password'
                                    name='password'
                                    placeholder='Contraseña'
                                />
                                <CustomInput
                                    type='password'
                                    name='confpassword'
                                    placeholder='Confirmar Contraseña'
                                />
                                <div>
                                    <div className='mt-3 d-flex justify-content-center gap-15 align-items-center'>
                                        <button className='button border-0'>OK</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default Resetpassword