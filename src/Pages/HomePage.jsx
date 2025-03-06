import { useState } from "react";
import { Link } from "react-router";
import TravelData from "../data/TravelData";
import "../css/homePage.css";

export default function HomePage() {
  const [Travels, setTravels] = useState(TravelData);
  const [NewTravels, setNewTravels] = useState({
    destination: "",
    departure_date: "",
    return_date: "",
  });

  const addTravels = (e) => {
    e.preventDefault();
    setTravels([...Travels, { id: Travels.length + 1, ...NewTravels }]);
    setNewTravels({ destination: "", departure_date: "", return_date: "" });
  };

  return (
    <div className="background">
      <div className="hero">
        <div className="container">
          <h1>
            Explore the <br />
            Sky in real-time
          </h1>
          <p className="description">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium
            voluptatum repudiandae tempore minima inventore? Asperiores totam
            corrupti iusto quod, deserunt voluptas nostrum nemo non
            necessitatibus blanditiis quam earum sed velit? lo
          </p>
          <button className="flight-btn">Start Flight</button>
        </div>
      </div>

      <div className="flights-container">
        <h1>EXPLORE THE SKY IN REAL TIME</h1>

        <div className="row">
          {Travels.map((travel) => (
            <div className="flight-card" key={travel.id}>
              <h3>{travel.destination}</h3>
              <img
                className="destination-img"
                src={travel.image}
                alt="destination"
              />
              <h4>Data di inizio: {travel.departure_date}</h4>
              <h5>Data di ritorno: {travel.return_date}</h5>
              <div className="btn-cntainer">
                <Link to={`/detail/${travel.id}`}>
                  <button className="card-btn"> see more </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      <h1 className="add-fly">Aggiungi Volo</h1>

      <form onSubmit={addTravels} className="form-add-fly">
        <input
          type="text"
          placeholder="Destinazione"
          value={NewTravels.destination}
          onChange={(e) =>
            setNewTravels({ ...NewTravels, destination: e.target.value })
          }
          className="destination"
          required
        />
        <input
          type="date"
          value={NewTravels.departure_date}
          onChange={(e) =>
            setNewTravels({ ...NewTravels, departure_date: e.target.value })
          }
          className="date-init"
          required
        />
        <input
          type="date"
          value={NewTravels.return_date}
          onChange={(e) =>
            setNewTravels({ ...NewTravels, return_date: e.target.value })
          }
          className="date-finish"
          required
        />
        <button type="submit" className="btn-form">
          Aggiungi Viaggio
        </button>
      </form>
    </div>
  );
}
