import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import HeaderLayout from './headerlayout';

import * as style from '../styles/header.module.css';

const BlogPage = ({data}) => {
    return(
        <HeaderLayout pageTitle='Blog'>
            {
                data.allMdx.nodes.map((node, i) => (
                    <article key={i} className={style.blogdata}>
                        <h2>{node.frontmatter.title}</h2>
                        <p>Posted: {node.frontmatter.date}</p>
                        <MDXRenderer>
                            {node.body}
                        </MDXRenderer>
                    </article>
                ))
            }
        </HeaderLayout>
    )
}

export const query = graphql`
query {
    allMdx(sort: {fields: frontmatter___date, order: DESC}) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
        }
        id
        body
      }
    }
  }
`

export default BlogPage;