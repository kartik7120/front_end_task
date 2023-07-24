import { FormEvent, useState } from "react";
import { Button, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function ProtectedRoute() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState(0);
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (name === localStorage.getItem("name") && phone === Number(localStorage.getItem("phone")) && email === localStorage.getItem("email")) {
      navigate("/secondPage");
    } else {
      alert("Wrong credentials");
      navigate("/firstPage");
    }
  }

  return (
    <div>
      <form className="flex flex-col items-center gap-y-5" method="post" onSubmit={handleSubmit}>
        <TextField label="Name" variant="outlined" value={name} onChange={
          (e) => {
            setName(e.target.value);
          }} required={true} />
        <TextField label="Phone Number" variant="outlined" value={phone} onChange={
          (e) => {
            setPhone(Number(e.target.value));
          }} required={true} />
        <TextField label="Email" variant="outlined" value={email} onChange={
          (e) => {
            setEmail(e.target.value);
          }} required={true} />
        <Button type="submit" variant="contained">Submit</Button>
      </form>
    </div>
  )
}
