import React from 'react'
import { useState } from 'react'
import Axios from 'axios'

function Addptimeline() {

  const[pdata, setPdata] = useState({
    label:"",
    title:"",
    task:"",
    description:"",
    status:"",
    date:""
  })

  const handlechange = (e) => {

    const name = e.target.name
    const value = e.target.value

    setPdata((prev) => {

        return {
            ...prev, [name]: value
        }
    })
}

const handlesubmit = (e) => {
    e.preventDefault()

    Axios.post("https://63ea0908811db3d7ef0520ff.mockapi.io/Ptimeline", {
        label:pdata.label,
        task: pdata.task,
        title: pdata.title,
        description: pdata.description,
        status: pdata.status,
        date: pdata.edate,
       
    }).then((responce) => {
        setPdata({
            label:"",
            title:"",
            task:"",
            description:"",
            status:"",
            date:""
        })
        alert("Detail Added Successfully")
        // navigate('/getemp')
    }).catch((error) => {
        console.log(error)
    })
}



  return (
    <div style={{ minHeight: "100vh", backgroundColor: "rgb(137,170,237)" }}> 
            <div className='Platform'>
            <form  onSubmit={handlesubmit} style={{ overflow: "hidden", marginLeft: "6px" }} >
                <div>
                <label className="form-label"> Select Label &nbsp;</label>
                <select name='label' onChange={handlechange}>
                <option>select</option>
                        <option value="Label1">Label 1</option>
                        <option value="Label2">Label 2</option>
                        <option value="Label3">Label 3</option>
                   
                </select>
                </div>               
                <label className="form-label">Enter Title</label>
                <input type='text' className="form-control" name='title' value={ pdata.title} onChange={handlechange} required/>
                <label className="form-label">Enter Task</label>
                <input type='text'  className="form-control" name='task' value={pdata.task} onChange={handlechange} />
                <div></div>
                <label className="form-label">Enter Description</label>
                <input type='textarea' className="form-control" name='description' value={pdata.description} onChange={handlechange} />
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
                <input type='date' className="form-control" name='date' value={pdata.date} onChange={handlechange} required/>
                
                    <br/>
                    <br/>
                <button type='Submit'>Submit</button>
                </div>
            </form>                   
            </div>
        </div>

  )
}

export default Addptimeline