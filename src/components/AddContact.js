import React, { useState } from "react";
import Button from "react-bootstrap/Button";

function AddContact(props) {

  const [name,setName] = useState("");
  const [number,setNumber] = useState("");

  function dataSubmit(){
    props.parentCallback({name:name,number:number});
    setName("");
    setNumber("");
  }

  return (
    <div className="itemJustify Center">
      <input type="text" className="space" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Name" />
      <input type="text" className="space" value={number} onChange={(e)=>setNumber(e.target.value)} placeholder="Phone No." />
      <Button className="space" onClick={dataSubmit} variant="secondary">
        Add Contact
      </Button>
    </div>
  );
}

export default AddContact;
