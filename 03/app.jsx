import { useState } from "react";
import useSWR from "swr";

const fetcher = (url) =>
  fetch("https://hacker-news.firebaseio.com/v0" + url).then((res) =>
    res.json()
  );

const MaxItem = () => {
  const { data, error } = useSWR("/maxitem.json", fetcher);

  if (error) return <p>Error: {error.message}</p>;
  if (!data) return <p>Loading...</p>;

  return (
    <div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export const App = () => {
  const [items, update] = useState([Date.now()]);
  return (
    <>
      <button onClick={() => update([...items, Date.now()])}>UPDATE</button>
      <button onClick={() => update([])}>FLUSH</button>
      <hr />
      {items.map((item) => (
        <MaxItem key={item} />
      ))}
    </>
  );
};
