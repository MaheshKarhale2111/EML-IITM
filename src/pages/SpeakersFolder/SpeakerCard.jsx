import React from 'react'

export default function SpeakerCard(props) {

    // console.log(props.data);
    const {img,name,lectureTitle,desc,youtubeLink} = props.data;
    return (
        <div className="col-lg-6 order-md-1 image-class">
            <div className="card">
                <div className="d-flex justify-content-center align-items-center">
                    <img src={img} className="img-fluid" alt="" />
                </div>
                <div className="text">
                    <h1>{name}</h1>
                    <h4>{lectureTitle}</h4>
                    <p>{desc}</p>

                    {youtubeLink && <button className="btn btn-lg main-btn"><a href={youtubeLink} target="_blank" rel="noopener noreferrer"> Watch Video</a></button>}
                </div>
            </div>
        </div>
    )
}
