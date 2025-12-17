import React from 'react'
import Poert2 from '../../assets/img/Port2.png'

export default function Card2() {
  return (
    <div className="plus w-100  "style={{ maxWidth: "98%" }}>
      <div
        type="button"
        className="w-100 position-relative"
        data-bs-toggle="modal"
        data-bs-target="#modal2"
      >
        <div className="layer">
          <div
            className="position-absolute text-white z-3 top-50 start-50"
            style={{ transform: "translate(-50%, -60%)", fontSize: "150px" }}
          >
            +
          </div>
          <div className=" w-100 h-100 position-absolute z-2 opacity-75 rounded-3"style={{backgroundColor:'#29b197'}}></div>
        </div>

        <img src={Poert2} className="w-100 rounded-3" />
      </div>

      <div className="modal fade" id="modal2" tabIndex={-1}>
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body p-0">
              <img src={Poert2} className="w-100" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
