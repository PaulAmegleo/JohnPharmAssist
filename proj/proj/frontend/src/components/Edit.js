import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Edit = () => {
  const { medId } = useParams(); // Get the medId from URL params
  const [medicineData, setMedicineData] = useState({});

  useEffect(() => {
    const fetchMedicine = async () => {
      if (medId) { // Ensure medId is defined before making the request
        try {
          const response = await axios.get(`http://127.0.0.1:8000/app/meds/${medId}`);
          setMedicineData(response.data);
        } catch (error) {
          console.error("Error fetching medicine details:", error);
        }
      }
    };

    fetchMedicine();
  }, [medId]);


  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    const newValue = type === "checkbox" ? checked : value;
    setMedicineData({ ...medicineData, [name]: newValue });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.patch(`http://127.0.0.1:8000/app/meds/${medId}`, medicineData);
      alert("Medicine updated successfully!");
    } catch (error) {
      console.error("Error updating medicine:", error);
      alert("Error updating medicine. Please try again.");
    }
  };

  return (
    <div className="meds-form-container1">
      <h2>Edit Medicine</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group1">
          <label>Image URL:</label>
          <input
            type="text"
            name="image"
            value={medicineData.image}
            onChange={handleChange}
          />
        </div>

        <div className="form-group1">
          <label>Medicine Name:</label>
          <input
            type="text"
            name="medName"
            value={medicineData.medName}
            onChange={handleChange}
          />
        </div>

        <div className="form-group1">
          <label>Generic Name:</label>
          <input
            type="text"
            name="genericName"
            value={medicineData.genericName}
            onChange={handleChange}
          />
        </div>

        <div className="form-group1">
          <label>Dosage Form:</label>
          <select
            name="medType"
            value={medicineData.medType}
            onChange={handleChange}
          >
            <option value="">Select Dosage Form</option>
            <option value="Tablet">Tablet</option>
            <option value="Capsule">Capsule</option>
            <option value="Liquid">Liquid</option>
          </select>
        </div>
        <div className="form-group1">
          <label>Manufacturer:</label>
          <input
            type="text"
            name="manufacturer"
            value={medicineData.manufacturer}
            onChange={handleChange}
          />
        </div>

        <div className="form-group1">
          <label>Dosage:</label>
          <input
            type="text"
            name="dosage"
            value={medicineData.dosage}
            onChange={handleChange}
          />
        </div>

        <div className="form-group1">
          <label>Age Group:</label>
          <select
            name="ageGroup"
            value={medicineData.ageGroup}
            onChange={handleChange}
          >
            <option value="">Select Age Group</option>
            <option value="Senior">Senior</option>
            <option value="Kids">Kids</option>
            <option value="Adults">Adults</option>
          </select>
        </div>

        <div className="form-group1">
          <label>Formulation:</label>
          <input
            type="text"
            name="formulation"
            value={medicineData.formulation}
            onChange={handleChange}
          />
        </div>

        <div className="form-group1">
          <label>Net Content:</label>
          <input
            type="text"
            name="netContent"
            value={medicineData.netContent}
            onChange={handleChange}
          />
        </div>

        <div className="form-group1">
          <label>Indication:</label>
          <input
            type="text"
            name="indication"
            value={medicineData.indication}
            onChange={handleChange}
          />
        </div>

        <div className="form-group1">
          <label>Side Effects:</label>
          <input
            type="text"
            name="sideEffects"
            value={medicineData.sideEffects}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Availability:</label>
          <input
            type="checkbox"
            name="availability"
            checked={medicineData.availability}
            onChange={handleChange}
          />
        </div>

        <button type="submit">Update Medicine</button>
      </form>
    </div>
  );
};

export default Edit;
