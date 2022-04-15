import { Routes, Route } from 'react-router-dom';


import Home from './Pages/Home/Home';
import Layout from './components/Nav/Layout';
import LoginPage from './Pages/Login/LoginPage';
import SignInPage from './Pages/Login/SignInPage';
import AddContactPage from './Pages/Contact/AddContactPage';
import EditContactPage from './Pages/Contact/EditContactPage';
import { useAppSelector } from './app/hooks';




function App() {
  const user = useAppSelector(state => state.user.user)
  console.log(user.email);
  console.log(!!user.email);
  return (
    <Routes>

    
        <Route path='/' element={<Layout/>}>
     <Route path='/contacts'  element={<Home/>}/>
     <Route path='/add-contact' element={<AddContactPage/>}/>
     <Route path='/edit-contact/:id' element={<EditContactPage/>}/>
       <Route index element={<LoginPage/>}/>
      <Route path='/register' element={<SignInPage/>}/>
  </Route>
 


    

    </Routes>

  );
}

export default App;
