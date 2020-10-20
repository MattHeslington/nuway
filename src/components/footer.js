import React from 'react'
import { Link } from "gatsby"

const footer = () => {
    return (
        <div>
            <div className="container flex items-start justify-between mx-auto">
                <div className="w-2/4">
                    <h3>Market Segments</h3>
                    <div className="flex">
                        <div>
                            <ul>
                                <li>Information Technology and Communication</li>
                                <li>Banking & Financial Services</li>
                                <li>Life Sciences & Pharmaceutical</li>
                                <li>Industrial, Engineering & Aerospace</li>
                                <li>Process Automation</li>
                                <li>Manufacturing</li>
                            </ul>
                        </div>
                        <div>
                            <ul>
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

                <div className="w-1/4">
                    <h3>Business Verticals</h3>
                    <ul>
                        <li><Link to="/executivesearch">Executive Search</Link></li>
                        <li><Link to="/recruitment">Recruitment</Link></li>
                        <li><Link to="/contractstaffing">Contract Staffing</Link></li>
                    </ul>
                </div>

                <div className="w-1/4">
                    <h3>Contact Us</h3>
                </div>
            </div>
        </div>
    )
}

export default footer
