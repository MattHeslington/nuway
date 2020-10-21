import React from 'react'
import Layout from '../components/layout'
import SEO from "../components/seo"

import suit from '../images/suit.jpeg'

const executivesearch = () => {
    return (
        <Layout>
            <SEO title="Executive Search" />
            <div className="flex flex-col px-2 md:flex-row">
            <div className="w-full md:w-2/3">
                <h2 className="text-4xl font-bold leading-tight tracking-tight xl:text-6xl lg:text-5xl md:text-4xl text-nuBlue">We Build Teams</h2>
                <h3 className="text-2xl font-bold tracking-tight text-nuBlue">Executive Search</h3>
                <p className="mt-2 font-serif prose">We specialize in building teams for our clients in varied domains. Our partners typically possess wide range of personal contacts and industry experience. Our strength lies in our research, which forms the backbone for any retained search assignment. We differentiate ourselves, by building trust and confidence based upon personal relationships, both with the clients as well as professionals. Our belief is values based on Respect, Reliability, Global Standards and Commitment for delivering, what we promise.</p>
            </div>
            <div className="w-full md:w-1/3">
                <div className="w-full overflow-hidden">
                    <img className="object-cover object-center rounded md:h-136 sm:w-full" src={suit} alt="towers"/>
                </div>
            </div>
        </div>
        </Layout>
    )
}

export default executivesearch
