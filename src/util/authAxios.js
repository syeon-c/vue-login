import axios from "axios";
import useMemberInfo from "@/store/useMemberInfo";


const authAxios = axios.create()


const requestRefresh = async () => {

  console.log("requestRefresh---------------1")

  const {getTokens, saveInfo} = useMemberInfo();

  const tokens = getTokens().value

  //console.log(tokens)

  console.log("requestRefresh---------------2", tokens)

  const {data} = await axios.post('http://localhost:8080/api/refresh', {access:tokens.access, refresh:tokens.refresh});

  //console.log("requestRefresh: ",data.access)

  saveInfo(data.access, data.refresh)

  console.log("requestRefresh---------------4")

  return data
}


authAxios.interceptors.request.use(

  (config)=> {


    console.log("req access: ", useMemberInfo().getTokens().value.access)

    config.headers = {'Authorization':`Bearer ${useMemberInfo().getTokens().value.access}`}


    return config

  }, () => {
    console.log("req rejected")
  }
)




authAxios.interceptors.response.use(
  (response)=> {

    //console.log("res fulfilled")
    return response

  }, async (error) => {

    //console.log("res rejected", error)



    if(error.response.data.msg === 'EXPIRED'){

      console.log("refresh........................................")
      try {
        const tokens = await requestRefresh()

        console.log("refresh result", tokens)

        const authHeader = {'Authorization': `Bearer ${tokens.access}`}

        error.config.headers = authHeader

        return axios(error.config)

      } catch(eee) {
        return error
      }
    }

    return error;
  }
)


export default authAxios
