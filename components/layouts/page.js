import Layout from './default'

function Page({ meta, children }) {
  return (
    <Layout pageTitle={meta.title}>
      <article>
        <header>
          <h1>{meta.title}</h1>
        </header>
        <div>{children}</div>
      </article>
    </Layout>
  )
}

export default Page
