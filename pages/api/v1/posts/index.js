import axios from 'axios'

const handlerPosts = async (req, res) => {
  const { data } = await axios
    .get('https://jsonplaceholder.typicode.com/posts')
    .catch((e) => {
      console.error(e)
      res.status(e.status || 400).json({ message: 'Api Error' })
    })
  res.status(200).json(data.slice(0, 10))
}

export default handlerPosts
