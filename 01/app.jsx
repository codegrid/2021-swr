import { useState, useEffect } from "react";

const fetcher = (url) =>
  fetch("https://hacker-news.firebaseio.com/v0" + url).then((res) =>
    res.json()
  );

const useFetcher = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    setData(null);
    setError(null);
    fetcher(url)
      .then((item) => setData(item))
      .catch((err) => setError(err));
  }, [url]);

  return { data, error };
};

const NewsDetail = ({ id }) => {
  const { data, error } = useFetcher(`/item/${id}.json`);

  if (error) return <p>Error: {error.message}</p>;
  if (!data) return <p>Loading...</p>;

  return (
    <div>
      <h2>{data.title}</h2>
      <div style={{ display: "flex", gap: 8 }}>
        <span>📝 {data.by}</span>
        <span>🅿️ {data.score}</span>
        <span>💬 {data.descendants}</span>
      </div>
    </div>
  );
};

export const App = () => (
  <>
    <NewsDetail id="29060272" />
  </>
);
