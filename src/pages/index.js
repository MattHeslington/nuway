import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import towers from '../images/towers.jpeg'

const IndexPage = () => (
    <Layout>
        <SEO title="Home" />
        <div className="flex flex-col px-2 md:flex-row">
            <div className="w-full md:w-2/3">
                <h2 className="text-4xl font-bold leading-tight tracking-tight xl:text-6xl lg:text-5xl md:text-4xl text-nuBlue">Inspiring Outstanding Talents for Better Oportunities</h2>
                <p className="mt-2 font-serif prose">Businesses are about people and practices. Changing means, adapting to better people and practices. Every change brings in a search for new people and newer possibilities.</p>
                <p className="font-serif prose">NUWAY CFR is a boutique executive search firm bringing unparalleled insights into Asian markets, head-quartered out of Singapore. With decades of experience in the financial services, banking and IT industries, and a distinctive focus on the Asian market, NUWAY CFR is uniquely positioned to identify and place the region’s most sought-after executives with your organization. We serve clients from all sectors, innovative start ups, family owned companies, global MNC, local corporations and non-profit organizations.</p>
                <p className="font-serif prose">At NUWAY CFR, we create harmonious solutions for everybody based on the specialized understanding of : Clients Needs, Professionals Skill Set, Technical Domain & Talent Base available in the industry.</p>
            </div>
            <div className="w-full md:w-1/3">
                <div className="w-full overflow-hidden">
                    <img className="object-cover object-center rounded md:h-136 sm:w-full" src={towers} alt="towers"/>
                </div>
            </div>
        </div>
    </Layout>
)

export default IndexPage
