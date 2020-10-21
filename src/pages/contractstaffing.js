import React from 'react'
import Layout from '../components/layout'
import SEO from "../components/seo"

import man from '../images/man.jpeg'

const contractstaffing = () => {
    return (
        <Layout>
            <SEO title="Contract Staffing" />
            <div className="flex flex-col px-2 md:flex-row">
            <div className="w-full md:w-2/3">
                <h2 className="text-4xl font-bold leading-tight tracking-tight xl:text-6xl lg:text-5xl md:text-4xl text-nuBlue">Contract to Hire</h2>
                <h3 className="text-2xl font-bold tracking-tight text-nuBlue">Staffing &#40;Temp / Contract&#41;</h3>
                <p className="font-serif prose">Staff on " Just in Time " basis, across various skills, roles, functions is of our extended services, we offer to our clients. "Contract-to-Hire" (CTH), a new format, has reduced hiring time delays, thus improving performance and productivity of clients by 20%. Temp Staffing is a small internal shift in the recruitment process to enhance performance metrics. Our Teams are well trained for "JIT" speedy hiring and calculated negotiations, as they form crucial parameters for successful delivery.</p>
            </div>
            <div className="w-full md:w-1/3">
                <div className="w-full overflow-hidden">
                    <img className="object-cover object-center rounded md:h-136 sm:w-full" src={man} alt="towers"/>
                </div>
            </div>
        </div>
        </Layout>
    )
}

export default contractstaffing
