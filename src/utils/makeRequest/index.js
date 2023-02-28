import axios from "axios";
const BACKEND_URL = "http://localhost:8080/";

const makeRequest = async (apiEndPoint, dynamicConfig, navigate) => {
    try {
      const requestDetails = {
        baseURL: BACKEND_URL,
        url: apiEndPoint.url,
        method: apiEndPoint.method,
        headers: {
          authorization: "Bearer QWlzaHdhcnlhIE4=",
        },
        ...dynamicConfig,
      };
      const { data } = await axios(requestDetails);
      return data;
    } catch (error) {
      const errorCode = error.response?.status;
      if (errorCode) {
        navigate(`/error/${errorCode}`);
      } else {
        navigate("/error");
      }
    }
  };
  
  export default makeRequest;