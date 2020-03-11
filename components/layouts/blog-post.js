import Link from 'next/link'
import { siteMeta } from '../../blog.config'
import Layout from './default'
import Post from '../blog-index-item'
import { Heading, Button, Code, Badge, Text, Box, Flex } from "@modulz/radix"
import PublishedAt from '../utils/published-at'
import blogposts from '../../posts/index'
import NextPrevPost from '../next-prev-post'

function BlogPost({ path, meta, children }) {
  const currentPostIndex = blogposts
    .map(({ title }) => title)
    .indexOf(meta.title)
  const previousPost = blogposts[currentPostIndex + 1]
  const nextPost = blogposts[currentPostIndex - 1]

  
  const otherPosts =
    blogposts
      .filter(post => post.category === meta.category)
      .filter(post => post.path !== path)
  

  return (
    <Layout pageTitle={meta.title} ogImage={meta.image}>
      <Flex mx={-2}>
        <Box mx={2} flex={1} className="h-entry">
          <header>
            <Box mb={3} width={"100%"}borderRadius={1} as="img" src={meta.image} className="img-fluid" />
            {meta.category && <Badge mb={2}>{meta.category}</Badge>}
            <Heading fontWeight={700}>{meta.title}</Heading>
            <Text as="p" mt={0} mb={2} size={2}>
              <PublishedAt date={meta.publishedAt} />
            </Text>
          </header>
          <div className="post-entry">{children}</div>
          {meta.readmore && <Box my={4}><Button as="a" href={meta.readmore}>Read more</Button></Box>}
          <footer>
            {(previousPost || nextPost) && (
              <div className="post-pagination">
                {previousPost && (
                  <NextPrevPost
                    title={previousPost.title}
                    path={previousPost.path}
                    position="previous"
                  />
                )}
                {nextPost && (
                  <NextPrevPost
                    title={nextPost.title}
                    path={nextPost.path}
                    position="next"
                  />
                )}
              </div>
            )}
          </footer>
        </Box>
      </Flex>
        {(meta.category && otherPosts.length > 0) &&
          <Box mb={3}>
          <Heading fontWeight={700} size={1}>More from {meta.category}</Heading>
          {otherPosts.map((post, index) => (
            <Post
              key={index}
              category={post.category}
              image={post.image}
              title={post.title}
              summary={post.summary}
              date={post.publishedAt}
              path={post.path}
            />
          ))}
          </Box>
        }
      <style jsx global>{`
        .post-pagination {
          display: grid;
          grid-template-columns: 1fr 1fr;
        }

        pre {
          box-sizing: border-box;
          font-family: RadixDuo,"Liberation Mono",Menlo,Consolas,monospace;
          font-size: 13px;
          line-height: 20px;
          padding-left: 5px;
          padding-right: 5px;
          border-radius: 3px;
          background-color: hsl(208,100%,95%);
          color: hsl(208,99%,44%);
        }

        .post-entry p {
          max-width: 60ch;
        }
      `}</style>
    </Layout>
  )
}

export default BlogPost
