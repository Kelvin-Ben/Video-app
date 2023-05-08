import axios from "axios";
const KEY = "AIzaSyAePUiyBDQZNtr_5Ro1lQBt-31mA-jI71c";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 6,
    key: KEY,
  },
});
