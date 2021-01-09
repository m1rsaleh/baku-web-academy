import React from 'react'


const Helpers = (props) => {
    return (
        <>
        <div id="header" className="">
        <div className="container-fluid">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  <h1 style={{
                    color: "black",
                    fontSize: ""
                }}>
                    Amil Abdullazadeh 
                  </h1>
                  <p style={{fontSize:"30px"}} className="my-4" >BAKU WEB ACADEMY CEO / FOUNDER</p>
                  <h2 className="my-5">
                   Hey. I am a full stack Web,Mobile apilication Developer and Web Designer.
                  </h2>
                  <div className="mt-3">
                    <a href="https://www.instagram.com/b_w_academy/" className="btn btn-dark">{props.btn}</a>
                  </div>
                </div>
                <div className="col-lg-6 order-1 order-lg-2 header-img img">
                  <img src={props.imgSrc} alt="Helper img" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> 
        </>
    )
}

export default Helpers
