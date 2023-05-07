import configApi from "./configApi";

const url = "/users";
const existsByEmail = (email) => {
  return configApi.get(`${url}/email/${email}`);
};
const existsByUsername = (username) => {
  return configApi.get(`${url}/userName/${username}`);
};
const create = (firstname, lastname, email, password, username) => {
  const body = {
    userName: username,
    email: email,
    password: password,
    firstName: firstname,
    lastName: lastname,
  };
  return configApi.post(url, body);
};

const login = (username, password) => {
  var body = new FormData();
  body.append("username", username);
  body.append("password", password);
  return configApi.post("/login", body);
};
const getProfile = () => {
    return configApi.get(`${url}/profile`);
}
const getAllGroups = () => {
  return configApi.get("/groups")
}
const Api = { existsByEmail, existsByUsername, create, login,getProfile,getAllGroups};
export default Api;
