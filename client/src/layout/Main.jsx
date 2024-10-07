import VerifierData from "../components/VerifierData";
import StudentData from "../components/StudentData";
import { useState } from "react";

import style from "./Main.module.css";

function Main() {
  const [showStudentData, setShowStudentData] = useState(true);

  return (
    <div className={style.main}>
      {showStudentData ? <StudentData /> : <VerifierData />}
    </div>
  );
}

export default Main;
