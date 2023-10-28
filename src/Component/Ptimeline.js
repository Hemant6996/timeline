import { green } from '@material-ui/core/colors'
import Axios from 'axios'
import React, { useEffect, useState } from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'

function Ptimeline() {

    let Iconstyle = { background:green }
    const [pdata, setPdata] = useState([])
    const [labelf1, setLabelf1] = useState(true)
    const [labelf2, setLabelf2] = useState(true)
    const [labelf3, setLabelf3] = useState(true)

    const Getupdate = ()=>{
        Axios.get("https://63ea0908811db3d7ef0520ff.mockapi.io/Ptimeline")
        .then((responce)=> { 
            responce.data.sort((a, b) => {
                return new Date(a.date) > new Date(b.date) ? 1 : -1
            })

            setPdata(responce.data)
        })
    }
     useEffect(()=>{
        Getupdate()
     },[])

     const handlelabel1 = (e)=>{       
        if (e.target.checked) {
            setLabelf1(true)
        }
        else {
            setLabelf1(false)
        }
     }

     const handlelabel2 = (e)=>{       
        if (e.target.checked) {
            setLabelf2(true)
        }
        else {
            setLabelf2(false)
        }
     }

     const handlelabel3 = (e)=>{       
        if (e.target.checked) {
            setLabelf3(true)
        }
        else {
            setLabelf3(false)
        }
     }
     

  return (
    <div style={{ minHeight: "10vh", backgroundColor: "rgb(137,170,237)" }}>
        <div>
        <h2>Filter</h2>
            <div>
                <label>Label1</label>
                <input type='checkbox' name='label' onChange={handlelabel1} defaultChecked />
            </div>
            <div>
                <label>Label2</label>
                <input type='checkbox' name='label' onChange={handlelabel2} defaultChecked />
            </div>
            <div>
                <label>Label3</label>
                <input type='checkbox' name='label' onChange={handlelabel3} defaultChecked />
            </div>
        </div>
      {
      pdata ?  <VerticalTimeline>
        {
            pdata.map((item)=>{

                if(item.label == "Label1" && labelf1){
                    return(<>
                          <VerticalTimelineElement
                          key={item.id}
                          date={item.date}
                          iconStyle={Iconstyle}
                          >
                          
                          <h3 className='Verticle-timeline-element-title'>{item.title}</h3>
                          <h3 className='Verticle-timeline-element-subtitle'>{item.description}</h3>
                </VerticalTimelineElement>
                    </>)
                }

                if(item.label == "Label2" && labelf2){
                    return(<>
                          <VerticalTimelineElement
                          key={item.id}
                          date={item.date}
                          iconStyle={Iconstyle}
                          >
                          
                          <h3 className='Verticle-timeline-element-title'>{item.title}</h3>
                          <h3 className='Verticle-timeline-element-subtitle'>{item.description}</h3>
                </VerticalTimelineElement>
                    </>)
                }

                if(item.label == "Label3" && labelf3){
                    return(<>
                          <VerticalTimelineElement
                          key={item.id}
                          date={item.date}
                          iconStyle={Iconstyle}
                          >
                          
                          <h3 className='Verticle-timeline-element-title'>{item.title}</h3>
                          <h3 className='Verticle-timeline-element-subtitle'>{item.description}</h3>
                </VerticalTimelineElement>
                    </>)
                }
                  
                
                
            })
        }
        </VerticalTimeline> : "Loading"
}
        
    </div>
  )
}

export default Ptimeline