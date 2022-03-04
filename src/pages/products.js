import React,{useState} from "react";
import { graphql, useStaticQuery } from "gatsby";
import * as style from '../components/Product.module.css';

const Products = () => {


    const data = useStaticQuery(graphql`
        query MyQuery {
            allShopifyProduct(limit: 10) {
            edges {
                node {
                id
                images {
                    gatsbyImageData
                }
                title
                description
                }
            }
            }
        }
        
  `)

    return (
        <div className={style.container}>
            {
                data.allShopifyProduct.edges.map((nod, i) => (
                    <div key={i} className={style.cardlayout}>
                        <img src={nod.node.images.gatsbyImageData} alt="my_image" className={style.productimage}/>
                        <div className={style.desc}>
                            <h2 className={style.title}>{nod.node.title}</h2>
                            <p>{nod.node.description}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

// export const query = graphql`
// query {
//     allShopifyProduct(limit: 10) {
//         edges {
//           node {
//             id
//             images {
//               originalSrc
//             }
//             title
//             description
//             handle
//           }
//         }
//     }
//   }
// `


export default Products;