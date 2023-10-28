import React, {useState} from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import  { Link, useNavigate }  from 'react-router-dom';
import './CSS/Content.css'
import { useEffect } from 'react';

function Content() {

  let navigate = useNavigate()

  useEffect(()=>{
    const user = sessionStorage.getItem("Username")
    if(user=="" || user===null)
    {
      navigate("/")
    }
  },[])
  return ( 

    <div   style={{minHeight:"100vh", backgroundColor:"rgb(137,170,237)"}}>
        <div style={{height:"60px",width:"100%",backgroundColor:"#3e5385", color:"white", textAlign:"center"}}>
                <h1>DASHBOARD</h1>
             </div>
     <div style={{width:"80%",margin: "50px auto"}}>
  <Row xs={{ cols:2, gutter: 5}} lg={{ cols: 2, gutter: 2}} style={{textAlign:"center"}}>
  <Col >
      <div  className="p-2 border rounded  m-2 cont ">
      Add Update
        <p><Link to='/addupdate' style={{textDecoration:"none", color:"lightgrey"}}>click here</Link></p>
      </div>
    </Col>
    <Col>
      <div className="p-2 border rounded  m-2 cont">
        Edit Update
        <p><Link  to="/editupdate"  style={{textDecoration:"none", color:"lightgrey"}}>click here</Link></p>
        </div>
    </Col>
    <Col>
      <div className="p-2 border rounded  m-2 cont">
        Get Update  
        <p><Link to='/getupdate' style={{textDecoration:"none", color:"lightgrey"}}>click here</Link></p>
        </div>
    </Col>
    </Row >
    <Row xs={{ cols:2, gutter: 5}} lg={{ cols: 3, gutter: 3}} style={{textAlign:"center"}}>
    <Col>
      <div className="p-2 border rounded  m-2 cont">
       Gridview
        <p><Link to='/gridview' style={{textDecoration:"none",color:"lightgrey"}}>click here</Link></p>
        </div>
    </Col>
    <Col>
    <div className="p-2 border rounded  m-2 cont">
        Project Timeline 
        <p><Link to='/ptimeline'  style={{textDecoration:"none",color:"lightgrey"}}>click here</Link></p>
      </div>
    </Col>
    <Col>
    <div className="p-2 border rounded  m-2 cont">
        Add Project Timeline 
        <p><Link to='/addptimeline'  style={{textDecoration:"none",color:"lightgrey"}}>click here</Link></p>
      </div>
    </Col>
    </Row>
    
    </div>
      
    
    
   
    
    
 
  
  
    </div>
  )
}

export default Content