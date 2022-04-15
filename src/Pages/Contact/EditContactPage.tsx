import  { useEffect } from 'react';
import { FC } from 'react';
import { useParams } from 'react-router';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import AddContact from '../../components/AddContact/AddContact';
import { getContact } from '../../features/contacts/contactSlice';

const EditContactPage:FC = () => {

    let {id} = useParams()
    const dispatch = useAppDispatch()
    let contact = useAppSelector(state => state.contact.contact)

    useEffect(()=>{
        if(id !== undefined){
              dispatch(getContact(id))
        }
     
    },[id, dispatch])
    return (
        <div>
            <AddContact
            header='Редактировать контакт'
            btnName='Обновить'
            contact={contact}
            id={id}
            />
        </div>
    );
};

export default EditContactPage;
