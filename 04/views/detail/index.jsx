import useSWR from "swr";
import { fetchItem } from "../../libs/api";
import { Comments } from "./comments";
import { User } from "./user";

export const DetailView = ({ id }) => {
  const { data, error } = useSWR(`/item/${id}`, () => fetchItem(id));

  const isLoading = !data;

  if (error) return <p>Error: {error.message}</p>;
  if (isLoading) return <p>...</p>;

  return (
    <div>
      <h2>{data.title}</h2>
      <div>
        <span>✍️ {data.by}</span>
        <span>🅿️ {data.score}</span>
        <span>💬 {data.descendants}</span>
        <span>🕛 {new Date(data.time * 1000).toLocaleString()}</span>
        <span>
          🔗 <a href={data.url}>{data.url}</a>
        </span>
      </div>

      <hr />
      <Comments commentIds={data.kids} />

      <hr />
      <User userId={data.by} />

      <hr />
      <a href="#!/">Back to list</a>
    </div>
  );
};
