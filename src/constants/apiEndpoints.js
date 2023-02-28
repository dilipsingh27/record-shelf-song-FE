export const GET_SONGS = {
    url: "/api/records",
    method: "get"
};
  
export const GET_SONG_LIKE_BY_ID = (songID) => ({
    url: `/api/records/${songID}/likes`,
    method: "get",
});
  
export const UPDATE_SONG_LIKE_BY_ID = (songID) => ({
    url: `/api/records/${songID}/likes`,
    method: "patch",
});