import {Switch, Link, Route} from 'react-router-dom';
import Register from './Register';
import Login from './Login';


const Dne=()=><h1>This page does not exist. <br/><u>404 not found</u></h1>;

const Index=()=><div><h3>Hello universe</h3><Link to="/register" >Register now</Link><pre>     <Link to="/login">Login now</Link></pre></div>;

const App=()=><><h1>Bare-bones User Registeration and Login Application</h1><br /><hr /><Switch><Route path="/" exact component={Index}/><Route path="/register" exact component={Register} /><Route path="/login" exact component={Login}/> <Route component={Dne} /></Switch></>;

export default App;