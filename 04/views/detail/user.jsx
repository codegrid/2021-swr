import { useState } from "react";
import useSWR from "swr";
import { fetchUser } from "../../libs/api";

export const User = ({ userId }) => {
  const [showProfile, setShowProfile] = useState(false);

  const onClickToggleProfile = () => setShowProfile((b) => !b);

  return (
    <div>
      <h3>User profile</h3>
      <button onClick={onClickToggleProfile}>
        {showProfile ? "Hide" : "Show"} details
      </button>

      {showProfile && <UserProfile userId={userId} />}
    </div>
  );
};

const UserProfile = ({ userId }) => {
  const { data, error } = useSWR(`/user/${userId}`, () => fetchUser(userId));

  const isLoading = !data;

  if (error) return <p>Error: {error.message}</p>;
  if (isLoading) return <p>...</p>;

  return (
    <dl>
      <dt>Id</dt>
      <dd>{data.id}</dd>
      <dt>About</dt>
      <dd dangerouslySetInnerHTML={{ __html: data.about || "-" }} />
      <dt>Created</dt>
      <dd>{new Date(data.created * 1000).toLocaleString()}</dd>
      <dt>Submitted</dt>
      <dd>{data.submitted.length} item(s)</dd>
    </dl>
  );
};
