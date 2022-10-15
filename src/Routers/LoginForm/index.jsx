import React, { useEffect, useState } from 'react'
import Header from '../../component/Header';
import { Link , useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from "../../Firebase"
import "../form.css"


const Login = () => {
const [ email , setEmail ] = useState("");
const [ password , setPassword ] = useState("");
const [ visible , setVisibility ] = useState(true);
const navigate = useNavigate();
const user = localStorage.getItem("uid");
localStorage.getItem("email");

  useEffect(() => {
    if(user){
      navigate("/todo")
    } 

  })

 


  const LoginController = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword( auth , email , password)
    .then((res) => {
        navigate("/todo")
        console.log(res)
        localStorage.setItem("uid" , res.user.uid)
        localStorage.setItem("email" , res.user.email)
    })
    .catch((err) => {
      console.log(err)
    })
  }


  const passwordToggler = () => {
    setVisibility(!visible)
  }

  return (
    <>
    <div className='Main-Login'>
      <form onSubmit={LoginController}>
        {<Header name={"LOGIN"} />}
        <section className='Section-Login'>
          <div className='Input-Login'>
            <label htmlFor="Username"><i className="fa-solid fa-user"></i></label>
            <input className="Input-Box"  onChange={(e) => setEmail(e.target.value)} id='Username' autoComplete='off' type="email" placeholder='Email Address'  />
          </div>
          <div className='Input-Login' >
            <label htmlFor="Password"><i className="fa-solid fa-lock"></i></label>
            <input className="Input-Password"  onChange={(e) => setPassword(e.target.value)} id='Password' autoComplete='off'  type={ visible ? "password" : "text"} placeholder='Password' />              
            <span onClick={passwordToggler} className="eyeToggler-Login"  >
              { visible ? <i  className="fa-solid fa-eye" ></i> : <i className="fa-solid fa-eye-slash"></i>  }
              </span>
          </div>
          <div className='Check-Box'>
            
            <input id='checkBox' type="checkBox" />
            <label htmlFor="checkBox">Remember me</label>
          </div>
          <div className='Login-Btn'>
            <button  >Login</button>
          </div>
          <div className='SignUp-Link'>
            <span>Don't have an account?</span>
            <Link to="/signUp">Sign Up</Link>
          </div>
        </section>
      </form>

    </div>
      

    </>
  )
}

export default Login;



// {
  /* <Header name={"LOGIN"} />
<section className='Section-Body'>


<div className='Div-Login' >
  <label htmlFor="Username"><i className="fa-solid fa-user"></i></label>
      <input className="Input-Box"  onChange={(e) => setEmail(e.target.value)} id='Username' autoComplete='off' type="email" placeholder='Username'  />
      <span onClick={passwordToggler} className="eyeToggler-Login"></span>
</div> 

  <br />
  

<div className='Div-Login'>  
  <label htmlFor="Password"><i className="fa-solid fa-lock"></i></label>
      <input className="Input-Password" onChange={(e) => setPassword(e.target.value)} id='Password' autoComplete='off'  type={ visible ? "password" : "text"} placeholder='Password' />
      <span onClick={passwordToggler} className="eyeToggler-Login"  >
        { visible ? <i  className="fa-solid fa-eye" ></i> : <i className="fa-solid fa-eye-slash"></i>  }
      </span>
</div>    
  

<br />
<br />

<div className='Check-Box'>
  <input type="checkBox" />
  <p>Remember me</p>
</div>

<div className='Login-Btn'>
    <button>Login</button>
</div>


<div className='SignUp-Link'>
  <span>Don't have an account?</span>
  <Link to="/signUp">Sign Up</Link>
  </div>



</section> */
// }