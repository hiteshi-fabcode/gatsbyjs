import * as React from "react"
import {StaticImage} from 'gatsby-plugin-image'
import HeaderLayout from "./headerlayout"

import {homebg} from '../components/header.module.css';


const IndexPage = () => {
  return (
    <HeaderLayout pageTitle='Home' className={homebg}>
      <p>Nice try!</p>
      <StaticImage
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        src="https://pbs.twimg.com/media/E1oMV3QVgAIr1NT?format=jpg&name=large"
      />
    </HeaderLayout>
  )
}

export default IndexPage