import { Link } from "react-router-dom";

const UserCard = ({ user }) => {
  return (
    <div className="user-card">
      <h3>{user.name}</h3>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Phone:</strong> {user.phone}</p>
      <p><strong>Company:</strong> {user.company?.name || user.company}</p>
      <Link to={`/user/${user.id}`} className="details-link">View Details</Link>
    </div>
  );
};

export default UserCard;
