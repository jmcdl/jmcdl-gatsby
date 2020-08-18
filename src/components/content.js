import React from "react"
import { createUseStyles } from "react-jss"
import ResumeHeading from "./content/resume-heading"
import ProfileSection from "./content/profile-section"
import SkillsSection from "./content/skills-section"
import ExperienceSection from "./content/experience-section"
import EducationSection from "./content/education-section"
import PreferredToolsSection from "./content/preferred-tools-section"
import InterestsSection from "./content/interests-section"

const useStyles = createUseStyles(theme => ({
  contentContainer: {
    ...theme.contentContainer,
  },
}))

export default function Content() {
  const classes = useStyles()

  return (
    <div className={classes.contentContainer}>
      <ResumeHeading title="James McDonell" subtitle="Full Stack Web Developer" />
      <ProfileSection />
      <SkillsSection />
      <ExperienceSection />
      <EducationSection />
      <PreferredToolsSection />
      <InterestsSection />
    </div>
  )
}
// Content.propTypes = {
//
// }
