import React from 'react'
import Layout from '../components/layout'
import SEO from "../components/seo"

import man from '../images/man.jpeg'

const searchmethodology = () => {
    return (
        <Layout>
            <SEO title="Search Methodology" />
            <div className="flex flex-col px-2 md:flex-row">
            <div className="w-full md:w-2/3">
                <h2 className="text-4xl font-bold leading-tight tracking-tight xl:text-6xl lg:text-5xl md:text-4xl text-nuBlue">Search Redefined</h2>
                <h3 className="text-2xl font-bold tracking-tight text-nuBlue">Our Search Methodology involves a 10-step process</h3>
                <h4 className="mt-2 font-serif text-2xl font-bold text-nuBlue">Understanding the Client</h4>
                <p className="font-serif text-nuBlue">Outline the search assignment, timelines, organization culture & structure</p>
                <h4 className="mt-2 font-serif text-2xl font-bold text-nuBlue">Detailed Client Analysis</h4>
                <p className="font-serif text-nuBlue">Define candidate profile, job title, mapping position with KRAs</p>
                <h4 className="mt-2 font-serif text-2xl font-bold text-nuBlue">Market Analysis</h4>
                <p className="font-serif text-nuBlue">Research team deployed to conduct market analysis to create candidate specifications.</p>
                <h4 className="mt-2 font-serif text-2xl font-bold text-nuBlue">Search Plan</h4>
                <p className="font-serif text-nuBlue">Explore search strategies to research on target companies.</p>
                <h4 className="mt-2 font-serif text-2xl font-bold text-nuBlue">Target Mapping</h4>
                <p className="font-serif text-nuBlue">Target potential candidates.</p>
                <h4 className="mt-2 font-serif text-2xl font-bold text-nuBlue">Shortlisted Candidates</h4>
                <p className="font-serif text-nuBlue">Approach, qualify and Interview shortlisted Candidates in detail on competencies, interest and career mapping.</p>
                <h4 className="mt-2 font-serif text-2xl font-bold text-nuBlue">Background Check and Shortlisting</h4>
                <p className="font-serif text-nuBlue">Check to verify crucial parameters and present the shortlist to Client.</p>
                <h4 className="mt-2 font-serif text-2xl font-bold text-nuBlue">Final Shortlist and Assessments</h4>
                <p className="font-serif text-nuBlue">Work Closely with the clients on the Final Shortlist and Assessment Centre to evaluate Strengths, Weakness through Role Plays.</p>
                <h4 className="mt-2 font-serif text-2xl font-bold text-nuBlue">Offer</h4>
                <p className="font-serif text-nuBlue">Negotiate to strike a balance between the Client and Preferred candidate.</p>
                <h4 className="mt-2 font-serif text-2xl font-bold text-nuBlue">On-board</h4>
                <p className="font-serif text-nuBlue">Follow Up and Assist in successful On boarding and natural integration with the client company.</p>

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

export default searchmethodology
