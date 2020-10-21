import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import logo from "../images/logo.jpg"
import Arrow from "./icons/arrow"
import Cap from "./icons/cap"
import Briefcase from "./icons/briefcase"
import Users from "./icons/users"


const Header = ({ siteTitle }) => (
  <header className="container mx-auto">
        <div className="flex items-center justify-between px-2 my-2">
            <div class="">
                <Link to="/">
                    <img className="h-16" src={logo} alt="Logo" />
                </Link>
            </div>
            <div>
                <ul className="items-center hidden space-x-4 font-thin md:flex">
                    <li><Link to="/executivesearch" className="flex items-center px-3 py-2 duration-300 rounded hover:bg-blue-700 hover:text-white"><Cap/><span>Executive Search</span></Link></li>
                    <li><Link to="/recruitment" className="flex items-center px-3 py-2 duration-300 rounded hover:bg-blue-700 hover:text-white"><Briefcase/>Recruitment</Link></li>
                    <li><Link to="/contractstaffing" className="flex items-center px-3 py-2 duration-300 rounded hover:bg-blue-700 hover:text-white"><Users/>Contract Staffing</Link></li>
                    <li>
                        <button className="flex items-center px-3 py-2 text-white rounded bg-nuBlue">
                            <span className="mr-1">Apply Now</span>
                            <Arrow/>
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
