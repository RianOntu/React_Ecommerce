import React from 'react'
import { NavLink } from 'react-router-dom'

function ActiveLinkOne({to,children}) {
    return (
        <NavLink to={to} className={({isActive})=>isActive?"active1":""}>
        {children}
       </NavLink>
    )
}

export default ActiveLinkOne
