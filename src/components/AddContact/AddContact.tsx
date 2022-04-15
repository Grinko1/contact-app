import { FC, useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { useAppDispatch } from '../../app/hooks';
import AddForm from '../AddForm/AddForm';
import { addContact, updateContact } from '../../features/contacts/contactSlice';
import './AddContact.scss'
import { useGetContactsQuery } from '../../features/contacts/contactApi';

type Contact = {
    name:string,
    email: string,
    tel: string,
    site:string,
}

interface IAddContact {
    header:string,
    btnName:string,
    contact? :Contact
    id?:string 
}
const AddContact:FC<IAddContact> = ({header, btnName, contact, id}) => {
    const [name, setName] = useState<string>('')
    const [tel, setTel] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [site, setSite] = useState<string>('')
    const [error, setError] = useState<string>('')
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const {refetch} = useGetContactsQuery('')

    useEffect(() => {
        if(btnName === 'Обновить' && contact !== undefined){
            setName(contact.name)
            setEmail(contact.email)
            setSite(contact.site)
            setTel(contact.tel)
        }
    }, [contact, btnName])

    const handleAddContact = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        const contact = {
           
            name: name,
            tel: tel,
            email: email ,
            site: site  
        }
       
         if(name !== '' && tel !== '' && email !== '' && site !== '' ){
            setError('')
            if(btnName === 'Создать'){
                 dispatch(addContact(contact))
                 refetch()
            } else{
                 dispatch(updateContact({...contact,id}))
                 refetch()
            }

            navigate('/contacts')
        } else if (name === '' || tel === '' || email === '' || site === '' ){
            setError('Все поля должны быть заполнены!')  
        } 
    }
    return (
        <div className='addContact'>
           <h1 className='addContact__header'>{header}</h1>
           <form className='addContact__form'>
               <AddForm
               name={name}
                setName={setName}
                tel={tel}
                setTel={setTel}
                email={email}
                setEmail={setEmail}
                site={site}
                setSite={setSite}
               />
               {
                   error === '' 
                   ? '' 
                   : (
                <div className='addContact__error'>
                {error}
               </div>
                   )
               }
              
               <button className='addContact__btn' onClick={handleAddContact}>{btnName}</button>
           </form>
           
        </div>
    );
};

export default AddContact;