import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import BootstrapTable from "react-bootstrap-table-next";
// import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css';
import filterFactory, { textFilter ,  selectFilter} from 'react-bootstrap-table2-filter';
import { toBeDisabled } from '@testing-library/jest-dom/matchers';



function Editupdate() {

    const [data, setData] = useState()
   
    const [show, setShow] = useState(false);
    const [detail, setDetail] = useState({
        task : "",
        title:"",
        description:"",
        status:"",
        edate:"",
        link:""
     })
     
     const Getdata = () => {
        Axios.get(`https://63ea0908811db3d7ef0520ff.mockapi.io/timeline`)
            .then((responce) => {
                setData(responce.data)
            })
          }

    useEffect(()=>{
        Getdata()
    },[])

    const handledelete = (id)=>{
      if(window.confirm("Are u sure") === true) {
          Axios.delete(`https://63ea0908811db3d7ef0520ff.mockapi.io/timeline/${id}`)
          .then((result)=>{
              if(result.status===200)
              {
                  alert("Data deleted")
                   Getdata() 
              }
          }).catch((error)=>{
              console.log(error)
          })
  }
      }


      const handleedit = (id)=>{
        setShow(true);

        Axios.get(`https://63ea0908811db3d7ef0520ff.mockapi.io/timeline/${id}`).then((responce)=> {
            setDetail({
                id : responce.data.id,
                task : responce.data.task,
                title:responce.data.title,
                description:responce.data.description,
                status:responce.data.status,
                edate:responce.data.edate,
                link:responce.data.link
            })
        
      })}

      const handleClose = () => setShow(false);
    


    const buttonFormatter = (cell, row, rowIndex, formatExtraData) => { 
      return ( 
            < div 
                style={{ textAlign: "center",
                   
                  lineHeight: "normal" }}>
  
   <button onClick={()=> handleedit(row.id)} >Edit</button> 
   <button onClick={()=> handledelete(row.id)} >Delete</button>
  
        
       </div> 
  ); } 


  const handlechange = (e)=>{
    const name = e.target.name
    const value= e.target.value
    // let new_value = (name === "Email")? value.toLowerCase() : value    
    setDetail((prev)=>{
        return {
            ...prev,[name] : value
        }
    })
}

const handleupdate = ()=>{
  Axios.put(`https://63ea0908811db3d7ef0520ff.mockapi.io/timeline/${detail.id}`, {
     
  id : detail.id,
  task : detail.task,
  title: detail.title,
  description: detail.description,
  status:detail.status,
  edate:detail.edate,
  link:detail.link
  }).then((result)=>{
      Getdata()
      setDetail({
        task : "",
        title:"",
        description:"",
        status:"",
        edate:"",
        link:""                   
          })
          console.log("Updated")
          handleClose()
  }).catch((error)=>{
      console.log(error)
  })
} 



  
  
           const columns = [
              // {dataField :"id", text : "ID" }, 
              {dataField :"task", text : "Task", sort:true, filter: textFilter()},
              {dataField :"title", text : "Title" },
              {dataField :"description", text : "Description" },
              {dataField :"status", text : "Status", sort:true, filter: textFilter()},
              {dataField :"edate", text : "Date", sort:true },          
              {dataField :"link", text : "Link" },
              {dataField :"Action", text : "Action", formatter: buttonFormatter, attrs: { width: 150, class: "EditRow" } }
          ]

          const [col, setCol] = useState(columns)
        const handlehide = ()=>{
          const newColumns =  columns.map((column,index)=>{
            if (column.dataField == 'task') {
             return {...column,};
            }
            
           })
           setCol(newColumns)
           console.log("hiii")
        }

         

  return (
    <div style={{minHeight:"100vh", backgroundColor:"rgb(137,170,237)"}}>
      <div style={{height:"60px",width:"100%",backgroundColor:"#3e5385", color:"white", textAlign:"center"}}>
                <h1>Manage Updates</h1>
             </div>

             {/* <button onClick={handlehide}>Hide Column</button> */}
      {
        
        data ? <>  
        <BootstrapTable 
         keyField='id' 
         columns={columns}
         data={data}
        //  selectRow={selectRow} 
         filter ={filterFactory()}
         hover
         
           /> 


{/* Modal */}

<Modal show={show} onHide={handleClose} >
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <form  style={{ overflow: "hidden", marginLeft: "6px" }} >
                <div>
                <label className="form-label"> Select Task Catagory &nbsp;</label>
                <select name="task" value={detail.task} onChange={handlechange}>
                        <option>Open this select menu</option>
                        <option value="MAV">MAV</option>
                        <option value="RDplatform">R&D</option>
                        <option value="PRD">PRD</option>
                        <option value="SolarPannel">Solar Pannel</option>
                </select>
                </div>
                
                <label className="form-label">Enter Title</label>
                <input type='text' className="form-control" name='title' value={detail.title} onChange={handlechange} required/>
                <label className="form-label">Enter Description</label>
                <input type='textarea' className="form-control" name='description' value={detail.description} onChange={handlechange} />
                <label className="form-label">status</label>
                <br/>
                <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="status"  value="Active" onChange={handlechange} checked></input>
                <label class="form-check-label">Active </label>
                </div>
                <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="status"  value="Inactive" onChange={handlechange} ></input>
                <label class="form-check-label">Inactive </label>
                </div>
                <br/>
                <div>
                <label className="form-label">Effective Date</label>
                <input type='date' className="form-control" name='edate' value={detail.edate} onChange={handlechange} required/>
                </div>
                <label className="form-label">Enter Link</label>
                <input type='text'  className="form-control" name='link' value={detail.link} onChange={handlechange} />
                <div>
                   
                </div>
            </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleupdate} >
            Update 
          </Button>
        </Modal.Footer>
      </Modal>

           </> : "Loading"

      }


     
    </div>
  )
}


export default Editupdate