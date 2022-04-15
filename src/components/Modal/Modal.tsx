import { FC } from 'react';
import './Modal.scss';
type IModalProps ={
    active:boolean,
    setActive: (e:boolean) => void,
    children: React.ReactNode
}

const Modal:FC<IModalProps> = ({active, setActive, children}) => {
    return (
        <div className={active ? 'modal open' :'modal'} onClick={() =>setActive(false)}>
            <div className={active ?'modal__content active' : 'modal__content'} onClick={(e=>e.stopPropagation())}>
            
                {children}

            </div>
            
        </div>
    );
};

export default Modal;