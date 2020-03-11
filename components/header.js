import React from 'react'
import PropTypes from 'prop-types'
import Head from './head'
import Nav from './nav'
import { Heading, Flex, Box } from "@modulz/radix"
import Link from 'next/link'

function Header({ path, pageTitle, ogImage }) {
  return (
    <>
      <Head title={pageTitle} ogImage={ogImage} />
      <Box mt={3} mb={6}>
        <Flex alignItems="center" justifyContent="space-between">
          <Link href="/"><Heading size={3} as="a" className="cursor-pointer" fontWeight={700}>Designtools.fyi</Heading></Link>
          <Nav />
        </Flex>
      </Box>
    </>
  )
}

Header.propTypes = {
  path: PropTypes.string,
  pageTitle: PropTypes.string,
  ogImage: PropTypes.string,
}

export default Header
