import { Link } from "gatsby"
import { Box, Heading } from "@chakra-ui/core"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <Box bg="#566d8f" color="white" px={4} h={16} rounded="md">
      <Heading>
        <Link
          to="/"
        >
          {siteTitle}
        </Link>
      </Heading>
  </Box>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
