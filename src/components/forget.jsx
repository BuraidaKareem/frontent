import axios from "axios";
import {useEffect,useState} from "react";

function Forget(){
const[email,setEmail]=useState('');
const[newPassword,setPassword]=useState('');
useEffect(() =>{
console.log('email is',email);
console.log('password',newPassword);
}, [email,newPassword])

const handleSubmit = async () => {
    const response = await axios.post('http://localhost:2000/forget',{
email,newPassword})
if (response.data){
    navigator('login')

}
}
return(

    <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",backgroundImage:`url(/purple.jpg)`,backgroundSize:"cover",backgroundRepeat:"no-repeat",height:"765px",width:"1500px"}}>
        <h1>Forgot Password</h1>
        <br/>
        <h5>Please enter the Email address to reset your password</h5>
        <br/>
        <input type="email" style={{width:"500px",padding:"10px",justifyContent:"center"}} placeholder="Enter your Email" onChange={(e) => setEmail(e.target.value)}></input>
        <br/><br/>
        <input type="text"placeholder="New password" name="password" onChange={(e) => setPassword(e.target.value)} style={{justifyContent:"center",padding:"10px",width:"500px"}}></input>
        <br/><br/>
        <button style={{width:"500px"}} onClick={handleSubmit}>Update password</button>
    </div>


)}

export default Forget;