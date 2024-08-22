import React from "react";

function Dashboard_element({ title, image, reading_1, reading_2, reading_3 }) {
  return (
    <>
      <div className="col">
        <div className="my-3">
          <h5>{title}</h5>
        </div>
        <div className="d-flex flex-row w-100 h-75">
          <div className="w-50 h-100">
            <img src={image} alt="pie chart" className="sample_image"/>
          </div>
          <div className="reading d-flex flex-column  w-50 h-100 justify-content-center">
            <p>{reading_1}</p>
            <p>{reading_2}</p>
            <p>{reading_3}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard_element;
