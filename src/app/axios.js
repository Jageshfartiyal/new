
import axios from "axios";
// console.log('JSON.stringify(process.env)',JSON.stringify(process.env))
const instance = axios.create({
    //   baseURL: 'https://app.crmtoolbox.io/v1/', 
    baseURL: "http://localhost:3001",  
     withCredentials: true,  
     // headers: {  //   'Authorization': 'Bearer ' + localStorage.getItem('li_web_token')
       // }
    });
     export default instance;

