import { FC, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import Form from '../../components/Form/Form';
import { login, register } from '../../features/user/userSlice';
import './Login.scss';

interface ILoginProps {
    header:string,
    btnName: string,
    accountQuestion: string,
    link: string,
    linkValue: string
}
const Login:FC<ILoginProps> = ({ header,btnName,accountQuestion,link,linkValue}) => {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
 

    const {error, isAuth} = useAppSelector(state => state.user)
 
    const handleUser = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        const user = {
            email: email,
            password: password
        }
        if(btnName === 'Зарегистрироваться' && email !== '' && password !== ''){
            dispatch(register(user)) 
            if(isAuth) {
                 navigate('/contacts')
            }
               
   
        } else if (btnName === 'Войти' && email !== '' && password !== ''){
            dispatch(login(user))
            if(isAuth) {
                navigate('/contacts')
           }
 

        }
       

    }
    return (
        <div className='login'>
            <h1 className='login__head'>{header}</h1>
            <form className="login__form">
               <Form
               error={error}
               email={email}
               setEmail={setEmail}
               password={password}
               setPassword={setPassword}
               /> 
                {error !== '' ? (
                    <div className='login__error'>
                        <span className='login__error-span'>{error}</span>
                        </div>
                ) : ''}
            
               <button className='login__btn' onClick={handleUser}>{btnName}</button>
               <div className='login__link'>{accountQuestion}? <Link to={`${link}`}>{linkValue}</Link></div>
            </form>
            
        </div>
    );
};

export default Login;