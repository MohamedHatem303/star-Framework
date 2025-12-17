import React from 'react'

export default function Footre() {
  return (
    <>
      <div
        className="text-white"
        style={{ backgroundColor: '#2c3e50', padding: '100px 0 40px 0' }}
      >
        <div className="container">
          <div className="row text-center">

            <div className="col-md-4 mb-4">
              <h4 className="fw-bold mb-3">LOCATION</h4>
              <p className="mb-1">2215 John Daniel Drive</p>
              <p>Clark, MO 65243</p>
            </div>

            <div className="col-md-4 mb-4">
              <h4 className="fw-bold mb-3">AROUND THE WEB</h4>
              <div className="d-flex justify-content-center gap-3">

                <span
                  style={{
                    width: '30px',
                    height: '30px',
                    border: '1px solid white',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                  }}
                >
                  <i className="fa-brands fa-facebook-f"></i>
                </span>

                <span
                  style={{
                    width: '30px',
                    height: '30px',
                    border: '1px solid white',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                  }}
                >
                  <i className="fa-brands fa-twitter"></i>
                </span>

                <span
                  style={{
                    width: '30px',
                    height: '30px',
                    border: '1px solid white',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                  }}
                >
                  <i className="fa-brands fa-linkedin-in"></i>
                </span>

                <span
                  style={{
                    width: '30px',
                    height: '30px',
                    border: '1px solid white',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                  }}
                >
                  <i className="fa-solid fa-globe"></i>
                </span>

              </div>
            </div>

            <div className="col-md-4 mb-4">
              <h4 className="fw-bold mb-3">ABOUT FREELANCER</h4>
              <p>
                Freelance is a free to use, licensed Bootstrap theme created by Route
              </p>
            </div>

          </div>
        </div>
      </div>

      <div
        style={{
          backgroundColor: '#1a252f',
          color: 'white',
          textAlign: 'center',
          padding: '15px 0',
        }}
      >
        <p className="mb-0">Copyright © Your Website 2021</p>
      </div>
    </>
  )
}
