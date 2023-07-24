import { Button, TextField } from "@mui/material";
import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function FirstPage() {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState(0);
    const [email, setEmail] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        localStorage.setItem("name", name);
        localStorage.setItem("phone", phone.toString());
        localStorage.setItem("email", email);
        navigate("/secondPage");
    }

    return (
        <div className="flex flex-row items-center justify-center h-screen">
            <form onSubmit={handleSubmit}>
                <div className="flex flex-col items-center justify-between gap-y-7">
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
                </div>
            </form>
        </div>
    )
}
