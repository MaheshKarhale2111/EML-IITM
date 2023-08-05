import React from 'react'
import "./team.css"
import TeammateCard from './TeammateCard'
import TeammateData from './TeammateData'
import Footer from '../../components/Footer/Footer'


export default function TeamMain() {
    return (
        <>
            <section id="team">
                <div className="title">
                    <h1 className='text-center'>Team 2023-24 </h1>
                </div>
                <div className="container">
                <div className="row">
                    {TeammateData.map((e) => <TeammateCard data={e} key={e.id} />)}
                </div>
                </div>   
            <Footer />
            </section>
        </>
    )
}
