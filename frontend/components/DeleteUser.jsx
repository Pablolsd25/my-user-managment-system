import API from "../src/api/axiosConfig";

const DeleteUser = ({ userId }) => {
  const handleDelete = async () => {
    try {
      const token = localStorage.getItem("token");
      await API.delete(`/users/${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      alert("User deleted successfully");
    } catch (error) {
      alert("Error deleting user");
      console.error(error.response.data);
    }
  };

  return <button onClick={handleDelete}>Delete User</button>;
};

export default DeleteUser;
