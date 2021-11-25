import axios from 'axios'

const handlerGet = async (req, res) => {
  const { data } =
    (await axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .catch((e) => {
        res.status(e.status || 400).json({ message: 'Api Error' })
      })) || {}
  if (data) {
    res.status(200).json(data.slice(0, 10))
  }
}

export default handlerGet
