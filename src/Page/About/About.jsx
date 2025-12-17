import React from 'react'

export default function About() {
  return (
    <>
        <section
      className="d-flex justify-content-center align-items-center text-white mt-5"
      style={{
        backgroundColor: "#1abc9c",
        padding: "160px 0",
      }}
    >
      <div style={{ width: "100%" }}>
        <div className="text-center">
          <h2
            className="text-uppercase fw-bolder"
            style={{
              fontSize: "2.5rem",
              letterSpacing: "2px",
              marginBottom: "15px",
            }}
          >
            about component
          </h2>

          <div
            className="d-flex justify-content-center align-items-center"
            style={{ marginBottom: "35px" }}
          >
            <div
              style={{
                width: "80px",
                height: "4px",
                backgroundColor: "#fff",
                borderRadius: "2px",
                marginRight: "15px",
              }}
            ></div>

            <i
              className="fa-solid fa-star"
              style={{ fontSize: "18px" }}
            ></i>

            <div
              style={{
                width: "80px",
                height: "4px",
                backgroundColor: "#fff",
                borderRadius: "2px",
                marginLeft: "15px",
              }}
            ></div>
          </div>
        </div>

        <div className="container">
          <div className="row px-5">
            <div className="col-md-6 ps-md-5">
              <p
                style={{
                  fontSize: "15px",
                  lineHeight: "1.8",
                  color: "rgba(255,255,255,0.95)",
                }}
              >
                Freelancer is a free bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.
              </p>
            </div>

            <div className="col-md-6 pe-5">
              <p
                style={{
                  fontSize: "15px",
                  lineHeight: "1.8",
                  color: "rgba(255,255,255,0.95)",
                }}
              >
                Freelancer is a free bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}
