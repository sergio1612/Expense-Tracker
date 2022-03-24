import React ,{useState}from 'react';
import {Routes,Route} from 'react-router-dom';
import { Login } from './components/login';
// import Login_smart from './containers/login_container';
import { Landing } from './components/landing';
import  SignUp  from './components/signup';
import {Dashboard} from './containers/Dashboard';
import  AuthComponent  from './containers/AuthComponent';

function App (){
  const [login,setLogin] = useState(localStorage.getItem("login"))
  console.log(login)

    return (
      <div>
        <Routes>
          
          <Route exact path = "/" element = {<Landing />}></Route>
          <Route exact path = "/login" element = {<Login login={login} setLogin={setLogin}/>}></Route>
          <Route exact path = "/signup" element = {<SignUp />}></Route>
          <Route exact path = "/Auth" element = {<AuthComponent login={login} />}>
           <Route exact path = "/Auth/Dashboard" element = {<Dashboard />}></Route>
          </Route>
       </Routes>
      </div>
    )
} 
export default App;