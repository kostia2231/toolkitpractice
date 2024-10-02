import { useSelector, useDispatch } from "react-redux";
import UserCard from "./userCard";
import { addUser, editUser } from "../redux/userSlice";
import { useState } from "react";

export default function UserList() {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [email, setEmail] = useState("");
  const [editId, setEditId] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();
    if (editId) {
      dispatch(editUser({ id: editId, data: { name, age, email } }));
      setEditId(null);
    } else {
      const newUser = { id: Date.now(), name, age, email };
      dispatch(addUser(newUser));
    }
    setAge(0);
    setEmail("");
    setName("");
  }

  return (
    <>
      <div>
        {users.map((user) => (
          <UserCard key={user.id} user={user} setEditId={setEditId} />
        ))}
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            onChange={(el) => setName(el.target.value)}
            value={name}
            placeholder="Name"
          />
          <input
            type="number"
            onChange={(el) => setAge(Number(el.target.value))}
            value={age}
            placeholder="Age"
          />
          <input
            type="text"
            onChange={(el) => setEmail(el.target.value)}
            value={email}
            placeholder="Email"
          />
          <button type="submit">Add</button>
        </form>
      </div>
    </>
  );
}
