import useSWR from "swr";
import { fetchItem } from "../../libs/api";

export const Comments = ({ commentIds }) => (
  <div>
    <h3>Top comments</h3>
    {!commentIds || commentIds.length === 0 ? (
      <p>No comments.</p>
    ) : (
      <ul>
        {commentIds.slice(0, 3).map((commentId) => (
          <li key={commentId}>
            <Comment commentId={commentId} />
          </li>
        ))}
      </ul>
    )}
  </div>
);

const Comment = ({ commentId }) => {
  const { data, error } = useSWR(`/item/${commentId}`, () =>
    fetchItem(commentId)
  );

  const isLoading = !data;

  if (error) return <p>Error: {error.message}</p>;
  if (isLoading) return <p>...</p>;

  return (
    <div>
      <strong>{data.by}</strong> at{" "}
      {new Date(data.time * 1000).toLocaleString()}
      <p dangerouslySetInnerHTML={{ __html: data.text }} />
    </div>
  );
};
