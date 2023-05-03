import {useState} from 'react'
import {useNavigate,Link} from 'react-router-dom'
import {handleLogin} from '../utils/Resource'


const Login = () => {
    const [username,setUsername]=useState("")
    const [password,setPassword]=useState("")

    const navigate=useNavigate();

    const handleSubmit=(e)=>{
        if(username.trim() && password.trim()){ 
        e.preventDefault()
        console.log({username,password})
        handleLogin(username,password,navigate)
        setUsername("")
        setPassword("")
        }

    }
  return (
    <main className='login'>
        <form className='login__form' onSubmit={handleSubmit}>
            <h2 className='login__title'>Log into your account</h2>
            <label htmlFor='username'>Username</label>
            <input id='username'
             type='text' 
             required
             name='username'
             value={username} 
             className='username'
             onChange={(e)=>setUsername(e.target.value)}
             />
             <label htmlFor='password'>Password</label>
             <input type='text'
             id='password' 
             name='password'
             required
              className='password'
               value={password}
               onChange={(e)=>setPassword(e.target.value)}
               />
               <button className='loginButton'>LogIn</button>
               <p style={{textAlign:'center',marginTop:'30px'}}>Dont hava an account? {" "}
               <Link className='link' to='/register'>
               create one
               </Link>
               
               </p>
        </form>
    </main>
  )
};

export default Login;
