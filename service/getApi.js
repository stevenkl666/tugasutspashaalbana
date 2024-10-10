import axios from "axios";

// MENU API
export const getAllProduk= () => {
    return axios.get('http://localhost:3001/Produk')
    .then(response => response)
}

export const createProduk = async (a) => {
    try {
      const response = await axios.post('http://localhost:3001/Produk/create', a);
      return response;
    } catch (error) {
      throw error;
    }
  };

export const updateProduk = async (data, id) => {
    return await axios.put(`http://localhost:3001/Produk/update/` + id, data)
    .then(res => res.data)
}

export const deleteProduk = async (id) => {
    return await axios.delete(`http://localhost:3001/Produk/delete/${id}`)
    .then(res => res.data)
}