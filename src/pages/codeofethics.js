import React from 'react'
import Layout from '../components/layout'
import SEO from "../components/seo"

import towers from '../images/towers.jpeg'

const codeofethics = () => {
    return (
        <Layout>
            <SEO title="Code of Ethics" />
            <div className="flex flex-col px-2 md:flex-row">
            <div className="w-full md:w-2/3">
                <h2 className="text-4xl font-bold leading-tight tracking-tight xl:text-6xl lg:text-5xl md:text-4xl text-nuBlue">Our Values</h2>
                <h3 className="text-2xl font-bold tracking-tight text-nuBlue">Code of Ethics</h3>
                <p className="font-serif prose">Our core values lies in the way we do business, being professional in all aspects including reliability, dependability and maintaining trust and confidentiality, to protect both the parties information. Conducting business with integrity and maintaining the highest possible quality, with no compromise on price has been one of the reasons, why clients give us repeated business.</p>
                <p className="font-serif prose">Each of our consultants and partners are competent and knowledgeable, with a thrust to achieve more by maintaining highest levels of International Standards. We at all times, will avoid conflict of interest with our clients, by not providing the same candidate simultaneously to more than one client and not poaching the placed candidate, as they remain employed with the client organization. We assure commitment of delivering what we promise, with accuracy in targeted times. We will strive to provide highest levels of professional and ethical excellence, adhering to equal opportunities for everyone in terms of age, race and gender.</p>
            </div>
            <div className="w-full md:w-1/3">
                <div className="w-full overflow-hidden">
                    <img className="object-cover object-center rounded md:h-136 sm:w-full" src={towers} alt="towers"/>
                </div>
            </div>
        </div>
        </Layout>
    )
}

export default codeofethics
