import React from 'react';
import { Link } from 'gatsby';
import {header,
        navtitle,
        pagelayout
    } from '../components/header.module.css';


const HeaderLayout = ({pageTitle, children, className}) => {
    return(
        <div className={className}>
            <title>{pageTitle}</title>
            <div className={header}>
                <Link to='/' className={navtitle}>Home</Link>
                <Link to='/about' className={navtitle}>About</Link>
            </div>
            <main className={pagelayout}>
                <h1>{pageTitle}</h1>
                {children}
            </main>
        </div>
    )
}
export default HeaderLayout;