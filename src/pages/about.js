import * as React from "react";
import HeaderLayout from "./headerlayout"
import {aboutbg} from '../styles/header.module.css';


const AboutPage = () => {
  return (
    <HeaderLayout pageTitle='About' className={aboutbg}>
      <p>Nice try again!</p>
    </HeaderLayout>
  )
}

export default AboutPage;