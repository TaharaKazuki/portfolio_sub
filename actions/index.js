import useSWR from 'swr'

const fetcher = async (url) => {
  const res = await fetch(url)
  const result = await res.json()
  if (res.status !== 200) {
    return Promise.reject(result)
  } else {
    return result
  }
}

export const useGetPosts = () => {
  const { data, error, ...rest } = useSWR('/api/v1/posts', fetcher)
  return { data, error, loading: !data && !error, ...rest }
}

export const useGetPostById = (id) => {
  const { data, error, ...rest } = useSWR(
    id ? `/api/v1/posts/${id}` : null,
    fetcher
  )
  return { data, error, loading: !data && !error, ...rest }
}
