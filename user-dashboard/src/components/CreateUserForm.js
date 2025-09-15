import { useState, useContext } from "react";
import { UserContext } from "../context/UserContext";

const CreateUserForm = () => {
  const { addUser } = useContext(UserContext);
  const [formData, setFormData] = useState({
    name: "", email: "", phone: "", company: ""
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name) return alert("Name is required");
    addUser(formData);
    setFormData({ name: "", email: "", phone: "", company: "" });
  };

  return (
    <form className="create-user-form" onSubmit={handleSubmit}>
      <input name="name" value={formData.name} onChange={handleChange} placeholder="Name" required />
      <input name="email" value={formData.email} onChange={handleChange} placeholder="Email" />
      <input name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone" />
      <input name="company" value={formData.company} onChange={handleChange} placeholder="Company" />
      <button type="submit">Add User</button>
    </form>
  );
};

export default CreateUserForm;
