import React, { useEffect, useState }  from "react";
import Header from "../../component/Header";
import Input from "../Input";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth , db } from "../../Firebase" 
import "../form.css"
import { collection, doc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const Signup = () => {
const [ values , setValues ] = useState({
  username : "",
  email : "",
  password : "",
  confirmPassword : "",
  birthday : "" ,
  number : ""
});
const navigate = useNavigate();
const user = localStorage.getItem("uid");
localStorage.getItem("name");
localStorage.getItem("email");



useEffect(() => {
  if(user) {
    navigate("./todo")
  }
})

const input = [
  {
    id : 1,
    name : "username",
    type : "text",
    placeholder : "Username",
    label : "",
    errormessage : "Should be (greater than 3) and (less than 16) & No special character!",
    pattern : "^(?=.*[A-Za-z(' ')])(?=.*)[A-Za-z(' ')]{8,}$",
    required : true,
  },
  {
    id : 2,
    name : "email",
    type : "email",
    placeholder : "abc@example.com",
    label : "",
    errormessage : "Invalid Email!",
    required : true,
  },
  {
    id : 3,
    name : "password",
    type : "password",
    placeholder : "Password",
    label : "",
    errormessage : "Password should be more than 5 characters. Must Include letters or numbers & No special Character!",
    eyetoggler :  <i  className="fa-solid fa-eye" ></i> ,
    slasheyetoggler :<i className="fa-solid fa-eye-slash"></i>,
    pattern : "^(?=.*[A-Za-z0-9])(?=.*)[A-Za-z0-9]{6,}$",
    required : true ,
  },
  {
    id : 4,
    name : "confirmpassword",
    type : "password",
    placeholder : "Confirm Password",
    label : "",
    errormessage : "Password Not Match!",
    eyetoggler : <i  className="fa-solid fa-eye" ></i>,
    slasheyetoggler :<i className="fa-solid fa-eye-slash"></i>,
    pattern : values.password,
    required : true,
  },
  {
    id : 5,
    name : "birthday",
    type : "text",
    placeholder : "Date Of Birth",
    label : "",
    errormessage : "Date of Birth Not Mention!",
    required : true,
  },
  {
    id : 6,
    name : "number",
    type : "number",
    placeholder : "03XX XXXXXXX",
    label : "",
    errormessage : "Number Not Mention",
    required : true,
  },
]

let email = values.email;
let username = values.username


  const signUpController = (e) => {
    e.preventDefault();
    const dbCollection = collection( db , "UserInput" )
    createUserWithEmailAndPassword( auth , values.email , values.password )
    .then( async  (res) => {
      console.log(res);
      const obj = {
        Username : values.username,
        Email : values.email,
        uid : res.user.uid,
        DateOfBirth : values.birthday,
        Number : values.number,
      }
      localStorage.setItem("username" , username)
      localStorage.setItem("email" , email)
      
      
      await setDoc(doc(dbCollection , res.user.uid) , obj);
      navigate("/")
    })
    .catch((err) => {
      console.log(err, "Err")
    })

    // const data = new FormData(e.target)
    // console.log(Object.fromEntries(data.entries()))
  }  

  const onChange = (e) => {
    setValues({...values , [e.target.name] : e.target.value})
    }



  return ( 
    <> 
      <div className="Main-Input" >
        <form onSubmit={signUpController}>
          <Header name="Register Your Account " />
          {input.map((event , ind) => (
            <Input 
              key={ind} 
              {...event} 
              values={values[event.name]} 
              onChange={onChange}
              autoComplete="off" 
            />
            
          ))}
          <button className="signUp-btn">SIGN UP</button>
        </form>  
      </div>
    </>
  )
}
export default Signup;









///////Old code 
// import React, { useEffect, useState } from 'react'
// import Header from '../../component/Header';
// import { createUserWithEmailAndPassword } from "firebase/auth"
// import { auth , db } from '../../Firebase'; 
// import { collection , setDoc , doc } from 'firebase/firestore';
// import { useNavigate } from 'react-router-dom';
// import Input from '../../component/Input';


// const Signup = () => {
//   const [ firstName , setFirstName ] = useState("");
//   const [ lastName , setLastName ] = useState("");
//   const fullName = firstName + " " + lastName;
//   const [ email , setEmail ] = useState("");
//   const [ password , setPassword ] = useState("");
//   const [ confirmPassword , setConfirmPassword ] = useState("")
//   const [ number , setNumber ] = useState("");
//   const [ visible , setVisibility ] = useState(true);
//   const [ confirmVisible , setConfirmVisibility ] = useState(true);
//   const navigate = useNavigate();
//   const user = localStorage.getItem("uid");
//  console.log(confirmPassword)

//   useEffect(() => {
//     if(user) {
//       navigate("/todo")
//     }
//   });


//   const SignUpController =  (e) => {
//     e.preventDefault();
//     const dbCollection = collection( db , "UserInput" );
    

//     createUserWithEmailAndPassword( auth , email , password)
//     .then((res) => {
//       const obj = {
//         fullName,
//         email,
//         uid : res.user.uid,
//         number,
//       }
//       setDoc(doc(dbCollection , res.user.uid) , obj);
//       navigate("/");        
//     })
//     .catch((err) => {
//       console.log(err)
//     })
//   };
  
//   const passwordToggler = () => {
//     setVisibility(!visible)
//   };
//   const confirmPasswordToggler = () => {
//     setConfirmVisibility(!confirmVisible)
//   };

//   return (
//     <>
//        <form onSubmit={SignUpController} className="Main">
//       <section className='Section'>

//         <Header name={"Create Your Account Here"}  />

//         <section className='Section-Body'>
//           <div className='SignUp-Div'>

//           <label htmlFor="FirstName"></label>
//             <Input type="text" onChange={(e) => setFirstName(e.target.value)} id='FirstName' className='Full-Name' placeholder='First Name'  />

//           <br />
//           <br />
   
           
//           <label htmlFor="LastName"></label>
//             <Input type="text" onChange={(e) => setLastName(e.target.value)} className='Full-Name' placeholder='Last Name' />
//           </div>
   

//           <br />


//           <label htmlFor="Email"></label>
//             <Input type="email" onChange={(e) => setEmail(e.target.value)} id='Email' className="Input-Box" placeholder='Email' />


//           <br />
//           <br />
           


//           <label htmlFor="Password"></label>
//             <Input onChange={(e) => setPassword(e.target.value)} id="Password"  autoComplete="off" className="Input-Password"  type={ visible ? "password" : "text"} placeholder='Password' />
//             <span onClick={passwordToggler} className='Password-Btn'>
//                 { visible ? <i  className="fa-solid fa-eye" ></i> : <i className="fa-solid fa-eye-slash" ></i>  }
//             </span>
       
//           <br />

       
       
//           <label htmlFor="ConfirmPassword"></label>
//             <input onChange={(e) => setConfirmPassword(e.target.value)} id='ConfirmPassword' autoComplete='off' className="Input-Password"  type={ confirmVisible ? "password" : "text"} placeholder='Confirm Password' />
//             <span onClick={confirmPasswordToggler} className='Password-Btn'>
//                 { confirmVisible ? <i  className="fa-solid fa-eye" ></i> : <i className="fa-solid fa-eye-slash"></i>  }
//             </span>

//           <br />

       
       
//           <label htmlFor="Number"></label>
//             <input type="Number" onChange={(e) => setNumber(e.target.value)} id='Number' className="Input-Box" placeholder='Phone Number' />        
       
//           <br />
       
       
//           <div className='SignUp-Btn'>
//                 <button>
//                   Sign Up
//                 </button>
//           </div>
//         </section>
//       </section>
//     </form>
//     </>
//   )
// }

// export default Signup;