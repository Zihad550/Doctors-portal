import { Button, Input, TextField } from "@mui/material";
import React, { useState } from "react";

const AddDoctor = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState(null);

  const addDoctor = (e) => {
    e.preventDefault();
    if (!image) {
      return;
    }
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("image", image);

    fetch("https://fierce-chamber-73617.herokuapp.com/doctors", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("Doctor addeded successfully");
        }
      })
      .catch((error) => {
        console.error("error", error);
      });
  };
  return (
    <div>
      <h3>Add a Doctor</h3>
      <form onSubmit={addDoctor}>
        <TextField
          required
          onBlur={(e) => setName(e.target.value)}
          label="Name"
          variant="standard"
        />
        <br />
        <TextField
          required
          onBlur={(e) => setEmail(e.target.value)}
          type="email"
          label="Email"
          variant="standard"
          margin="dense"
        />
        <br />
        <Input
          onChange={(e) => setImage(e.target.files[0])}
          accept="image/*"
          type="file"
          sx={{ mb: 1 }}
        />
        <br />
        <Button type="submit" variant="contained">
          Add Doctor
        </Button>
      </form>
    </div>
  );
};

export default AddDoctor;
