import axios from 'axios';
import { BACKEND_URL } from "../../constants/apiEndpoints";
import { ERROR_ROUTE } from '../../constants/routes';

const makeRequest = async (
    apiEndPoint,
    dynamicConfig = {},
    navigate
  ) => {
    try {
      // console.log(dynamicConfig)
    const requestDetails = {
      //   baseURL: BACKEND_URL,
        url: `${BACKEND_URL}${apiEndPoint.url}`,
        method: apiEndPoint.method,
        ...dynamicConfig,
      };
  
      const { data } = await axios(requestDetails);
      // const res  = await axios(requestDetails);
      // console.log(res)
      // console.log(res.data[0].claps)
      // console.log(res.data)
      // return res;
      return data;
    } catch (e) {
      console.log(e);
      
      if(navigate) {
        const errorStatus = e.response?.status
        if(errorStatus){
          navigate(`${ERROR_ROUTE}/${errorStatus}`)
        }
        else {
          navigate(ERROR_ROUTE)
        }
      }
    }
    
  };
  
  export default makeRequest;