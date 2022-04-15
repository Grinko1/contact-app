import { FC, useState } from 'react';

import ContactItem from '../../components/ContactItem/ContactItem';
import './Home.scss'
import {  useGetContactsQuery, useDeleteContactMutation } from '../../features/contacts/contactApi';
import Search from '../../components/Search/Search';




 export interface IContacts {
       id: string,
       email: string,
       name: string,
       phone:string,
       website:string
    }
const Home:FC = () => {
  
    const [searchValue, setSearchValue] = useState<string>('')
    const {data: contacts} = useGetContactsQuery(searchValue)
    const [deleteContact] = useDeleteContactMutation()
 
    const handleRemove = (id: string) => {
        deleteContact(id)
    }
    return (
        <div>
            <Search 
            searchValue={searchValue} 
            setSearchValue={setSearchValue}
            />
          <div className="contact__block">
         
            {
                contacts && contacts.map(contact => (
                    <ContactItem key={contact.id} contact={contact} handleRemove={handleRemove} />
                ))
            }
          </div>
        </div>
    );
};

export default Home;