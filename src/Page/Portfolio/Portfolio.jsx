import React from 'react'
import P_Header from '../../components/P_Header/P_Header.jsx'
import Card1 from '../../components/Card1/Card1.jsx'
import Card2 from '../../components/Card2/Card2.jsx'
import Card3 from '../../components/Card3/Card3.jsx'
export default function Portfolio() {
  return (
    <>
        <div className='mb-4' style={{marginTop: "92px"}}>
            <P_Header/>
            <div className="container">
  <div className="row g-4">
    <div className="col-12 col-md-6 col-lg-4">
      <Card1 />
    </div>

    <div className="col-12 col-md-6 col-lg-4">
      <Card2 />
    </div>

    <div className="col-12 col-md-6 col-lg-4">
      <Card3 />
    </div>

    <div className="col-12 col-md-6 col-lg-4">
      <Card1 />
    </div>

    <div className="col-12 col-md-6 col-lg-4">
      <Card2 />
    </div>

    <div className="col-12 col-md-6 col-lg-4">
      <Card3 />
    </div>
  </div>
</div>

        </div>
    </>
  )
}
