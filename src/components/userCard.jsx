import { useDispatch } from "react-redux";
import { deleteUser } from "../redux/userSlice";

const UserItem = ({ user, setEditId }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteUser(user.id));
  };

  return (
    <div>
      <div>
        <div>{user.name}</div>
        Age: {user.age}, Email: {user.email}
      </div>
      <button onClick={() => setEditId(user.id)}>Edit</button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default UserItem;
