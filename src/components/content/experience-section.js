import SectionBase from "./section-base"
import React from "react"
import { createUseStyles } from "react-jss"
import { SectionStyles } from "../../jss/components/content/section-styles"
import SectionSubheader from "./section-subheader"

const useStyles = createUseStyles(SectionStyles)

function ExperienceSection() {
  const classes = useStyles()

  return (
    <SectionBase title="Experience">
      <div>
        <SectionSubheader
          title="Developer / Manager"
          company="TailorSoft"
          description="TailorSoft is a medium size software development company based in Colombia, working primarily with clients from the United States. Following are some of the projects I've worked on and related achievements."
          location="Medellin (Colombia)"
          dateText="October 2018 - present (currently full-time remote)"
          link="https://www.tailorsoft.co/"
        />
        <h5 className={classes.projectHeading}>
          inTakt - Construction scheduling web app (in progress)
        </h5>
        <ul>
          <li>
            Core developer on project using{" "}
            <a
              className={classes.linkStyle}
              href="https://reactjs.org/docs/hooks-intro.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              React Hooks
            </a>
            ,{" "}
            <a
              className={classes.linkStyle}
              href="https://material-ui.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Material UI
            </a>
            ,{" "}
            <a
              className={classes.linkStyle}
              href="https://firebase.google.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Firebase
            </a>
            .
          </li>
          <li>
            Refactored project dialog components to use a single dialog context
            and reusable dialog templates.
          </li>
          <li>
            Built and integrated reusable custom hook for uploading user images
            to Firebase Storage.
          </li>
        </ul>
        <h5 className={classes.projectHeading}>
          <a
            className={classes.linkStyle}
            href="https://www.brandedonline.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Branded Online
          </a>{" "}
          - End to end ecommerce solutions (website, marketing, fulfillment)
        </h5>
        <ul>
          <li>
            Integrated Branded Online{" "}
            <a
              className={classes.linkStyle}
              href="https://en.wikipedia.org/wiki/Enterprise_resource_planning"
              target="_blank"
              rel="noopener noreferrer"
            >
              ERP
            </a>{" "}
            (based on{" "}
            <a
              className={classes.linkStyle}
              href="https://www.moqui.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Moqui
            </a>
            ) with other ecommerce platforms (eg.{" "}
            <a
              className={classes.linkStyle}
              href="https://www.shopify.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Shopify
            </a>
            ,{" "}
            <a
              className={classes.linkStyle}
              href="https://www.magento.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Magento
            </a>
            ,{" "}
            <a
              className={classes.linkStyle}
              href="https://returnly.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Returnly
            </a>
            ,{" "}
            <a
              className={classes.linkStyle}
              href="https://www.returnmagic.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Return Magic
            </a>
            ).
          </li>
          <li>Edited Shopify themes to work with new ERP functionality.</li>
          <li>
            Integrated ERP with fulfillment centres using{" "}
            <a
              className={classes.linkStyle}
              href="https://en.wikipedia.org/wiki/Electronic_data_interchange"
              target="_blank"
              rel="noopener noreferrer"
            >
              EDI
            </a>{" "}
            and CSV documents over SFTP.
          </li>
          <li>
            Developed core ERP features such as consuming / producing new file
            types.
          </li>
          <li>
            <a
              className={classes.linkStyle}
              href="https://en.wikipedia.org/wiki/Site_Reliability_Engineering"
              target="_blank"
              rel="noopener noreferrer"
            >
              SRE
            </a>{" "}
            support. Investigating and fixing time-sensitive bugs in production
            using SQL, regex, bash scripting to automate updating values in
            database or batch running services. Improving services and processes
            in codebase to prevent and alert to errors.
          </li>
          <li>
            Point of contact for Branded Online business/brand managers. Join
            daily stand-up meeting with onshore dev team and allocate tasks to
            TailorSoft colleagues. Perform code review for pull requests
            containing business sensitive changes.
          </li>
        </ul>

        <h5 className={classes.projectHeading}>
          <a
            className={classes.linkStyle}
            href="https://www.rcherbals.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ridgecrest Herbals
          </a>{" "}
          - US based online nutritional supplement store
        </h5>
        <ul>
          <li>
            Rewrote very messy legacy HTML/CSS to improve design and make
            website responsive.
          </li>
          <li>
            Improved design and functionality of various pages, including store
            checkout process, using{" "}
            <a
              className={classes.linkStyle}
              href="https://vuejs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Vue
            </a>{" "}
            and{" "}
            <a
              className={classes.linkStyle}
              href="https://www.moqui.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Moqui
            </a>
            .
          </li>
        </ul>
        <SectionSubheader
          title="Analyst, Customer Data and Analytics"
          company="National Australia Bank"
          location="Melbourne"
          dateText="May 2017 - May 2018"
          link="https://www.nab.com.au/"
        />
        <ul>
          <li>
            Analysed the bank's customer data to help the marketing team review
            campaign impact and optimise future campaigns.
          </li>
          <li>
            Used SQL to compile data from a number of disparate databases into a
            single source and used the{" "}
            <a
              className={classes.linkStyle}
              href="https://www.r-project.org/about.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              R
            </a>
            programming language to produce visualisations that were used to
            better target credit card marketing.
          </li>
          <li>
            Worked with Agile Scrum methodology, including two-day off-site
            training in Scrum best practices.
          </li>
        </ul>
        <SectionSubheader
          title="Graduate, Finance and Strategy"
          company="National Australia Bank"
          location="Melbourne"
          dateText="Feb 2016 - May 2017"
          link="https://www.nab.com.au/"
        />
        <ul>
          <li>
            Undertook roles in Group Treasury, Finance Management Assurance and
            Internal Audit.
          </li>
          <li>
            Automated reporting tools and processes using Microsoft Excel and
            VBA
          </li>
          <li>
            Responsible for preparing communications for senior management and
            board meetings
          </li>
        </ul>
      </div>
    </SectionBase>
  )
}

export default ExperienceSection
