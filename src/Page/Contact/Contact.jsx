import React from "react";
export default function Contact() {
  return (
    <>
      <div style={{ marginTop: "92px", minHeight: "calc(-112px + 100vh)" }}>
        
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

        <div
          className="mx-auto p-3 "
          style={{
            marginTop: "92px",
            width: "50%",
            maxWidth: "680px",
            minWidth: "300px",
          }}
        >
          <input
            id="userName"
            name="userName"
            placeholder="userName"
            type="text"
            className="form-control border-0 border-bottom py-3 mb-4 rounded"
            style={{ background: "transparent" }}
          />

          <input
            id="userAge"
            name="userAge"
            placeholder="userAge"
            type="text"
            className="form-control border-0 border-bottom py-3 mb-4 rounded"
            style={{ background: "transparent" }}
          />

          <input
            id="userEmail"
            name="userEmail"
            placeholder="userEmail"
            type="email"
            className="form-control border-0 border-bottom py-3 mb-4 rounded"
            style={{ background: "transparent" }}
          />

          <input
            id="userPassword"
            name="userPassword"
            placeholder="userPassword"
            type="password"
            className="form-control border-0 border-bottom py-3 mb-3 rounded"
            style={{ background: "transparent" }}
          />

          <button
            className="btn text-white mt-2 px-4 py-2 rounded"
            style={{
              backgroundColor: "#1abc9c",
              boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
            }}
          >
            send Message
          </button>
        </div>
      </div>
    </>
  );
}
