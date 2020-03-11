import Link from 'next/link'
import PublishedAt from './utils/published-at'
import { Box, Heading, Text, CardLink, Button, Badge } from '@modulz/radix';

const Post = ({ image, category, title, summary, date, path }) => (
  <Link href={path}>
    <CardLink className="position-relative">
      <Box mb={3} width={"100%"} borderRadius={1} as="img" src={image} />
      {category && <Badge mb={2}>{category}</Badge>}
      <Heading size={1} fontWeight={700}>
        {title}
      </Heading>
      <Text as="p" mt={0} mb={2} size={2}>
        <PublishedAt date={date} />
      </Text>
      <Text as="p" mt={2} mb={4} size={3}>
        {summary}
      </Text>
      <div>  
        <Button as="div" className="cursor-pointer stretched-link">Read more</Button>
      </div>
    </CardLink>
  </Link>
)

export default Post
