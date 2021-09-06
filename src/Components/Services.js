import axios from 'axios';

export default {

  getList: async function(page) {
    try {
      let url;
      if(page!=null & page > 1) {
        url =`https://randomuser.me/api/?page=${page}&results=5`;
      } else {
        url = `https://randomuser.me/api/?page=1&results=5`;
      }
      const response = await axios.get(url);
      return response.data;
    } catch(error) {
      throw error;
    }
  }
}