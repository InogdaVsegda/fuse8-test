import jokesURL from '.'
import axios from 'axios'

export const getData = async (searchInput) => {
    return await axios.get(`${jokesURL}/search`, {
      params: {
        query: searchInput,
      }
    })
}