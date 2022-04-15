import './ContactItem.scss';
import { IContacts } from '../../Pages/Home/Home';
import {FiEdit3} from 'react-icons/fi'
import {BiTrash} from 'react-icons/bi'
import Modal from '../Modal/Modal';
import { FC, useState } from 'react';
import { useNavigate } from 'react-router';

interface IContactProps {
contact: IContacts,
handleRemove: (id:string) => void,

}

const ContactItem:FC<IContactProps> = ({contact, handleRemove}) => {
    const [active, setActive] = useState<boolean>(false)
    const navigate = useNavigate()

    const openModal = (contact: IContacts) => {
        handleRemove(contact.id)
    }
    return (
        <div className='contact__item' >
        
          {   active ? 

                 (<Modal active={active} setActive={setActive}  >
             <>
                  <b>Вы действительно хотите удалить контакт?</b>
                  <h3 className='modal__name'>{contact.name}</h3>
                
                  <div className='modal__btns' >
                      <button  className='modal__btn delete' onClick={()=>openModal(contact)}>Удалить</button>
                      <button className='modal__btn cancel' onClick={()=>setActive(false)}>Отменить</button>
                  </div>
                  </>
          </Modal> )
          : (
             <>
                    <div className='contact__btns'>
             <span className='contact__btn edit' onClick={()=>navigate(`/edit-contact/${contact.id}`)}><FiEdit3/></span>
            <span  className='contact__btn delete' onClick={()=>setActive(true)}><BiTrash/></span>
            </div>
           
           <p className='contact__title'> <b>Name: </b>{contact.name}</p>
           <p><b>Phone: </b>{contact.phone}</p>
           <p> <b>Email: </b>{contact.email}</p>
           <p> <b>Website: </b>{contact.website}</p>
             </> 
          )}
     
        </div>
    );
};

export default ContactItem;