import React from 'react'
import "./speakers.css"
import SpeakerCard from './SpeakerCard';
import SpeakerData from "./SpeakerData"
import Footer from "../../components/Footer/Footer"

export default function SpeakersMain() {
    return (
        <> <section className="speakers">
            <h1 className='text-center'>Our Past Speakers</h1>
            <div className="big-wrapper ">
                <div className="wrapper ">
                    <div className="speaker-container">
                        <div className="row">
                            {SpeakerData.map((e) => <SpeakerCard data={e} key={e.id} />)}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </section >
        </>
    )
}

