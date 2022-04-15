import { FC } from 'react';
import Login from './Login';

const SignInPage:FC = () => {
    return (
        <>
            <Login
                 header='Регистрация'
                 btnName='Зарегистрироваться'
                 accountQuestion='Уже есть аккаунт'
                 link='/'
                 linkValue='Войти'
            />
        </>
    );
};

export default SignInPage;