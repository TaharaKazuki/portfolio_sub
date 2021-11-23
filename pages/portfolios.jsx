import BaseLayout from '../components/layouts/BaseLayout'
import axios from 'axios'

const Portfolios = ({ posts }) => {
  const renderPosts = () =>
    posts.map((post) => <li key={post.id}>{post.title}</li>)

  return (
    <>
      <BaseLayout>
        <h1>I am portfolios page</h1>
        <ul>{renderPosts()}</ul>
      </BaseLayout>
    </>
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
