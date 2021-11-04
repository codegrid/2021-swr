import useSWR, { useSWRConfig } from "swr";

const fetcher = (url) =>
  fetch("https://hacker-news.firebaseio.com/v0" + url).then((res) =>
    res.json()
  );

const NewsList = () => {
  const { mutate } = useSWRConfig();
  const { data, error } = useSWR("/newstories.json", fetcher);

  const refresh = () => mutate("/newstories.json");

  if (error) return <p>Error: {error.message}</p>;
  if (!data) return <p>Loading...</p>;

  return (
    <div>
      <button onClick={refresh}>MUTATE</button>
      <hr />
      <ul>
        {data.slice(0, 10).map((id) => (
          <li key={id}>{id}</li>
        ))}
      </ul>
      <hr />
      <span>Last updated: {new Date().toLocaleTimeString()}</span>
    </div>
  );
};

export const App = () => (
  <>
    <NewsList />
  </>
);
