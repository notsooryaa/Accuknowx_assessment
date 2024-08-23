import React from "react";

function Add_Widget({onAdd}) {
  return (
    <>
      <div className="col">
        <div className="card h-100 d-flex justify-content-center align-items-center border-0">
          <button type="button" className="btn btn-primary" onClick={onAdd}>
            Add Widget +
          </button>
        </div>
      </div>
    </>
  );
}

export default Add_Widget;
