import React, { useState } from "react";
import Dashboard_element from "./cards/DashboardElement";
import Add_Widget from "./cards/AddWidget";
import AddWidgetForm from "./cards/AddWidgetForm";
import EditDashboard from "./cards/AddDashboard";
import data from "../data.json";
import image from "../assets/pie_image.jpg";
import "./css/Dashboard.css";

const images = {
  image_source: image,
};

function Dashboard() {
  const [cards, setCards] = useState(data);
  const [showForm, setShowForm] = useState(false);
  const [selectedCardId, setSelectedCardId] = useState(null);
  const [showDashboardForm, setShowDashboardForm] = useState(false);
  const handleShowDashboardForm = () => {
    setShowDashboardForm(true);
  };

  const handleAddWidget = (newWidgetData) => {
    const updatedCards = cards.map((card) => {
      if (card.id === selectedCardId) {
        return {
          ...card,
          data: {
            ...card.data,
            ...newWidgetData,
          },
        };
      }
      return card;
    });

    setCards(updatedCards);
    setShowForm(false);
  };

  const handleShowForm = (cardId) => {
    setSelectedCardId(cardId);
    setShowForm(true);
  };

  const handleAddNewDashboard = (newDashboard) => {
    const newId = `${cards.length + 1}`;
    const newCard = {
      id: newId,
      name: newDashboard.name,
      data: {},
    };

    setCards([...cards, newCard]);
  };

  const handleUpdateCards = (updatedCards) => {
    setCards(updatedCards);
  };

  const handleDeleteWidget = (cardId, sectionName) => {
    const updatedCards = cards.map((card) => {
      if (card.id === cardId) {
        const updatedData = { ...card.data };
        delete updatedData[sectionName];
        return { ...card, data: updatedData };
      }
      return card;
    });

    setCards(updatedCards);
  };

  const handleDeleteElement = (cardId) => {
    const updatedElements = cards.filter((card) => card.id !== cardId);
    setCards(updatedElements);
  };

  return (
    <>
      <div className="whole-body">
        <div className="container px-0 py-4">
          <div className="d-flex flex-wrap pb-4 align-items-center justify-content-between">
            <h1 className="text-start">CNAPP Dashboard</h1>
            <div className="text-end">
              <button
                type="button"
                className="btn btn-light text-dark btn-outline-secondary me-0"
                onClick={() => handleShowDashboardForm(data.id)}
              >
                Add Widget +
              </button>
            </div>
          </div>
          {cards.map((card) => (
            <>
              <div className="card mb-4 border-dark-subtle" key={card.id}>
                <div className="d-flex column justify-content-between">
                  <h3>{card.name}</h3>
                  <button className="btn btn-secondary px-2 py-1 btn-outline-light"
                  onClick={() => handleDeleteElement(card.id)}>
                    X
                  </button>
                </div>
                <div className="each-card row align-items-stretch g-4 px-3 m-0 h-100">
                  {Object.entries(card.data).map(
                    ([sectionName, sectionData], idx) => (
                      <React.Fragment key={sectionName}>
                        <Dashboard_element
                          key={sectionName}
                          title={sectionName}
                          image={images[sectionData["sample-img"]]}
                          reading_1={sectionData["sample-reading-1"]}
                          reading_2={sectionData["sample-reading-2"]}
                          reading_3={sectionData["sample-reading-3"]}
                          onDelete={() =>
                            handleDeleteWidget(card.id, sectionName)
                          }
                        />
                        {idx === Object.entries(card.data).length - 1 && (
                          <Add_Widget onAdd={() => handleShowForm(card.id)} />
                        )}
                      </React.Fragment>
                    )
                  )}
                  {Object.keys(card.data).length === 0 && (
                    <Add_Widget onAdd={() => handleShowForm(card.id)} />
                  )}
                </div>
              </div>
            </>
          ))}
          {showForm && (
            <>
              <AddWidgetForm
                onAdd={(newWidgetData) => {
                  handleAddWidget(newWidgetData);
                  setShowForm(false);
                }}
                OnClose={() => setShowForm(false)}
                imgurl={image}
              />
            </>
          )}
          {showDashboardForm && (
            <>
              <EditDashboard
                data={cards}
                onAddDashboard={(newDashboard) => {
                  handleAddNewDashboard(newDashboard);
                  setShowDashboardForm(false);
                }}
                onUpdateCards={handleUpdateCards}
                OnClose={() => setShowDashboardForm(false)}
              />
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default Dashboard;
