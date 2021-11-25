import axios from 'axios'

const handlerGetSelectId = async (req, res) => {
  const { data } =
    (await axios
      .get(`https://jsonplaceholder.typicode.com/posts/${req.query.id}`)
      .catch((e) => {
        res.status(e.status || 400).json({ message: 'Api error' })
      })) || {}
  if (data) {
    res.status(200).json(data)
  }
}

export default handlerGetSelectId
