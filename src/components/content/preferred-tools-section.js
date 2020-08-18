import SectionBase from "./section-base"
import React from "react"
import { createUseStyles } from "react-jss"
import { SectionStyles } from "../../jss/components/content/section-styles"

const useStyles = createUseStyles(SectionStyles)

function PreferredToolsSection() {
  const classes = useStyles()

  return (
    <SectionBase title="Preferred Tools">
      <ul>
        <li>OS: MacOS / Linux</li>
        <li>
          IDE:{" "}
          <a
            className={classes.linkStyle}
            href="https://www.jetbrains.com/webstorm"
            target="_blank"
            rel="noopener noreferrer"
          >
            Webstorm
          </a>{" "}
          and the rest of the{" "}
          <a
            className={classes.linkStyle}
            href="https://www.jetbrains.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            JetBrains
          </a>{" "}
          suite
        </li>
        <li>
          Shell:{" "}
          <a
            className={classes.linkStyle}
            href="https://en.wikipedia.org/wiki/Z_shell"
            target="_blank"
            rel="noopener noreferrer"
          >
            Zsh
          </a>{" "}
          with{" "}
          <a
            className={classes.linkStyle}
            href="https://ohmyz.sh/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Oh My Zsh
          </a>
        </li>
        <li>
          Text editor:{" "}
          <a
            className={classes.linkStyle}
            href="https://www.sublimetext.com/3"
            target="_blank"
            rel="noopener noreferrer"
          >
            Sublime Text
          </a>{" "}
          (primarily for RegEx)
        </li>
        <li>
          Git client:{" "}
          <a
            className={classes.linkStyle}
            href="https://github.com/jesseduffield/lazygit"
            target="_blank"
            rel="noopener noreferrer"
          >
            Lazygit
          </a>
        </li>
      </ul>
    </SectionBase>
  )
}

export default PreferredToolsSection
