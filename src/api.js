import axios from "axios";
import { API_KEY } from "./config";

const MAIN_API_ROOT = "https://maps.googleapis.com/maps/api/geocode/json";
const addressUrl = (lat, lng) =>
  `${MAIN_API_ROOT}?latlng=${lat},${lng}&key=${API_KEY}`;
const latLngUrl = (address) =>
  `${MAIN_API_ROOT}?address=${address}&key=${API_KEY}`;

const getAddress = async (lat, lng) => {
  const res = await axios.get(addressUrl(lat, lng));
  const address =
    res.data.results.length > 0
      ? res.data.results[0].formatted_address
      : `No address (${lat},${lng})`;
  return address;
};

const getLatLng = async (address) => {
  const res = await axios.get(latLngUrl(address));
  const location =
    res.data.results.length > 0 ? res.data.results[0].geometry.location : null;
  return location;
};

export default {
  getAddress,
  getLatLng,
};
