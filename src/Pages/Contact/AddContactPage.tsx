import { FC } from 'react';
import AddContact from '../../components/AddContact/AddContact';

const AddContactPage:FC = () => {
    return (
        <div>
            <AddContact
            header='Добавить контакт'
            btnName='Создать'
            />
        </div>
    );
};

export default AddContactPage;
