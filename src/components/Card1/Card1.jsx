import React from 'react'
import poert1 from '../../assets/img/Poert1.png'
export default function Card1() {
  return (
    <>
    <div className='plus w-100  'style={{ maxWidth: "98%" }}>
        <div type="button" className="w-100 position-relative" data-bs-toggle="modal" data-bs-target="#exampleModal">
            <div className='layer'>
                <div className='position-absolute text-white z-3 top-50 start-50' style={{transform: "translate(-50%, -60%)",fontSize:'150px'}}>+</div>
                <div className='w-100 h-100 position-absolute z-2 opacity-75 rounded-3'style={{backgroundColor:'#29b197'}}></div>
            </div>
            <img src={poert1} className='w-100 rounded-3'></img>
        </div>
        
        
        <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered my-0 mx-auto">
                <div className="modal-content">
                    <div className="modal-body p-0 ">
                        <img src={poert1} className='w-100'/>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
