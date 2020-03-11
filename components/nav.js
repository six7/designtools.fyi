import Link from 'next/link'
import { Flex, Box } from "@modulz/radix"

const Nav = () => (
  <Flex as="nav">
    {/* <Box mx={3}>
      <Link href="/about">
        <a>About</a>
      </Link>
    </Box>
    <Box mx={3}>
      <Link href="/about">
        <a>Tools</a>
      </Link>
    </Box> */}
    <style jsx>{`
      a {
        text-decoration: none;
        font-weight: bold;
        font-size: 12px;
        color: black;
      }`
      }</style>
  </Flex>
)

export default Nav
