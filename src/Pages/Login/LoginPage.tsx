import { FC } from 'react';
import Login from './Login';

const LoginPage:FC = () => {


    return (
        <>
            <Login
            header='Login'
            btnName='Войти'
            accountQuestion='Нет аккаунта'
            link='/register'
            linkValue='Зарегистрируйтесть'
            />
            
        </>
    );
};

export default LoginPage;