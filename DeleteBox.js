import React from 'react'
import "./deletebox.css";

const DeleteBox = ({close, deleteProduct}) => {
  return (
    <div className='delete_box'>
        <div className='delete_box_top'>

        </div>
        <p style={{margin: "10px"}}>Are you sure that you want to delete this entry ?</p>
        <div className='action_box'>
            <button className='btn_delete' onClick={deleteProduct}>Delete</button>
            <button className='btn_cancel' onClick={close}>Cancel</button>
        </div>
    </div>
  )
}

export default DeleteBox