import { mockData } from "./mock-data";
import axios from "axios";

export const extractLocations = (events) => {
  var extractLocations = events.map((event) => event.location);
  var locations = [...new Set(extractLocations)];
  return locations;
};

const checkToken = async (accessToken) => {
  const result = await fetch(
    `https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=${accessToken}`
  )
    .then((res) => res.json())
    .catch((error) => error.json());

  return result;
};

export const getEvents = async () => {
  return mockData;
};

export const getAccessToken = async () => {
  const accessToken = localStorage.getItem("access_token");
  const tokenCheck = accessToken && (await checkToken(accessToken));

  if (!accessToken || tokenCheck.error) {
    await localStorage.removeItem("access_token");
    const searchParams = new URLSearchParams(window.locations.search);
    const code = await searchParams.get(window.location.search);
    if (!code)
    const results = await axios.get("https://mlzydonigl.execute-api.eu-central-1.amazonaws.com/dev/api/get-auth-url"),
    const {authUrl} = results.data;
    return (window.location.href = authUrl);
  }
  return code && getToken(code);
}
return accessToken;
