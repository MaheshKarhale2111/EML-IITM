import React from 'react'
// import Fade from 'react-reveal/Fade';

export default function TeammateCard(props) {

    const { name, posn, img, vertical } = props.data;

    var bootstrapClass;
    if (posn === "Faculty Advisor") {
        bootstrapClass = "col-12"
    }
    else if (posn === "Student Head") {
        bootstrapClass = "col-md-6"
    }
    else {
        bootstrapClass = "col-md-4"
    }



    return (
        <div className={`${bootstrapClass} image-class d-flex justify-content-center align-items-center`}>
            {/* <Fade top distance = {"20px"} > */}
            <div className="card " data-aos="fade-up" data-aos-offset="100" data-aos-duration="1000">

                {/* {vertical ? <div className="vertical d-flex justify-content-center align-items-center"><h1> {vertical} </h1></div> : <><img src={img} className="img-fluid" alt="" /> */}
                <div className="text">
                    <h3>{name}</h3>
                    <h4>{posn}</h4>
                </div>

            </div>
            {/* </Fade> */}
        </div>
    )
}
