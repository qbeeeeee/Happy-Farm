import React,{useState} from 'react'
import './CSS/LoginSignup.css'

const LoginSignup = () => {

  const checkBox = document.querySelector("#checkbox-agree");
  const [state,setState] = useState("Login");
  const [formData,setFormData] = useState({
    username:"",
    password:"",
    email:""
  })

  const changeHandler = (e) => {
    setFormData({...formData,[e.target.name]:e.target.value});
  }

  const login = async () =>{
    console.log("Login function exc", formData);
    let responseData;
    await fetch('http://localhost:4000/login',{
      method:'POST',
      headers:{
        Accept:'application/form-data',
        'Content-Type':'application/json',
      },
      body: JSON.stringify(formData),
    }).then((response)=>response.json()).then((data)=>{responseData=data})

    if(responseData.success){
      localStorage.setItem('auth-token',responseData.token);
      window.location.replace("/");
    }
    else{
      alert(responseData.errors);
    }
  }

  const signup = async () =>{
    if(formData.email ==="" || formData.username === "" || formData.password === "")
    {
      return alert("Please Fill All Fields");
    }else if(!checkBox.checked){
      return alert("Agree to the terms of use & privacy policy");
    }
    else if(formData.password.length<6){
      return alert("Require Stronger Password");
    }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formData.email)){
      return alert("Invalid Email Adress");
    }
    console.log("sign up exc", formData);
    let responseData;
    await fetch('http://localhost:4000/signup',{
      method:'POST',
      headers:{
        Accept:'application/form-data',
        'Content-Type':'application/json',
      },
      body: JSON.stringify(formData),
    }).then((response)=>response.json()).then((data)=>{responseData=data})

    if(responseData.success){
      localStorage.setItem('auth-token',responseData.token);
      window.location.replace("/");
    }
    else{
      alert(responseData.errors);
    }

  }

  return (
    <div className="loginsignup">
        <div className="loginsignup-container">
          <h1>{state}</h1>
          <div className="loginsignup-fields">
            {state==="Sign Up"?<input name='username' value={formData.username} onChange={changeHandler} type="text" placeholder="Your Name" />:<></>}
            <input name='email' value={formData.email} onChange={changeHandler} type="email" placeholder="Email Address" />
            <input name='password' value={formData.password} onChange={changeHandler} type="password" placeholder="Password" />
          </div>
          <button onClick={()=>{state==="Login"?login():signup()}}>Continue</button>
          {state==="Sign Up"
          ?<p className="loginsignup-login">Already have an account? <span onClick={()=>{setState("Login")}}>Login here</span>  </p>
          :<p className="loginsignup-login">Create an account? <span onClick={()=>{setState("Sign Up")}}>Click here</span>  </p>}
          {state==="Sign Up"
          ?<div className="loginsignup-agree">
            <input type="checkbox" name='' id='checkbox-agree'/>
            <p>By continuing, i agree to the terms of use & privacy policy</p>
          </div>
          :""}
        </div>
    </div>
  )
}

export default LoginSignup