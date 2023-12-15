import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./MedsDetails.css"; // Import a CSS file for styling

const MedsDetails = () => {
  const { id } = useParams();
  const [medicine, setMedicine] = useState(null);

  useEffect(() => {
    const fetchMedicineDetails = async () => {
      try {
        const response = await axios.get(
          `http://127.0.0.1:8000/app/meds/${id}/`
        );
        setMedicine(response.data);
      } catch (error) {
        console.error("Error fetching medicine details:", error);
      }
    };

    fetchMedicineDetails();
  }, [id]);

  return (
    <div className="meds-details-container">
      <h2>Medicine Details</h2>
      {medicine ? (
        <div>
          <div className="image-container">
            <img src={medicine.image} alt="Medicine" />
          </div>
          <p>
            <strong>=========================================================================</strong> 
          </p>
          <p>
            <strong>Medicine ID:</strong> {medicine.medId}
          </p>
          <p>
            <strong>Medicine Name:</strong> {medicine.medName}
          </p>
          <p>
            <strong>Generic Name:</strong> {medicine.genericName}
          </p>
          <p>
            <strong>Medicine Type:</strong> {medicine.medType}
          </p>
          <p>
            <strong>Manufacturer:</strong> {medicine.manufacturer}
          </p>
          <p>
            <strong>Dosage:</strong> {medicine.dosage}
          </p>
          <p>
            <strong>Age Group:</strong> {medicine.ageGroup}
          </p>
          <p>
            <strong>Formulation:</strong> {medicine.formulation}
          </p>
          <p>
            <strong>Net Content:</strong> {medicine.netContent}
          </p>
          <p>
            <strong>Indication:</strong> {medicine.indication}
          </p>
          <p>
            <strong>Side Effects:</strong> {medicine.sideEffects}
          </p>
          <p>
            <strong>Availability:</strong>{" "}
            {medicine.availability ? "Available" : "Not Available"}
          </p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default MedsDetails;
