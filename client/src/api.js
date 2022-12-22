import axios from "axios";
const url="api/post"

export default class API{
    static async getAllBook(){
        const res=await axios.get(url);
        return res.data;
    }
    static async getBookById(id){
        const res=await axios.get(`${url}/${id}`);
        return res.data;
    }
    static async addBook(post){
        const res=await axios.post(url,post);
        return res.data;
    }
    static async updateBook(id,post){
        const res=await axios.patch(`${url}/${id}`,post);
        return res.data;
    }
    static async deleteBook(id){
        const res=await axios.delete(`${url}/${id}`);
        return res.data;
    }
}