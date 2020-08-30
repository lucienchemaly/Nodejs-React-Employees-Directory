export function authHeader() {
  // return authorization header with jwt token
  let bearer = localStorage.getItem("bearer");
  return { Authorization: "Bearer " + bearer };
}
