import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import "react-vertical-timeline-component/style.min.css";
import "./Addupdate.css"

function Getupdate() {

    const [update, setUpdate] = useState([])
    const [array, setArray] = useState([])
    const [filter, setFilter] = useState("")
    const [label, setLabel] = useState(true)
    const [mavlabel, setMavlabel] = useState(true)
    const [prdlabel, setPrdlabel] = useState(true)
    const [rdlabel, setRdlabel] = useState(true)
    const [solarlabel, setSolarlabel] = useState(true)

    let Iconstyle = { background: "#06D6A0" }
    // console.log(update,'update')

    const getdata = () => {
        Axios.get(`https://63ea0908811db3d7ef0520ff.mockapi.io/timeline`)
            .then((responce) => {

                responce.data.sort((a, b) => {
                    return new Date(a.edate) > new Date(b.edate) ? 1 : -1
                })

                setUpdate(responce.data)

                //   update.sort((a,b)=>{                
                //      return   new Date(a.edate) > new Date(b.edate) ? 1 : -1 })

            })

            // .then(()=>{

            //      update.sort((a,b)=>{                
            //          return   new Date(a.edate) > new Date(b.edate) ? 1 : -1 })



            // })
            .then(() => {

                // setUpdate(update)
                console.log(update, "update")


            })
    }

    // console.log(update.sort((a,b)=> new Date(a.edate)- new Date(b.edate)), 'updatesort')

    useEffect(() => {
        getdata()
        // console.log(update)
    }, [filter])

    const Handlefilter = (e) => {
        setFilter(e.target.value)
    }

    const handleChange = (e) => {

        if (e.target.checked) {
            setLabel(true)
        }
        else {
            setLabel(false)
        }
    }

    const handlemav = (e) => {

        if (e.target.checked) {
            setMavlabel(true)
        }
        else {
            setMavlabel(false)
        }
    }
    const handleprd = (e) => {

        if (e.target.checked) {
            setPrdlabel(true)
        }
        else {
            setPrdlabel(false)
        }
    }
    
    const handlerd = (e) => {

        if (e.target.checked) {
            setRdlabel(true)
        }
        else {
            setRdlabel(false)
        }
    }
    const handlesolar = (e) => {

        if (e.target.checked) {
            setSolarlabel(true)
        }
        else {
            setSolarlabel(false)
        }
    }
    return (

        <div style={{ minHeight: "10vh", backgroundColor: "#dee2e6" }}>
            <div style={{height:"60px",width:"100%",backgroundColor:"#3e5385", color:"white", textAlign:"center"}}>
            <h1>General Project Timeline</h1>
             </div>
             

            {/* <div>
                <select onChange={Handlefilter}>
                    <option selected>Select Task</option>
                    <option value="MAV">MAV</option>
                    <option value="PRD">PRD</option>
                    <option value="RDplatform">R&D</option>
                    <option value="SolarPannel">Solar Panel</option>
                </select>
            </div> */}
            <h2>Filter</h2>
            <div>
                <label>Description</label>
                <input type='checkbox' name='label' onChange={handleChange} defaultChecked />
            </div>
            <div>
                <label>Task1 Label</label>
                <input type='checkbox' name='labelmav' onChange={handlemav} defaultChecked />
            </div>
            <div>
                <label>Task2 Label</label>
                <input type='checkbox' name='labelmav' onChange={handleprd} defaultChecked />
            </div>
            <div>
                <label>Task3 Label</label>
                <input type='checkbox' name='labelmav' onChange={handlerd} defaultChecked />
            </div>
            <div>
                <label>Task4 Label</label>
                <input type='checkbox' name='labelmav' onChange={handlesolar} defaultChecked />
            </div>

            {
                update ? <>

                    <VerticalTimeline>
                        {                       
                            update.map((item) => {

                                if (item.task === "task1" && mavlabel) {
                                    return (<>
                                        <VerticalTimelineElement
                                            key={item.id}
                                            date={item.edate}
                                            iconStyle={Iconstyle}
                                        // dateClassName='date'
                                        >
                                            {
                                                <h3 className='Verticle-timeline-element-title'>{item.task}</h3> 
                                            }
                                            {
                                                <h3 className='Verticle-timeline-element-title'>{item.title}</h3> 
                                            }
                                            {
                                                label ? <p className='Verticle-timeline-element-title'>{item.description}</p> : null
                                                
                                            }
                                            <h2 className='Verticle-timeline-element-subtitle'>{item.status}</h2>
                                            {/* <p id="description">{item.description}</p> */}
                                        </VerticalTimelineElement>
                                    </>

                                    )
                                }

                                if (item.task === "task2" && prdlabel) {
                                    return (<>
                                        <VerticalTimelineElement
                                            key={item.id}
                                            date={item.edate}
                                            iconStyle={Iconstyle}
                                        // dateClassName='date'
                                        >
                                            {

                                                <h3 className='Verticle-timeline-element-title'>{item.task}</h3> 
                                            }
                                            {
                                                <h3 className='Verticle-timeline-element-title'>{item.title}</h3> 
                                            }
                                            {
                                                label ? <p className='Verticle-timeline-element-title'>{item.description}</p> : null
                                                
                                            }

                                            <h2 className='Verticle-timeline-element-subtitle'>{item.status}</h2>
                                            {/* <p id="description">{item.description}</p> */}
                                        </VerticalTimelineElement>

                                    </>

                                    )
                                }

                                if (item.task === "task3" && rdlabel) {
                                    return (<>
                                        <VerticalTimelineElement
                                            key={item.id}
                                            date={item.edate}
                                            iconStyle={Iconstyle}
                                        // dateClassName='date'
                                        >
                                            {

                                               <h3 className='Verticle-timeline-element-title'>{item.task}</h3> 
                                            }
                                            {
                                                <h3 className='Verticle-timeline-element-title'>{item.title}</h3> 
                                            }
                                            {
                                                label ? <p className='Verticle-timeline-element-title'>{item.description}</p> : null
                                                
                                            }

                                            <h2 className='Verticle-timeline-element-subtitle'>{item.status}</h2>
                                            {/* <p id="description">{item.description}</p> */}
                                        </VerticalTimelineElement>

                                    </>

                                    )
                                }

                                if (item.task === "task4" && solarlabel) {
                                    return (<>
                                        <VerticalTimelineElement
                                            key={item.id}
                                            date={item.edate}
                                            iconStyle={Iconstyle}
                                        // dateClassName='date'
                                        >
                                            {

                                               <h3 className='Verticle-timeline-element-title'>{item.task}</h3> 
                                            }
                                            {
                                                <h3 className='Verticle-timeline-element-title'>{item.title}</h3> 
                                            }
                                            {
                                                label ? <p className='Verticle-timeline-element-title'>{item.description}</p> : null
                                                
                                            }

                                            <h2 className='Verticle-timeline-element-subtitle'>{item.status}</h2>
                                            {/* <p id="description">{item.description}</p> */}
                                        </VerticalTimelineElement>

                                    </>

                                    )
                                }
                            

                                

                                // else {
                                //     return <h1>hiiiii</h1>
                                // }
                            })
                        }
                    </VerticalTimeline>

                </> : "Loading"
            }



        </div>

    )
}

export default Getupdate