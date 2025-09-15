import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { UserContext } from "../context/UserContext";
import UserList from "../components/UserList";
import SearchBar from "../components/SearchBar";
import CreateUserForm from "../components/CreateUserForm";

const Dashboard = () => {
  const { users, setUsers } = useContext(UserContext);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then(res => setUsers(res.data))
      .catch(err => console.error(err));
  }, [setUsers]);

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
      <h1>User Dashboard</h1>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <CreateUserForm />
      <UserList users={filteredUsers} />
    </div>
  );
};

export default Dashboard;
