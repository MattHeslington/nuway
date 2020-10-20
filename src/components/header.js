import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

const Header = ({ siteTitle }) => (
  <header className="container mx-auto">
        <div className="flex items-center justify-between">
            <div>
                <Link to="/">
                    <h1>Logo</h1>
                </Link>
            </div>
            <div>
                <ul className="flex space-x-4">
                    <li className=""><Link to="/executivesearch">Executive Search</Link></li>
                    <li className=""><Link to="/recruitment">Recruitment</Link></li>
                    <li className=""><Link to="/contractstaffing">Contract Staffing</Link></li>
                    <li>
                        <button>
                            Apply Now
                        </button>
                    </li>
                </ul>
            </div>
        </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
