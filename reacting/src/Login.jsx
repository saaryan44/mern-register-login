import {Link} from 'react-router-dom';
import {useState} from 'react';

const Home=({name,email})=>{alert(`hi ${name}`);return(<div><h1>hello {name}</h1><h1 style={{float:"right"}}>Welcome {email}</h1><section><img src="https://th.bing.com/th/id/OIP.Z6hTDv9NAwKYB5B18BvTFgHaDd?pid=ImgDet&rs=1" alt="mern" /><h1>Placeholder Home Page.</h1></section><Link to="/" >Back to index page</Link></div>);};


const Login=()=>{const [login,dologin]=useState(false); const [mm,bn]=useState({email:"",password:"",name:""}); 
const setit=(s)=>{bn({...mm,[s.target.name]:s.target.value});};
const trylogin=async (s)=>{s.preventDefault();alert(mm.email); const yu=await fetch('/login',{method:"POST",headers:{'Content-Type':'application/json'},body:JSON.stringify({email:mm.email,password:mm.password})}); if(yu.ok){const yy=await yu.json();if(yy.ok){alert('logged in successfully');bn({...mm,name:yy.name}); dologin(true);}else{alert('invalid credentials');}}else{alert('error in trying to login');}};
return(<>{login===false?<form method="post" autoComplete="off" onSubmit={trylogin}><fieldset><legend>Enter user credentials</legend><input type="email" name="email" placeholder="email" value={mm.email} onChange={setit} /><input type="password" name="password" placeholder="password" value={mm.password} onChange={setit} /><input type="submit" value="login now" /></fieldset><br /><fieldset><legend>Not a registered user? </legend><Link to="/register">Register now</Link></fieldset></form>:<Home name={mm.name} email={mm.email} />}<footer>Some footer</footer></>);};
export default  Login;