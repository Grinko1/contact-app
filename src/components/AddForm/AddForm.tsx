import { FC } from 'react';
import './AddForm.scss';
interface IAddForm {
    name:string, 
    setName:(e:string)=>void,
    tel:string, 
    setTel:(e:string)=>void,  
    email:string, 
    setEmail:(e:string)=>void, 
    site:string, 
    setSite:(e:string)=>void
}

const AddForm:FC<IAddForm> = ({name, setName,tel, setTel,  email, setEmail, site, setSite}) => {
    return (
        <div className='addForm'>
            <label className='addForm__label'>Имя и Фамилия</label>
            <input 
             className='addForm__input' 
             type="text"
             value={name}
             onChange={(e) => setName(e.target.value)}
             />
            <label className='addForm__label'>Телефон</label>
            <input 
            className='addForm__input'  
            type="text"
            value={tel}
            onChange={(e) => setTel(e.target.value)}
            />
            <label className='addForm__label'>Email</label>
            <input  
            className='addForm__input' 
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
            <label className='addForm__label'>Сайт</label>
            <input  
            className='addForm__input' 
            type="text"
            value={site}
            onChange={(e)=>setSite(e.target.value)}
            />
        </div>
    );
};

export default AddForm;