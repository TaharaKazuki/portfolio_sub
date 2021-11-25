import { useEffect, useState } from 'react'
import BaseLayout from '@/components/layouts/BaseLayout'
import BasePage from '@/components/BasePage'
import Link from 'next/link'
import axios from 'axios'

const Portfolios = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const getPost = async () => {
      const res = await fetch('/api/v1/posts')
      const data = await res.json()

      setPosts(data)
    }

    getPost()
  }, [])

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

export default Portfolios
