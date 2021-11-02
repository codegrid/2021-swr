const fetcher = (url) =>
  fetch("https://hacker-news.firebaseio.com/v0" + url).then((res) =>
    res.json()
  );

export const fetchTopStories = () => fetcher("/topstories.json");
export const fetchItem = (id) => fetcher(`/item/${id}.json`);
export const fetchUser = (userId) => fetcher(`/user/${userId}.json`);
