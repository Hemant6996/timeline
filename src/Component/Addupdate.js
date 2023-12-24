import React, { useState } from 'react'
import Axios from "axios";
import { useNavigate, Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import "./Addupdate.css"



function Addupdate() {

    // const navigate = useNavigate()
    const [detail, setDetail] = useState({
        task: "",
        title: "",
        description: "",
        status: "Active",
        edate: "",
        link: ""
    })

    const handlechange = (e) => {

        const name = e.target.name
        const value = e.target.value

        console.log(name, value)

        setDetail((prev) => {

            return {
                ...prev, [name]: value
            }
        })
    }

    const handlesubmit = (e) => {
        e.preventDefault()

        Axios.post("https://63ea0908811db3d7ef0520ff.mockapi.io/timeline", {
            task: detail.task,
            title: detail.title,
            description: detail.description,
            status: detail.status,
            edate: detail.edate,
            link: detail.link
        }).then((responce) => {
            setDetail({
                task: "",
                title: "",
                description: "",
                status: "",
                edate: "",
                link: ""
            })
            alert("Detail Added Successfully")
            // navigate('/getemp')
        }).catch((error) => {
            console.log(error)
        })
    }

    return (
        <div style={{ minHeight: "100vh", backgroundColor: "rgb(137,170,237)" }}> 
          <div style={{height:"60px",width:"100%",backgroundColor:"#3e5385", color:"white", textAlign:"center"}}>
                <h1>Add Updates</h1>
             </div>
            <div className='Platform'>
            <form  onSubmit={handlesubmit} style={{ overflow: "hidden", marginLeft: "6px" }} >
                <div>
                <label className="form-label"> Select Task Catagory &nbsp;</label>
                <select onChange={handlechange} name='task'>
                <option>Open this select menu</option>
                        <option value="task1">Task 1</option>
                        <option value="task2">Task 2</option>
                        <option value="task3">Task 3</option>
                        <option value="task4">Task 4</option>
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
                    <br/>
                    <br/>
                <button type='Submit'>Submit</button>
                </div>
            </form>                   
            </div>
        </div>

    )
}

export default Addupdate