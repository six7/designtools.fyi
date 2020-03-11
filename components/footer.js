import { Button, Flex, Box, Container, Link } from "@modulz/radix"

function Footer() {
  return (
    <Box as="footer" bg="black" textColor="white">
      <Container size={2}>
        <Flex mt={8} py={8} justifyContent="space-between">
          <Box><Link textColor="white" href="/feed.json">RSS Feed</Link></Box>
          <Box><Link textColor="white" href="https://twitter.com/designtoolsfyi">Twitter</Link></Box>
        </Flex>
      </Container>
    </Box>
  )
}

export default Footer
