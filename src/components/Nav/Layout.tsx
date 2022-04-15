import { FC } from 'react';
import { Outlet, useNavigate} from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { logout } from '../../features/user/userSlice';
import './Layout.scss'



const Layout:FC = () => {
  const {user} = useAppSelector(state => state.user)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  
  const handleLogout = () => {
    dispatch(logout())
    navigate('/')
  }
    return (
        <>
        <header className='header'>
            <div className='header__logo'>
                  <h1 className='header__head'>ContactsApp</h1> 
            </div>
            {
              user.email === '' ? '' : (
                  <div className='header__logout'>
                <span className='header__email'>{user.email}</span>
                <button className='header__logout-btn' onClick={handleLogout}>Выйти</button>
            </div>
              )
            }
      </header>
      <main className="container">
      <Outlet/>
      </main>
      </>
    );
};

export default Layout;