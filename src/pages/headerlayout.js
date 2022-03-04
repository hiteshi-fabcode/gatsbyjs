import React from 'react';
import { Link } from 'gatsby';
import { useStaticQuery, graphql} from 'gatsby';

import * as style from '../styles/header.module.css';


const HeaderLayout = ({pageTitle, children}) => {

    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)
    // console.log(data);
    return(
        <div className={style.container}>
            
            <title>{data.site.siteMetadata.title} | {pageTitle}</title>
            <div className={style.header}>
                <h2 className={style.logo}>My Shop</h2>
                <div>
                    <Link to='/' className={style.navtitle}>Home</Link>
                    <Link to='/about' className={style.navtitle}>About</Link>
                    <Link to='/blog' className={style.navtitle}>Blog</Link>
                    <Link to='/products' className={style.navtitle}>Products</Link>
                </div>

            </div>
            <main className={style.pagelayout}>
                <h1>{pageTitle}</h1>
                {children}
            </main>
        </div>
    )
}
export default HeaderLayout;