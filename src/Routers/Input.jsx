import React, {  useState } from 'react'
import "./form.css"

function Input(props) {
  const { label , onChange , id ,  errormessage , eyetoggler , slasheyetoggler , ...eventProps } = props;
  const [ focused ,setFocused ] = useState(false);
  const [ visible , setVisibility ] = useState(false);
  

  const handleFocused = (e) => {
    setFocused(true)
  }
  const passwordToggler = () => {
    setVisibility(!visible)
  }

    if(visible) {
      eventProps.type = "text"
    }
  


  return (
    <>
    

    <section className='Section-Div'>
    <div className='Section-Input'>
      <label htmlFor={label}> {label}</label>
        <input 
          className='Input-SignUp' 
          {...eventProps}
          onChange={onChange}
          onBlur={handleFocused}
          focused={focused.toString()}
          onFocus={() => {
            eventProps.name === "confirmpassword" && setFocused(true)
          }}
          id= {id}
        
        />
          <span>{errormessage}</span>
    </div>
          <span className='eyeToggler-SignUP' onClick={passwordToggler} >{ visible ? slasheyetoggler : eyetoggler }</span>
          </section>       
    </>
  )
}

export default Input;
