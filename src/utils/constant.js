const GOOGLE_API_KEY = "AIzaSyA8wajkqRCkVnBGtcbR1eIU8xg8qMBXmBo";

export const YOUTUBE_VIDEOS_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  GOOGLE_API_KEY;

export const GET_VIDEO_CATEGORIES_LIST = "https://www.googleapis.com/youtube/v3/videoCategories?part=snippet&regionCode=IN&key=" + GOOGLE_API_KEY;