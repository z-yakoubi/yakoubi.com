import axios from "axios";
import Jsona from "jsona";
import qs from "qs";

const instance = axios.create({
  baseURL: process.env.VUE_APP_JSONAPI_BASEURL,
  method: "get"
});

export async function fetchingResources(resource, params) {
  const dataFormatter = new Jsona();

  return await instance({
    url: resource,
    params,
    paramsSerializer: params => {
      return qs.stringify(params, {
        arrayFormat: "brackets"
      });
    }
  }).then(res => dataFormatter.deserialize(res.data));
}
