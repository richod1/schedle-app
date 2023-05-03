import  Profile from './components/Profile';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Signup from './components/Signup';
import BookUser from './components/BookUser';
import {Routes,Route} from 'react-router-dom';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

function App() {

  return (

    <div>
   <Routes>
    <Route path='/' element={<Login/>}/>
    <Route path='/profile/:id' element={<Profile/>}/>
    <Route path='/dashboard' element={<Dashboard/>}/>
    <Route path='/register' element={<Signup/>}/>
    <Route path='/book/:user' element={<BookUser/>}/>

   </Routes>
   <ToastContainer/>
   </div>
  )
}

export default App
