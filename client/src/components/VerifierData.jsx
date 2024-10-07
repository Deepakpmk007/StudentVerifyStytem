import { useState } from "react";
import Input from "./Input";
import style from "./StudentData.module.css";
import { useNavigate } from "react-router-dom";

function VerifierData() {
  const [verName, setVerName] = useState("");
  const [verEmail, setVerEmail] = useState("");
  const [verNo, setVerNo] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    const verifierData = {
      verName,
      verEmail,
      verNo,
    };

    console.log(verifierData);
  };

  return (
    <form onSubmit={handleSubmit} className={style.dataContainer}>
      <div className={style.title}>
        <h1>Agency/Verifier Details</h1>
      </div>
      <div className={style.inputContainer}>
        <div className={style.input}>
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
        </div>
      </div>
      <button
        onClick={() => {
          navigate("/");
        }}
        className={style.btn}
      >
        back
      </button>
      <button type="submit" className={style.btn}>
        Submit
      </button>
    </form>
  );
}

export default VerifierData;
