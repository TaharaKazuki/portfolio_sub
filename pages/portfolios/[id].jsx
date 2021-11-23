import BaseLayout from '../../components/layouts/BaseLayout'
import { useRouter } from 'next/router'
import axios from 'axios'

const Portfolio = ({ portfolio }) => {
  const router = useRouter()

  return (
    <BaseLayout>
      <h1>I am portfolio Page</h1>
      <h1>{portfolio.title}</h1>
      <p>Body: {portfolio.body}</p>
      <p>ID: {portfolio.id}</p>
    </BaseLayout>
  )
}

export async function getServerSideProps({ query }) {
  const { data } = await axios
    .get(`https://jsonplaceholder.typicode.com/posts/${query.id}`)
    .catch((e) => console.info(e))

  return {
    props: { portfolio: data },
  }
}

export default Portfolio
