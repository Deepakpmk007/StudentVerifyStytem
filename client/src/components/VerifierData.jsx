import { useState } from "react";
import Input from "./Input";

function VerifierData() {
  const [verName, setVerName] = useState("");
  const [verEmail, setVerEmail] = useState("");
  const [verNo, setVerNo] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const verifierData = {
      verName,
      verEmail,
      verNo
    }

    console.log(verifierData);
   
   
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Verifier Details</h1>

      <label htmlFor="verName">Verifier Name:</label>
      <Input
        id="verName"
        placeholder="Agency/Verifier Name"
        type="text"
        value={verName}
        onChange={(e) => setVerName(e.target.value)}
      />
      <br />

      <label htmlFor="verEmail">Email:</label>
      <Input
        id="verEmail"
        placeholder="Email"
        type="email"
        value={verEmail}
        onChange={(e) => setVerEmail(e.target.value)}
      />
      <br />

      <label htmlFor="verNo">Contact Number:</label>
      <Input
        id="verNo"
        placeholder="Contact Number"
        type="text"
        value={verNo}
        onChange={(e) => setVerNo(e.target.value)}
      />
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default VerifierData;
