import "./App.css";
import React, { createContext, useReducer, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import axios from "axios";

// Axios setup
axios.defaults.withCredentials = true;

const App = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact_number, setContact_number] = useState();
  const [address, setAddress] = useState("");

  const [number_of_person, setNumber_of_person] = useState();
  const [room_type, setRoomType] = useState();
  const [number_of_nights, setNumber_of_nights] = useState();

  async function signup(e) {
    try {
      await axios
        .get("http://localhost:3001/user-room/save", {
          name: name,
          email: email,
          contact_number: contact_number,
          address: address,
          user_id: name,
          number_of_persons: number_of_person,
          type_of_room: room_type,
          number_of_nights: number_of_nights,
        })
        .then((res) => {
          console.log(res);
        });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div className="container">
        <form>
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              className="form-control"
              id="inputName"
              onChange={(e) => setName(e.target.value)}
            ></input>
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="text"
              className="form-control"
              id="inputEmail"
              onChange={(e) => setEmail(e.target.value)}
            ></input>
          </div>
          <div className="form-group">
            <label>Phone Number</label>
            <input
              type="text"
              className="form-control"
              id="inputPhone"
              onChange={(e) => setContact_number(e.target.value)}
            ></input>
          </div>

          <div className="form-group">
            <label>Address</label>
            <input
              type="text"
              className="form-control"
              id="inputAddress"
              onChange={(e) => setAddress(e.target.value)}
            ></input>
          </div>
          <hr></hr>

          <div className="form-row">
            <div className="form-group col-md-6">
              <label>Number of Persons</label>
              <input
                type="Number"
                className="form-control"
                id="inputNumberOfPersons"
                onChange={(e) => setNumber_of_person(e.target.value)}
              ></input>
            </div>
            <div className="form-group col-md-6">
              <label>Room Type</label>
              <input
                type="text"
                className="form-control"
                id="inputRoomType"
                onChange={(e) => setRoomType(e.target.value)}
              ></input>
            </div>
          </div>
          <div className="form-group ">
            <label>Number of Nights</label>
            <input
              type="Number"
              className="form-control"
              id="inputNumberOfNights"
              onChange={(e) => setNumber_of_nights(e.target.value)}
            ></input>
          </div>
          <div className="d-flex justify-content-around">
            <button type="submit" className="btn btn-primary">
              Calculate Cost
            </button>
            <button type="submit" className="btn btn-primary" onClick={signup}>
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default App;
