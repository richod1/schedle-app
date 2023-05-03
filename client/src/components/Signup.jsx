import {useState} from 'react'
import {Link,useNavigate} from 'react-router-dom';
import {handleRegister} from '../utils/Resource';

const Signup = () => {

    const [email,setEmail]=useState("")
    const [password,setPassword] =useState("")
    const [username,setUsername]=useState("")
    const [companyName,setCompanyName]=useState("")
    const navigate=useNavigate()  
    
    const handleSubmit=(e)=>{
        if(email.trim() && password.trim() && username.trim()){ 
        e.preventDefault();
        console.log({email,username,password,companyName})
        handleRegister(email,username,password,navigate)
        setEmail("")
        setPassword("")
        setCompanyName("")
        setUsername("")
        }

    }
  return (
    <main className='signup'>
      <form  className='signup__form' onSubmit={handleSubmit}>
        <h2 className='signup__title'>Create an Account</h2>
        <label htmlFor='username'>Username</label>
        <input id='username'
        type='text'
        required
         className='username'
          name='username'
           value={username}
           onChange={(e)=>setUsername(e.target.value)}
           />
           <label htmlFor='email'>Email</label>
           <input type='text' 
           id='email'
            className='email'
            name='email'
            required
             value={email} 
             onChange={(e)=>setEmail(e.target.value)}
             />
             <label htmlFor='password'>Password</label>
             <input type='text'
              name='password'
             className='password' 
             value={password} 
             id='password'
              required
              onChange={(e)=>setPassword(e.target.value)}
              />

              <label htmlFor='companyName'>Company Name</label>
              <input type='text'
              id='companyName'
               name='companyName'
               className='companyName'
                value={companyName}
                 required 
              onChange={(e)=>setCompanyName(e.target.value)}
              />
              <button className='signupButton'>Register an account</button>
              <p style={{textAlign:"center", marginTop:"30px"}}>Already have an account?{""}
            <Link className='link' to='/'>login</Link>
              </p>

      </form>

    </main>
  )
};

export default Signup;
