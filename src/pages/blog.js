import React from 'react';
import { graphql } from 'gatsby';

import HeaderLayout from './headerlayout';

const BlogPage = ({data}) => {
    return(
        <HeaderLayout pageTitle='Blog'>
            {
                data.allFile.nodes.map(node => (
                    <li key={node.name}>
                        {node.name}
                    </li>
                ))
            }
        </HeaderLayout>
    )
}

export const query = graphql`
    query {
        allFile {
            nodes {
                name
            }
        }
    }  
`

export default BlogPage;