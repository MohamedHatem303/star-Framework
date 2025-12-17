import React from 'react'
import avataaars from '../../assets/avataaars.svg';
export default function Home() {
  return (
    <>
        <div className='d-flex justify-content-center align-items-center text-white p-5 mt-5 ' style={{backgroundColor: '#1abc9c'}}>
            <div className='text-center'>
                <img  src={avataaars} className='mb-3' style={{width:'250px'}}/>
                <div className='text-center pt-4 text-white'>
                  <h2 className='text-uppercase mb-3 fs-1 fw-bolder'>start Framework</h2>
                  <div className='d-flex align-items-center justify-content-center mb-3'>
                    <div className=' me-3 bg-white'style={{height: '4px',width: '80px',}}></div>
                    <i className="fa-solid fa-star"></i>
                    <div className=' ms-3 bg-white'style={{height: '4px',width: '80px',}}></div>
                  </div>
                </div>
                <div className='fs-5'>Graphic Artist - Web Designer - Illustrator</div>
            </div>
        </div>
    </>
  )
}
