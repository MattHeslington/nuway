import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer"

const Layout = ({ children }) => {
    const data = useStaticQuery(graphql`
        query SiteTitleQuery {
        site {
            siteMetadata {
            title
            }
        }
        }
    `)

    return (
        <div className="flex flex-col justify-between min-h-screen">
            <div>
                <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
                <div className="container mx-auto my-12">
                    <main>{children}</main>

                </div>
            </div>
            <Footer/>
        </div>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout
