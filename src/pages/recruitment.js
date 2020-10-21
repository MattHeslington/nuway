import React from 'react'
import Layout from '../components/layout'
import SEO from "../components/seo"

import handshake from '../images/handshake.jpeg'

const recruitment = () => {
    return (
        <Layout>
            <SEO title="Recruitment" />
            <div className="flex flex-col px-2 md:flex-row">
            <div className="w-full md:w-2/3">
                <h2 className="text-4xl font-bold leading-tight tracking-tight xl:text-6xl lg:text-5xl md:text-4xl text-nuBlue">Effective Integration For A Better Future</h2>
                <h3 className="text-2xl font-bold tracking-tight text-nuBlue">Recruitment Services</h3>
                <p className="font-serif prose">Our "Specialized Recruiters", offer superior results by attracting talents in time bound constraints across various demographic and domains. In-house training periodically, keep our recruiters updated on the latest trends of respective domains, which gives us an edge in understanding and delivering in record times, which are the biggest challenges in recent times.</p>
            </div>
            <div className="w-full md:w-1/3">
                <div className="w-full overflow-hidden">
                    <img className="object-cover object-center rounded md:h-136 sm:w-full" src={handshake} alt="towers"/>
                </div>
            </div>
        </div>
        </Layout>
    )
}

export default recruitment
