import React, { useState } from "react";
import { Button } from "react-bootstrap";

function Card(props) {
  const [isActive,setIsActive]=useState(true);
  const [updateName,setUpdateName]=useState(props.data.name);
  const [updateNumber,setUpdateNumber]=useState(props.data.number);

  function dataDelete() {
    // console.log(props.contactIndex);
    props.parentDeleteData(props.contactIndex);
  }

  function dataEdit(e){
    setIsActive(current => !current);
  }

  function updateData(){
    props.parentEditData({id:props.contactIndex,name:updateName,number:updateNumber});
    setIsActive(current => !current);
  }

  return (
    <div className="card-display">
      <div className="user-detail">
        <div className="name-sec">
          <i class="fa-solid fa-user add-Margin"></i>
          <p className="add-Margin">{props.data.name}</p>
        </div>
        <p className="add-Margin">{props.data.number}</p>
      </div>

      <div className={isActive?'Button-Sec-display':'Button-Sec-hide'}>
        <Button className="space" onClick={dataDelete} variant="secondary">
          Delete
        </Button>
        <Button className='space' variant="secondary" onClick={dataEdit}>
          Edit
        </Button>
      </div>
      <div className={isActive?"edit-page-hide":''}>
          <input type="text" value={updateName} onChange={(e)=>setUpdateName(e.target.value)}  placeholder="Name" />
          <input type="text" value={updateNumber} onChange={(e)=>setUpdateNumber(e.target.value)} placeholder="phone No." />
          <Button className="space" onClick={updateData} variant="secondary">
            Update
          </Button>
        </div>
    </div>
  );
}

export default Card;
