import Axios from "axios";

const createConnector = () => {
  const config = {};
  let token = localStorage.getItem("accessToken");
  if (token) {
    config.header = {
      Authorization: "Bearer " + token,
    };
  }
  return Axios.create(config);
};
export const connector = createConnector();
