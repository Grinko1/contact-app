import { FC } from 'react';
import './Form.scss';

interface IFormProps {
    email:string,
    setEmail:(e:string) => void,
    password: string,
    setPassword:(e:string)=>void,
    error: string
}

const MyForm:FC<IFormProps>= ({email, setEmail, password, setPassword}) => {
    const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value)
        }
const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
}

    return (
        <div className='form__block'>
         
                <label className='form__label'>Email</label>
                <input 
                className='form__input'
                type="email"
                placeholder="Введите email"
                value={email}
                required
                onChange={handleEmail}
                />
                <label className='form__label'>Пароль</label>
                <input 
                className='form__input'
                type="password"
                minLength={6}
                required
                placeholder="Введите пароль"
                value={password}
                onChange={handlePassword}
                />
         
        </div>
    );
};

export default MyForm;
