import React from "react"

const Footer = () => {
  return (
    <footer className="my-12 text-center">
      © {new Date().getFullYear()} <a href="https://www.thedarkale.com">thedarkale</a>
      , All rights reserved.
    </footer>
  )
}

export default Footer
