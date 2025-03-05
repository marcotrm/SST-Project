import { useState } from "react";
import { Link } from "react-router";
import { useParams } from "react-router";
import "../css/travelDetails.css";

// Import dei dati
import TravelData from "../data/TravelData";

export default function TravelDetails() {
  const { id } = useParams();
  const currentTravel = TravelData[id - 1];
  const [searchUser, setSearchUser] = useState("");
  const [participants, setParticipants] = useState(currentTravel.participants);
  const [newParticipant, setNewParticipant] = useState({
    full_name: "",
    phone_number: "",
    email: "",
    tax_code: "",
  });
  const [selectedParticipant, setSelectedParticipant] = useState(null);

  const filteredParticipants = participants.filter((participant) =>
    participant.full_name.toLowerCase().includes(searchUser.toLowerCase())
  );

  const handleInputChange = (e) => {
    setNewParticipant({ ...newParticipant, [e.target.name]: e.target.value });
  };

  const handleAddParticipant = (e) => {
    e.preventDefault();
    setParticipants([
      ...participants,
      { ...newParticipant, user_id: Date.now() },
    ]);
    setNewParticipant({
      full_name: "",
      phone_number: "",
      email: "",
      tax_code: "",
    });
  };

  // Funzione per gestire il click sul nome del partecipante
  const toggleParticipantDetails = (participantId) => {
    if (selectedParticipant === participantId) {
      setSelectedParticipant(null);
    } else {
      setSelectedParticipant(participantId);
    }
  };

  return (
    <div className="container">
      <div className="info-travel">
        <img src={currentTravel.image} alt="" />
        <h1>{currentTravel.destination}</h1>
        <div className="date-container">
          <h3>
            Data di arrivo <br />
            {currentTravel.departure_date}
          </h3>
          <h3>
            Data di ritorno <br />
            {currentTravel.return_date}
          </h3>
        </div>
        <h3>{currentTravel.description}</h3>
      </div>
      {/* Form per aggiungere partecipanti */}
      <div className="add-participant">
        <h2>Aggiungi Partecipante</h2>
        <form onSubmit={handleAddParticipant} className="form-container">
          <input
            type="text"
            name="full_name"
            placeholder="Nome completo"
            value={newParticipant.full_name}
            onChange={handleInputChange}
            className="input-field"
            required
          />
          <input
            type="text"
            name="phone_number"
            placeholder="Numero di telefono"
            value={newParticipant.phone_number}
            onChange={handleInputChange}
            className="input-field"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={newParticipant.email}
            onChange={handleInputChange}
            className="input-field"
            required
          />
          <input
            type="text"
            name="tax_code"
            placeholder="Codice fiscale"
            value={newParticipant.tax_code}
            onChange={handleInputChange}
            className="input-field"
            required
          />
          <button type="submit" className="btn-form">
            Aggiungi
          </button>
        </form>
      </div>

      {/* Rubrica Viaggio */}
      <div className="participants">
        {participants.length > 0 && (
          <section className="mt-4">
            <h2>Rubrica</h2>
            <input
              type="text"
              placeholder="Cerca partecipante..."
              value={searchUser}
              onChange={(e) => setSearchUser(e.target.value)}
              className="border p-2 mb-4 w-full"
            />
            {filteredParticipants.map((participant) => (
              <div key={participant.user_id} className="participant-card">
                <h4
                  onClick={() => toggleParticipantDetails(participant.user_id)}
                >
                  {participant.full_name}
                </h4>
                {/* Mostra le informazioni solo se il partecipante Ã¨ selezionato */}
                {selectedParticipant === participant.user_id && (
                  <div className="participant-details">
                    <p>Telefono: {participant.phone_number}</p>
                    <p>Email: {participant.email}</p>
                    <p>Codice Fiscale: {participant.tax_code}</p>
                  </div>
                )}
              </div>
            ))}
          </section>
        )}
      </div>
    </div>
  );
}
