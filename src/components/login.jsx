import React, { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const dispatch = useDispatch();
  const  navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {

    try {
      const response = await axios.post('http://localhost:2000/login', { email, password });
      const { firstName } = response.data;
      dispatch({ type: 'SET_USER', payload: firstName }); 
       if(response.data) {
        navigate('/')
       }       
    } catch (error) {
      console.error('Login failed', error);
    }
  };

  const redirecter = () => {
    navigator('/register');
  }

  return (
    <center>
    <div style={{display:"flex",flexDirection:"column",justifyContent:"center",padding:"10px",width:"150px",margin:"auto",gap:"10px",backgroundImage:`url(/purple.jpg)`,backgroundSize:"cover",backgroundRepeat:"no-repeat",height:"765px",width:"1500px"}}>
   
      <h2 style={{margin:"auto"}}>Login</h2>
      
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      
      <div>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      
      <button onClick={handleSubmit} style={{margin:"auto",width:'150px',height:'50px',borderBlockColor:'pink'}}>Login</button> 

      <button onClick={redirecter} style={{margin:"auto",width:"150px",height:"50px",borderBlockColor:"pink"}}>Not a user</button> 

    </div>
    </center>
  );
};

export default Login;
