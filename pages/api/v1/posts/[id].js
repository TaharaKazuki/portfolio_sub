import axios from 'axios'

const handlerGetSelectId = async (req, res) => {
  const { data } = await axios
    .get(`https://jsonplaceholder.typicode.com/posts/${req.query.id}`)
    .catch((e) => {
      console.error(e)
      res.status(e.status || 400).json({ message: 'Api error' })
    })
  res.status(200).json(data)
}

export default handlerGetSelectId
