import useSWR from "swr";
import { fetchTopStories, fetchItem } from "../libs/api";

export const ListView = () => {
  const { data: listData, error: listError } = useSWR(
    "/topstories",
    fetchTopStories
  );
  const { data: topItemData, error: topItemError } = useSWR(
    !listData ? null : `/item/${listData[0]}`,
    () => fetchItem(listData[0])
  );

  const error = listError || topItemError;
  const isLoading = !(listData && topItemData);

  if (error) return <p>Error: {error.message}</p>;
  if (isLoading) return <p>...</p>;

  return (
    <div>
      <section>
        <h2>
          [<a href={`#!/${topItemData.id}`}>{topItemData.id}</a>]{" "}
          {topItemData.title}
        </h2>
        <div>
          <span>📝 {topItemData.by}</span>
          <span>🅿️ {topItemData.score}</span>
          <span>💬 {topItemData.descendants}</span>
          <span>
            🕛 {new Date(topItemData.time * 1000).toLocaleTimeString()}
          </span>
        </div>
      </section>

      <hr />

      <div>
        {listData.slice(1, 10).map((id) => (
          <span key={id}>
            [<a href={`#!/${id}`}>{id}</a>]{", "}
          </span>
        ))}
        ...
      </div>
    </div>
  );
};
