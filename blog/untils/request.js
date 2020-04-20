import Axios from 'axios'

const get = (url) => {
  return Axios.get(url).then((response) => {
    return response
  }).catch((err) => {
    return err
  })
}

