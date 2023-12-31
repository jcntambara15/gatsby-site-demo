import { waitUntilAllJobsComplete } from "gatsby/dist/utils/jobs/manager"
import * as React from "react"

const pageStyles = {
  color: "#232129",
  backgroundColor: "#ADD8E6",
  padding: 150,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

const imageStyle = {
  display: "block",
  marginLeft: "auto", 
  marginTop: "auto",
  marginBottom: "0px",
  width: 600,
}

const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}
const headingAccentStyles = {
  color: "#663399",
}
const paragraphStyles = {
  marginBottom: 48,
}
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
}
const listStyles = {
  marginBottom: 96,
  paddingLeft: 0,
}
const listItemStyles = {
  fontWeight: 300,
  fontSize: 24,
  maxWidth: 560,
  marginBottom: 30,
}

const linkStyle = {
  color: "#8954A8",
  fontWeight: "bold",
  fontSize: 15,
  verticalAlign: "5%",
}

const docLinkStyle = {
  ...linkStyle,
  listStyleType: "none",
  marginBottom: 24,
}

const descriptionStyle = {
  color: "#232129",
  fontSize: 18,
  marginTop: 10,
  marginBottom: 0,
  lineHeight: 1.25,
}

// const docLink = {
//   text: "Documentation",
//   url: "https://www.gatsbyjs.com/docs/",
//   color: "#8954A8",
// }

const badgeStyle = {
  color: "#fff",
  backgroundColor: "#088413",
  border: "1px solid #088413",
  fontSize: 11,
  fontWeight: "bold",
  letterSpacing: 1,
  borderRadius: 4,
  padding: "4px 6px",
  display: "inline-block",
  position: "relative",
  top: -2,
  marginLeft: 10,
  lineHeight: 1,
}

const links = [
  { 
    text: "Projects",
    url: "https://jcntambara15.github.io/jeckyll-al-folio-demo/projects/",
    description:
      "Click the link above for a growing list of the projects I've worked on through my academic and work career.",
    color: "#E95800",

  },
  {
    text: "Repositories",
    url: "https://jcntambara15.github.io/jeckyll-al-folio-demo/repositories/",
    description:
      "The link above takes you to a list of some relevant GitHub Repositories containing some important projects that I've done or contributed to.",
    color: "#E95800",
  },

  {
    text: "My Digital Resume",
    url: "https://jcntambara15.github.io/jeckyll-al-folio-demo/cv/",
    description:
      "Click the link for my resume!",
    color: "#E95800",
  },
]

const IndexPage = () => {
  return (
    <main style={pageStyles}>
      

      <img style={imageStyle} src={`../../jc.jpg`} alt="JC's Pic" align="right" horizontalAlign="top"/>

      <ul style={listStyles}>
        <li style={docLinkStyle}>
          {/* <a
            style={linkStyle}
            href={`${docLink.url}?utm_source=starter&utm_medium=start-page&utm_campaign=minimal-starter`}
          >
            {docLink.text}
          </a> */}
        </li>

      <h1 style={headingStyles}>
        JC Ntambara
        <br />
        <span style={headingAccentStyles}></span>
      </h1>
      <p style={paragraphStyles}>
      I'm a Senior at Hendrix College majoring in Computer Science. I'm a technology enthusiast with the main interest in Database management, software development, and exploring how to solve complex problems while contributing to the betterment of people's lives.
      </p>

        <h4><b>Interests</b></h4>

        <ul>
          <li>Software Development</li>
          <li>Databases</li>
          <li>Web Development</li>
          <li>Front End Engineering</li>
        </ul>

        <h4><b>Hobbies</b></h4>

        <ul>
          <li>Volleyball</li>
          <li>Basketball</li>
          <li>Soccer</li>
          <li>Music Instruments (Piano and Guitar)</li>
          <li>Biking</li>
          <li>Cooking</li>
        </ul>

        <h3><b><i>Important Links</i></b></h3>
        {links.map(link => (
          <li key={link.url} style={{ ...listItemStyles, color: link.color }}>
            <span>
              <a
                style={linkStyle}
                href={`${link.url}?utm_source=starter&utm_medium=start-page&utm_campaign=minimal-starter`}
              >
                {link.text}
              </a>
              {link.badge && (
                <span style={badgeStyle} aria-label="New Badge">
                  NEW!
                </span>
              )}
              <p style={descriptionStyle}>{link.description}</p>
            </span>
          </li>
        ))}
      </ul>
    
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
