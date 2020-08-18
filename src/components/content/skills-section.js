import SectionBase from "./section-base"
import React from "react"
import { createUseStyles } from "react-jss"
import { SectionStyles } from "../../jss/components/content/section-styles"

const useStyles = createUseStyles(SectionStyles)

function SkillsSection() {
  const classes = useStyles()

  return (
    <SectionBase title="Profile">
      <ul className={classes.sectionList}>
        <li>
          Writing performant{" "}
          <strong className={classes.strongText}>HTML</strong> and{" "}
          <strong className={classes.strongText}>CSS</strong> using best
          practice tools and methodologies (eg.{" "}
          <strong className={`${classes.strongText} ${classes.strongLink}`}>
            <a
              className="u-link-strong"
              href="http://getbem.com/introduction/"
              target="_blank"
              rel="noopener noreferrer"
            >
              BEM
            </a>
          </strong>
          ,
          <strong className={`${classes.strongText} ${classes.strongLink}`}>
            <a
              className="u-link-strong"
              href="https://sass-lang.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Sass
            </a>
          </strong>
          ,
          <strong className={`${classes.strongText} ${classes.strongLink}`}>
            <a
              className="u-link-strong"
              href="https://cssinjs.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              JSS
            </a>
          </strong>
          )
        </li>
        <li>
          Building clean, modern UIs with{" "}
          <strong className={classes.strongText}>JavaScript</strong>,{" "}
          <strong className={`${classes.strongText} ${classes.strongLink}`}>
            <a
              className="u-link-strong"
              href="https://reactjs.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              React
            </a>
          </strong>
          ,
          <strong className={`${classes.strongText} ${classes.strongLink}`}>
            <a
              className="u-link-strong"
              href="https://vuejs.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Vue
            </a>
          </strong>
          ,{" "}
          <strong className={`${classes.strongText} ${classes.strongLink}`}>
            <a
              className="u-link-strong"
              href="https://material-ui.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Material UI
            </a>
          </strong>{" "}
          and{" "}
          <strong className={`${classes.strongText} ${classes.strongLink}`}>
            <a
              className="u-link-strong"
              href="https://getbootstrap.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Bootstrap
            </a>
          </strong>
        </li>
        <li>
          Making web apps and databases play nicely together, using{" "}
          <strong className={`${classes.strongText} ${classes.strongLink}`}>
            <a
              className="u-link-strong"
              href="https://firebase.google.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Firebase
            </a>
          </strong>
          ,
          <strong className={`${classes.strongText} ${classes.strongLink}`}>
            <a
              className="u-link-strong"
              href="https://aws.amazon.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              AWS
            </a>
          </strong>
          and{" "}
          <strong className={`${classes.strongText} ${classes.strongLink}`}>
            <a
              className="u-link-strong"
              href="https://www.mysql.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              MySQL
            </a>
          </strong>
        </li>
        <li>
          Creating, updating, managing ecommerce integrations with{" "}
          <strong className={`${classes.strongText} ${classes.strongLink}`}>
            <a
              className="u-link-strong"
              href="https://moqui.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Moqui Framework
            </a>
          </strong>
          ,
          <strong className={`${classes.strongText} ${classes.strongLink}`}>
            <a
              className="u-link-strong"
              href="https://groovy-lang.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Groovy
            </a>
          </strong>
          ,
          <strong className={`${classes.strongText} ${classes.strongLink}`}>
            <a
              className="u-link-strong"
              href="https://www.shopify.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Shopify
            </a>
          </strong>
          ,
          <strong className={`${classes.strongText} ${classes.strongLink}`}>
            <a
              className="u-link-strong"
              href="https://goshippo.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Shippo
            </a>
          </strong>
          ,
          <strong className={`${classes.strongText} ${classes.strongLink}`}>
            <a
              className="u-link-strong"
              href="https://en.wikipedia.org/wiki/Electronic_data_interchange"
              target="_blank"
              rel="noopener noreferrer"
            >
              EDI
            </a>
          </strong>
        </li>
        <li>
          Automating processes and fixing data, using{" "}
          <strong className={classes.strongText}>bash scripting</strong>,{" "}
          <strong className={classes.strongText}>RegEx</strong> and{" "}
          <strong className={classes.strongText}>SQL</strong>
        </li>
        <li>
          Version control with{" "}
          <strong className={classes.strongText}>Git</strong> (from the command
          line) via{" "}
          <strong className={`${classes.strongText} ${classes.strongLink}`}>
            <a
              className="u-link-strong"
              href="https://bitbucket.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Bitbucket
            </a>
          </strong>
          and
          <strong className={`${classes.strongText} ${classes.strongLink}`}>
            <a
              className="u-link-strong"
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
          </strong>
        </li>
        <li>
          Following <strong className={classes.strongText}>Agile</strong>{" "}
          development practices, using{" "}
          <strong className={`${classes.strongText} ${classes.strongLink}`}>
            <a
              className="u-link-strong"
              href="https://www.atlassian.com/software/jira"
              target="_blank"
              rel="noopener noreferrer"
            >
              Jira
            </a>
          </strong>
          and
          <strong className={`${classes.strongText} ${classes.strongLink}`}>
            <a
              className="u-link-strong"
              href="https://trello.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Trello
            </a>
          </strong>
        </li>
        <li>
          <strong className={classes.strongText}>Communication</strong> and{" "}
          <strong className={classes.strongText}>
            building great relationships
          </strong>
          with team members, clients and managers
        </li>
      </ul>
    </SectionBase>
  )
}

export default SkillsSection
