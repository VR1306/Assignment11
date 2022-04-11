import React from 'react'
import "../App.css"
const Card = ({data}) => {
  return (
    <div>
  <div className='row'>
             <div className='col-sm-8 col-md-5'><img src={data.img} width='100%' height='200' /></div>

              <div  className='col-md-6'>
                  <div>
                    <div className='Content'>
                    <div className='d-flex justify-content-between'>
                      <div className='text-capitalize titles'>{data.title}</div>
                      <div className='colors'> ${data.price}</div>
                    
                     </div>
                      </div>
                      <hr/>
                  <div className='txt mt-4 justify-content-center text-capitalize'>{data.desc}</div>
</div>
                  </div>
                  </div>       
       </div>
  )
}

export default Card