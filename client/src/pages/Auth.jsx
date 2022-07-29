import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import MyButton from '../components/button/MyButton';
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from '../utils/consts';

const Auth = () => {

    const location = useLocation()

    const isLogin = location.pathname === LOGIN_ROUTE
    console.log(location)
    return (
        <div className='auth_container'>
            <div className='auth_card'>
                <h1>{isLogin ? 'authorization' : 'registreation'}</h1>
                <input type='text' placeholder='username'/>
                <input type='text' placeholder='password'/>
                <div className='form_content'>
                    {
                        isLogin ?
                        <p>dont have account? <Link to={REGISTRATION_ROUTE}>rregistraed!</Link></p>
                        : 
                        <p>dont have account? <Link to={LOGIN_ROUTE}>Login!</Link></p>

                    }
                    <MyButton>{isLogin ? 'Log in' : 'Registration'}</MyButton>
                </div>
            </div>
        </div>
    );
};

export default Auth;