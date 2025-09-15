import { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const UserDetails = () => {
  const { id } = useParams();
  const { users } = useContext(UserContext);
  const navigate = useNavigate();
  const user = users.find(u => u.id === parseInt(id));

  if (!user) return <p>User not found</p>;

  return (
    <div className="user-details">
      <button onClick={() => navigate(-1)}>Back</button>
      <h2>{user.name}</h2>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
      <p>Company: {user.company.name}</p>
      <p>Address: {user.address.street}, {user.address.city}</p>
      <p>Geo: lat {user.address.geo.lat}, lng {user.address.geo.lng}</p>
    </div>
  );
};

export default UserDetails;
