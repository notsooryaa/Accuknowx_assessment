import React, { useState } from "react";
import "../css/AddDashboardForm.css";

function AddDashboardForm({onCloseForm, data, onAddDashboard, OnClose}) {

    const [dashboardName, setDashboardName] = useState("")


    const handleSubmitDashboard = (e) => {
        e.preventDefault();
        const newDashboard = { "name": dashboardName};

        onAddDashboard(newDashboard);
        OnClose();
    }



  return (
    <>
      <div className="d-flex flex-column align-items-center p-3">
        <div className="modal2">
          <h3>Add Dashboard</h3>
          <form className="form" onSubmit={handleSubmitDashboard}>
            <div className="form-group">
              <label htmlFor="sectionName">Section Name:</label>
              <input
                type="text"
                id="sectionName"
                value={dashboardName}
                onChange={(e) => setDashboardName(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary m-2">
              Add Dashboard Element
            </button>
            <button type="button" className="btn btn-secondary" onClick={onCloseForm}>
              Cancel
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default AddDashboardForm;
