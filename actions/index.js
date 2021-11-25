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

export const useGetData = () => {
  const { data, error, ...rest } = useSWR('/api/v1/posts', fetcher)
  return { data, error, loading: !data && !error, ...rest }
}
