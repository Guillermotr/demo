import React, { useState } from "react";
import "./AddWindow.css";

function AddWindow({ isModalOpen, setIsModalOpen }) {
  const [formData, setFormData] = useState({
    name: "",
    author: "",
    overview: ""
  });

  const addBook = async () => {
    const JSONbody = {
      Name: formData.name,
      Author: formData.author,
      Overview: formData.overview
    };

    console.log(JSONbody);
    await fetch(`/api/book/add`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(JSONbody)
    }).then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error(error));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsModalOpen(false);

    try {
      console.log("Add Book");
      addBook(); // Handle network request after modal closes
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      {isModalOpen && (
        <div className="modal-addBook">
          <div className="modal-content-addBook">
            <h2 className="modal-header-addBook">書籍の追加</h2>
            <span className="close" onClick={() => setIsModalOpen(false)}>
              &times;
            </span>
            <form className="modal-form" onSubmit={handleSubmit}>
              <label>
                書籍名
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
                著者
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
                概要
                <input
                  type="text"
                  name="overview"
                  value={formData.overview}
                  onChange={handleChange}
                />
              </label>
              <br />
              <input className="submit-button" type="submit" value="追加" />
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default AddWindow;
