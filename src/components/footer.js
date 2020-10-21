import React from 'react'
import { Link } from "gatsby"

const footer = () => {
    return (
        <div className="py-12 bg-nuBlue">
            <div className="container flex flex-col items-start justify-between mx-auto md:flex-row">
                <div className="w-full md:w-2/4">
                    <h3 className="text-xl font-bold text-gray-300">Market Segments</h3>
                    <div className="flex">
                        <div>
                            <ul className="mt-4 space-y-2 text-sm text-gray-500">
                                <li>Information Technology and Communication</li>
                                <li>Banking & Financial Services</li>
                                <li>Life Sciences & Pharmaceutical</li>
                                <li>Industrial, Engineering & Aerospace</li>
                                <li>Process Automation</li>
                                <li>Manufacturing</li>
                            </ul>
                        </div>
                        <div className="pl-8">
                            <ul className="mt-4 space-y-2 text-sm text-gray-500">
                                <li>Consumer & FMCG</li>
                                <li>Oil, Energy & Mining</li>
                                <li>Ports, Logistic & Supply Chain</li>
                                <li>Legal Services</li>
                                <li>Insurance</li>
                                <li>Commodities</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="w-full mt-6 md:w-1/4 md:mt-0">
                    <h3 className="text-xl font-bold text-gray-300">Business Verticals</h3>
                    <ul className="mt-4 space-y-2 text-sm text-gray-500">
                        <li><Link className="hover:text-white" to="/executivesearch">Executive Search</Link></li>
                        <li><Link className="hover:text-white"to="/recruitment">Recruitment</Link></li>
                        <li><Link className="hover:text-white"to="/contractstaffing">Contract Staffing</Link></li>
                    </ul>
                </div>

                <div className="w-full mt-6 md:w-1/4 md:mt-0">
                    <h3 className="text-xl font-bold text-gray-300">Links</h3>
                    <ul className="mt-4 space-y-2 text-sm text-gray-500">
                        <li><Link className="hover:text-white"to="/codeofethics">Code of Ethics</Link></li>
                        <li><Link className="hover:text-white"to="/searchmethodology">Search Methodology</Link></li>
                        <li><Link className="hover:text-white"to="/contact">Contact Us</Link></li>
                        <li><Link className="hover:text-white"to="/apply">Apply</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default footer
