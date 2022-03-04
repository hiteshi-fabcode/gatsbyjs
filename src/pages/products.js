import React from 'react';
import { useStaticQuery, graphql} from 'gatsby';
import HeaderLayout from "./headerlayout"
import { GatsbyImage } from 'gatsby-plugin-image';


const Products = () => {

    const data = useStaticQuery(graphql`
    query {
        allShopifyProduct {
          edges {
            node {
              id
              handle
              images {
                gatsbyImageData
              }
            }
          }
        }
      }
`)
      console.log("data:: ", data);
      const image = data.allShopifyProduct.edges[0].node.images[0].gatsbyImageData;
    return(
        <HeaderLayout pageTitle='Products'>
            <GatsbyImage image={image} alt='test' />
        </HeaderLayout>
    )
}

export default Products;