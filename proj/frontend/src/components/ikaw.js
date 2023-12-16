import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./ikaw.css";
import Medicineitem from "./Medicineitem";

const Ikaw = () => {
  const [medicines, setMedicine] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMeds = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/app/meds/");
        setMedicine(response.data);
      } catch (error) {
        console.error("Error fetching medicines:", error);
      }
    };

    fetchMeds();
  }, []);
  
  const handleDelete = async (medId) => {
    try {
      await axios.delete(`http://127.0.0.1:8000/app/meds/${medId}/delete`);
      console.log(`Medicine with ID ${medId} deleted successfully from the backend`);
  
      // Redirect back to the medicine list after deletion
      navigate("/medlist"); // Replace with your medicine list route
    } catch (error) {
      console.error(`Error deleting medicine with ID ${medId}:`, error);
    }
  };
  
  const handleEdit = (medId) => {
    // Redirect to the edit form page, passing the medicine ID as a parameter
    navigate("/edit");
  };

  return (
    <div className="cardsmed">
      <h1>MEDICINE INFORMATION</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
              {medicines.map((medicine) => (
                <li key={medicine.medId}>
                  <Medicineitem
                    src={medicine.image}
                    text={medicine.medName}
                    label="Medicine"
                    path={`/meds/${medicine.medId}`}
                  />
                  <div>
                    <button onClick={() => handleEdit(medicine.medId)}>Edit</button>
                    <button onClick={() => handleDelete(medicine.medId)}>Delete</button>
                  </div>
                </li>
              ))}
              
          </ul>
        </div>
      </div>
      <Link to="/add" className="link-button">
        Add New Medicine
      </Link>
    </div>
  );
};

export default Ikaw;
