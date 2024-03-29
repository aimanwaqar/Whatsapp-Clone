import axios from 'axios';
const url = 'http://localhost:8000';

export const addUser = async(data)=>{
    try{
     await axios.post(`${url}/add`, data)
    }catch(error){
      console.log("error while addUser API",error.message)
    }
}

export const getUsers = async() =>{
  try{
    let response = await axios.get(`${url}/users`);
    console.log(response.data);
    return response.data;
  }catch(error){
    console.log("Error while calling getUsers API", error);

  }
}

export const setConversation = async(data)=>{
   try{
      await axios.post(`${url}/conversation/add`,data )
   }catch(error){
    console.log("Error while calling setConversation API", error);
   }

}

export const getConversation = async(data)=>{
  try{
     let response = await axios.post(`${url}/conversation/get`, data);
     console.log(response);
     return response.data;
  }catch(error){
   console.log("Error while calling getConversation API", error);
  }

}

export const newMessage = async(data)=>{
  try{
     let response = await axios.post(`${url}/message/add`, data);
     console.log(response);
     return response.data;
  }catch(error){
   console.log("Error while calling newMessage API", error.message);
  }

}

export const getMessages = async(id)=>{
  try{
     let response = await axios.get(`${url}/message/get/${id}`);
     console.log(response);
     return response.data;
  }catch(error){
   console.log("Error while calling getMessage API", error.message);
  }

}

export const uploadFile = async(data)=>{
  try{      
    return await axios.post(`${url}/file/upload`, data);
  }catch(error){
   console.log("Error while calling upload File API", error.message);
  }

}