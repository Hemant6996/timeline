import React from 'react';
import { MDBFooter } from 'mdb-react-ui-kit';

function Footer() {
  return (
    // <div>
    //         {/* <footer className="border-top footer text-muted" style={{bottom:"0" , position:"fixed" , lineHeight:"60px", backgroundColor:"#261f21",width:"100%",textAlign:'center',whiteSpace:'nowrap'}}>
    //     <div className="container" >
    //        &copy;Website Designed & Developed By: Hemant Kumar 
    //     </div>
    // </footer> */}
    //     </div>


    <MDBFooter bgColor='light' className='text-center text-lg-center'>
      <div className='text-center p-3' style={{ marginTop:"auto",  backgroundColor: 'rgba(0, 0, 0, 0.2)'}}>
        &copy; {new Date().getFullYear()} Copyright:{' '}
        
          Design & Develope By Hemant and Mayank
        
      </div> 
    </MDBFooter>
  )
}

export default Footer