import React, { useState } from "react";
import "./AddWindow.css"; 

function AddWindow({ isModalOpen, setIsModalOpen }) {
  const [formData, setFormData] = useState({
    name: "",
    author: "",
    overview: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Name: ${formData.name}\nAuthor: ${formData.author}\nOverview: ${formData.overview}`);
    setIsModalOpen(false); 
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      {/* Modal */}
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setIsModalOpen(false)}>
              &times;
            </span>
            <h2>Enter Data</h2>
            <form onSubmit={handleSubmit}>
              <label>
                Name:
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </label>
              <br />
              <label>
                Author:
                <input
                  type="text"
                  name="author"
                  value={formData.author}
                  onChange={handleChange}
                  required
                />
              </label>
              <br />
              <label>
                Overview:
                <input
                  type="text"
                  name="overview"
                  value={formData.overview}
                  onChange={handleChange}
                />
              </label>
              <br />
              <input type="submit" value="Submit" />
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default AddWindow;
