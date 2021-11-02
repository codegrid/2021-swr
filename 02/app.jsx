import useSWR from "swr";

const fetcher = (url) =>
  fetch("https://hacker-news.firebaseio.com/v0" + url).then((res) =>
    res.json()
  );

const NewsDetail = ({ id }) => {
  const { data, error } = useSWR(`/item/${id}.json`, fetcher);

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
