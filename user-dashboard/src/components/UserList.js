import UserCard from "./UserCard";

const UserList = ({ users }) => {
  if (!users.length) return <p>No users found.</p>;

  return (
    <div className="user-list">
      {users.map(user => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
};

export default UserList;
