import React from 'react'

export default function portfolio() {
  return (
    <>
      <div className="text-center pt-3">
          <h2
            className="text-uppercase mb-3 fw-bolder fs-1"
            style={{
              color: "#2c3e50",
              letterSpacing: "1px",
            }}
          >
            conatct section
          </h2>

          <div className="d-flex align-items-center justify-content-center mb-4">
            <div
              className="me-3"
              style={{ width: "110px", height: "3px", backgroundColor: "#2c3e50" }}
            ></div>

            <i
              className="fa-solid fa-star"
              style={{ color: "#2c3e50", fontSize: "18px" }}
            ></i>

            <div
              className="ms-3"
              style={{ width: "110px", height: "3px", backgroundColor: "#2c3e50" }}
            ></div>
          </div>
        </div>
    </>
  )
}
