import React, { useEffect, useState } from "react";
import "../css/AddWidgetForm.css"

function AddWidgetForm({ onAdd, OnClose, imgurl }) {
  const [sectionName, setSectionName] = useState("");
  const [sampleImg, setSampleImg] = useState("");
  const [reading1, setReading1] = useState("");
  const [reading2, setReading2] = useState("");
  const [reading3, setReading3] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newWidgetData = {
      [sectionName]: {
        "sample-img": "image_source",
        "sample-reading-1": reading1,
        "sample-reading-2": reading2,
        "sample-reading-3": reading3,
      },
    };

    onAdd(newWidgetData);
    OnClose();
  };

  return (
    <>
      <div className="modal-overlay">
        <div className="modal1">
          <div className="modal-content">
            <h2>Add New Widget</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="sectionName">Section Name:</label>
                <input
                  type="text"
                  id="sectionName"
                  value={sectionName}
                  onChange={(e) => setSectionName(e.target.value)}
                  required
                />
              </div>
              {/* <div className="form-group">
                <label htmlFor="sampleImg">Image URL:</label>
                <input
                  type="text"
                  id="sampleImg"
                  value={imgurl}
                  onChange={(e) => setSampleImg(e.target.value)}
                  required
                />
              </div> */}
              <div className="form-group">
                <label htmlFor="reading1">Reading 1:</label>
                <input
                  type="text"
                  id="reading1"
                  value={reading1}
                  onChange={(e) => setReading1(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="reading2">Reading 2:</label>
                <input
                  type="text"
                  id="reading2"
                  value={reading2}
                  onChange={(e) => setReading2(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="reading3">Reading 3:</label>
                <input
                  type="text"
                  id="reading3"
                  value={reading3}
                  onChange={(e) => setReading3(e.target.value)}
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary m-2">
                Add Widget
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                onClick={OnClose}
              >
                Cancel
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddWidgetForm;
