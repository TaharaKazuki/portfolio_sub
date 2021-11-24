import BaseLayout from '@/components/layouts/BaseLayout'
import BasePage from '@/components/BasePage'
import Link from 'next/link'
import axios from 'axios'

const Portfolios = ({ posts }) => {
  const renderPosts = () =>
    posts.map((post) => (
      <li key={post.id}>
        <Link href={`/portfolios/${post.id}`}>
          <a>{post.title}</a>
        </Link>
      </li>
    ))

  return (
    <BaseLayout>
      <BasePage>
        <h1>I am portfolios page</h1>
        <ul>{renderPosts()}</ul>
      </BasePage>
    </BaseLayout>
  )
}

export async function getServerSideProps(context) {
  const { data } = await axios
    .get('https://jsonplaceholder.typicode.com/posts')
    .catch((e) => {
      console.info(e)
    })
  return {
    props: { posts: data.slice(0, 10) },
  }
}

export default Portfolios
