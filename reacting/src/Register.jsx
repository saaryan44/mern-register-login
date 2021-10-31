import {useState} from 'react'; import {useHistory,Link} from 'react-router-dom';


const Register=()=>{const history=useHistory();const[m,n]=useState({name:"",email:"",password:""}); 

const registerme=async(d)=>{d.preventDefault(); const am=await fetch('/register',{method:'POST', headers:{'Content-Type':'application/json'},body:JSON.stringify({name:m.name,email:m.email,password:m.password})}); if(am.ok){const bm=await am.json(); if(!bm.registered){alert(bm.message); history.push('/login');}else{alert(bm.message);}}else{alert("Some error in fetching request.");}};

const update=(d)=>{n({...m,[d.target.name]:d.target.value});};

return(<><form autoComplete="off" method="post"  onSubmit={registerme}><input type="text" name="name" placeholder="name" value={m.name} onChange={update}  /><input type="email" placeholder="email" name="email" value={m.email} onChange={update}  /><input type="password"  placeholder="password" name="password" value={m.password} onChange={update}  /><input type="submit" name="name" value="Register now"/></form><h4>Already registered? <Link to="/login">Log in</Link></h4></>);};


export default Register;