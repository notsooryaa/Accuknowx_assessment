import React, { useState } from "react";
import AddDashboardForm from "./AddDashboardForm";
import "../css/AddDashboard.css";

function EditDashboard({ data, OnClose, onAddDashboard }) {
  const [dashboardItems, setDashboardItems] = useState(null);
  const [showItems, setShowItems] = useState(false);
  const [showDashboardForm1, setShowDashboardForm1] = useState(false);

  const handleShowItems = (cardId) => {
    handleDashboardItems(cardId);
    setShowDashboardForm1(false);
    setShowItems(true);
    
    
  };

  const handleDashboardItems = (selectedItem) => {
    const theItem = data.find((x) => x.id===selectedItem)
    setDashboardItems(theItem);
  }

  const handleshowDashboardForm1 = () => {
    setShowItems(false);
    setShowDashboardForm1(true);
  }

  const OnCloseDashboardForm = () => {
    setShowDashboardForm1(false);
  }


  return (
    <>
      <div className="d-flex flex-row dashboard-form">
        <div className="flex-column dashboard-form-overlay">
          <div className="d-flex px-4 dashboard-form-header">
            <h4>Edit Dashboard</h4>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={OnClose}
            >
              X
            </button>
          </div>
          <div className="dashboard-items">
            <p style={{ padding: "10px", margin: "0" }}>
              Personalise your dashboard by adding the following Widget
            </p>
            <div className="d-lg-flex flex-row h-50 col-md-12 d-sm-block p-2">
              {data.map((card, index) => (
                <>
                <button
                  type="button"
                  className="btn btn-secondary m-2"
                  onClick={() => handleShowItems(card.id)}
                >
                  {card.name}
                </button>
                {index === data.length - 1 && (
                  <button
                  type="button"
                  className="btn btn-secondary mx-2"
                  onClick={handleshowDashboardForm1}
                >
                  Add Dashboard +
                </button>
                )}
                </>
              ))}
            </div>
            {showItems && dashboardItems && (
              <>
                {Object.entries(dashboardItems.data).map(
                    ([sectionName, sectionData]) => (
                  <div className="container m-3">
                    <div className="list-group w-75">
                      <label
                        htmlFor="sectionName"
                        className="list-group-item d-flex gap-2 align-items-center"
                        key="key1"
                      >
                        <input
                          className="form-check-input flex-shrink-0"
                          type="checkbox"
                        />
                        <p className="m-0">{sectionName}</p>
                      </label>
                    </div>
                  </div>
                ))}
              </>
            )}
          </div>
          { showDashboardForm1 && (
            <>
              <AddDashboardForm
                onCloseForm={OnCloseDashboardForm}
                data={data}
                onAddDashboard= {onAddDashboard}
                OnClose={OnClose}
              />
            </>
          )
          }
        </div>
      </div>
    </>
  );
}

export default EditDashboard;
