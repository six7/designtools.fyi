import PropTypes from 'prop-types'
import Link from 'next/link'
import { Text, Flex, Button } from "@modulz/radix"

const NextPrevPost = ({ title, path, position }) => {
  const isNext = position === 'next'
  return (
    <Flex flexDirection="column" alignItems={isNext ? 'flex-end' : 'flex-start'} style={{gridColumn: isNext ? '2 / 2' : ''}}>
      <Text mb={1} fontWeight="bold" size={1}>Read {position} post </Text>
      <Link href={path}>
        <Button as="a">
          {title}
        </Button>
      </Link>
      <style jsx global>{`
        .page-link {
          ${isNext ? 'grid-column: 2 / 2;' : ''}
        }
      `}</style>
    </Flex>
  )
}

NextPrevPost.propTypes = {
  title: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  position: PropTypes.oneOf(['next', 'previous']),
}

export default NextPrevPost
