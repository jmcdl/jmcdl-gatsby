import SectionBase from "./section-base"
import React from "react"
import { createUseStyles } from "react-jss"
import { SectionStyles } from "../../jss/components/content/section-styles"
import SectionSubheader from "./section-subheader"

const useStyles = createUseStyles(SectionStyles)

function EducationSection() {
  const classes = useStyles()

  return (
    <SectionBase title="Education">
      <div>
        <SectionSubheader
          title="Honours Degree of Bachelor of Economics (First Class)"
          company="University of Adelaide"
          location="Adelaide"
          dateText="2015"
          link="https://www.adelaide.edu.au/"
        />
        <ul>
          <li>
            Utilised a large longitudinal data set to look at the evidence for
            the effectiveness of three government policies to incentivise the
            purchase of private health insurance.
          </li>
        </ul>
        <SectionSubheader
          title="Bachelor of Economics"
          company="University of Adelaide"
          location="Adelaide"
          dateText="2009 - 2014"
          link="https://www.adelaide.edu.au/"
        />
        <ul>
          <li>Distinction average.</li>
          <li>
            Certificate of Excellence for Advanced Mathematical Economics III,
            2014
          </li>
          <li>SA Water Undergraduate Scholarship in Economics, 2009</li>
          <li>
            Academic exchange at{" "}
            <a
              className={classes.linkStyle}
              href="https://www.eafit.edu.co/international/eng/Paginas/eng.aspx"
              target="_blank"
              rel="noopener noreferrer"
            >
              EAFIT University
            </a>{" "}
            (Medellin, Colombia) through 2011. All courses in Spanish for credit
            towards Bachelor of Economics
          </li>
        </ul>
      </div>
    </SectionBase>
  )
}

export default EducationSection
