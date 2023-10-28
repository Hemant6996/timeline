import React from 'react';
//import ReactDOM from 'react-dom/client';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//import { BrowserRouter as Router,Routes, Route} from 'react-router-dom';
 import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Addupdate from './Component/Addupdate';
import Editupdate from './Component/Editupdate';
import Getupdate from './Component/Getupdate';
import Gridview from './Component/Gridview';
import Ptimeline from './Component/Ptimeline';
import Addptimeline from './Component/Addptimeline';
import Content from './Component/Content';
import { Login } from '@mui/icons-material';
import Navigation from './Component/UI/Navigation';
import { Children } from 'react';

const UserType = sessionStorage.getItem("Role")
// const UserType = "Admin"
const routing = (
    <div>
        <Navigation/>
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<App/>}/>
            <Route path='/getupdate' element={<Getupdate/>}/>
            <Route path='/addupdate' element={<Addupdate/>}/>
            <Route path='/editupdate' element={<Editupdate/>}/>
            <Route path='/gridview' element={<Gridview/>}/>
            <Route path='/ptimeline' element={<Ptimeline/>}/>
            <Route path='/addptimeline' element={<Addptimeline/>}/>
            <Route path='/dashboard' element={<AdminElement><Content/></AdminElement>}/>
            <Route path='*' element={<div>Page Not Found</div>}/>
            {/* <Route path='/login' element={<Login/>}/> */}
        </Routes>
        </BrowserRouter>     

        
    </div>
)


function AdminElement({children}){
if(UserType == "Admin"){
    return <>{children}
    {
        console.log(UserType)
    }
    </>
}
else{
    return <div>You do not have access to this page 
        {console.log(UserType)}
    </div>
}
    
            
}  


ReactDOM.render(
    routing,
    document.getElementById('root')
  );
  







  
//  If you want to start measuring performance in your app, pass a function
//  to log results (for example: reportWebVitals(console.log))
//  or send to an analytics endpoint. Learn more: https:bit.ly/CRA-vitals
reportWebVitals();
