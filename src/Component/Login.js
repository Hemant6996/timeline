import React, { useEffect, useState } from 'react'
import "./CSS/Login.css"
import { toast } from 'react-toastify';
import axios from 'axios';
import { Error } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

function Login() {

    const [user,setUser] = useState();
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");

    const navigate = useNavigate()

    useEffect(()=>{
        sessionStorage.clear("Username")
        sessionStorage.clear("Role")
    },[])

    const validate = ()=>{
        var result = true;
        if(username === "" || username === null){
            result = false;
             toast.warning("Please Enter Username")
            alert("Please Enter Username")
            return result
        }
        if(password === "" || password === null){
            result = false;
            //toast.warning("Please Enter Password")
            alert("Please Enter Password")
        }
        return result;
        }
        
    
    const Handlelogin = (e)=>{
          
           e.preventDefault()
           if(validate()){
             
            axios.get(`https://localhost:7295/api/Registration/${username}`)
            .then((res)=>{
                  
                    if(res.data.password === password){
                        alert("Login Done")
                        sessionStorage.setItem("Username",username)
                        sessionStorage.setItem("Role",res.data.role)
                        navigate('/dashboard')
                    }else{
                        alert("Please Enter Valid Credentials")
                    }
                  
            }).catch((err)=>{
                console.log(err)
                if(err.response.data.status == "404"){
                    alert("Please Enter Valid Username")
                  }
                        // alert(`Login Failed Due to${err.message}`)
                        console.log(err)
            })

           }
        
    }

    
  return (
    <div>
        <section className="vh-100">
  <div className="container-fluid">
    <div className="row">
      <div className="col-sm-6 text-black">

        <div className="px-5 ms-xl-4">
         
          <span className="h1 fw-bold mb-0">FMG Timeline</span>
        </div>

        <div className="d-flex align-items-center h-custom-2 px-5 ms-xl-4 mt-2 pt-5 pt-xl-0 mt-xl-n5">

          < form style={{width:"60%"}} onSubmit={Handlelogin}>

            <h3 className="fw-normal mb-3 pb-3" style={{letterSpacing:"1px"}} >Log in</h3>

            <div className="form-outline mb-4">
              <input type="text" id="form2Example18"  className="form-control form-control-lg" onChange={(e)=>{setUsername(e.target.value)}}/>
              <label className="form-label" for="form2Example18">Username</label>
            </div>

            <div className="form-outline mb-4">
              <input type="password" id="form2Example28" className="form-control form-control-lg" onChange={(e)=>{setPassword(e.target.value)}} />
              <label className="form-label" for="form2Example28">Password</label>
            </div>

            <div className="pt-1 mb-4">
              <button className="btn btn-info btn-lg btn-block" type="Submit">Login</button>
            </div>

            <p className="small mb-5 pb-lg-2"><a className="text-muted" href="#!">Forgot password?</a></p>
            <p>Don't have an account? <a href="#!" className="link-info">Register here</a></p>

          </form>

        </div>

      </div>
      <div className="col-sm-6 px-0 d-none d-sm-block">
        
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default Login