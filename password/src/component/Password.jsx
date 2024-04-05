import React, { useState } from 'react'
import './Password.css'
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa6";
function Password() {
    const [showButton,setShowButton] = useState(false);
    const [textType, setTextType] = useState("password");
    let changeButtonIcon =()=>{
        setShowButton(!showButton);  
        setTextType(textType === 'password'?"text":"password");
    }
    
  return (
    
        <form>
            <input type={textType} name="password" placeholder='Password'onClick={(e)=>{
                e.target.value
            }}/>
            
         {showButton ? <FaRegEye className='btn' onClick={changeButtonIcon}/> : <FaRegEyeSlash className='btn' onClick={changeButtonIcon}/>}
        </form>
   
  )
}

export default Password;
