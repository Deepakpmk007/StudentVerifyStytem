import { useState } from "react";
import Input from "./Input";
import File from "./File";
import style from "./StudentData.module.css";
import styleInput from "./input.module.css";

function StudentData() {
  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  const [regNo, setRegNo] = useState("");
  const [institution] = useState("Government College of Engineering Srirangam"); // Static value
  const [university] = useState("Anna University"); // Static value
  const [degree] = useState("B.E"); // Static value
  const [branch, setBranch] = useState("");
  const [branchShort, setBranchShort] = useState("");
  const [studyPeriod, setStudyPeriod] = useState("");
  const [monthYearPassing, setMonthYearPassing] = useState("");
  const [CGPA, setCGPA] = useState("");
  const [remarks, setRemarks] = useState("");
  const [backlogs, setBacklogs] = useState("");
  const [classObtained, setClassObtained] = useState("");
  const [files, setFiles] = useState([]);
  const [fileInputs, setFileInputs] = useState([0]);

  const departments = [
    { name: "Computer Science and Engineering", shortForm: "CSE" },
    { name: "Civil Engineering", shortForm: "CIVIL" },
    { name: "Electronics and Communication Engineering", shortForm: "ECE" },
    { name: "Electrical and Electronics Engineering", shortForm: "EEE" },
    { name: "Mechanical Engineering", shortForm: "MECH" },
  ];

  const handleDeptChange = (e) => {
    const selectedShortDept = e.target.value;
    const department = departments.find(
      (dept) => dept.shortForm == selectedShortDept
    );

    if (selectedShortDept) {
      setBranch(department.name);
      setBranchShort(selectedShortDept);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    function getUniqueId() {
      return new Date().getFullYear() + branchShort + regNo;
    }

    const studentData = {
      uniqueId: getUniqueId(),
      name,
      dob,
      regNo,
      institution,
      university,
      degree,
      branch,
      studyPeriod,
      monthYearPassing,
      CGPA,
      remarks,
      backlogs,
      files: files.map((file) => file.name),
    };

    console.log("Student Data:", studentData);
  };

  const handleFileChange = (event, index) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      setFiles((prevFiles) => {
        const newFiles = [...prevFiles];
        newFiles[index] = selectedFile;
        return newFiles;
      });
    }
  };

  const handleMoreDocs = (e) => {
    e.preventDefault();
    setFileInputs((prevInputs) => [...prevInputs, prevInputs.length]);
  };

  return (
    // Student Data container starts here
    <form onSubmit={handleSubmit} className={style.studentDataContainer}>
      {/* student data title starts here */}
      <div className={style.studentTitle}>
        <h1>Student Details</h1>
      </div>
      {/* student data title ends here */}

      {/*  */}
      {/* Student Input Container starts here */}
      <div className={style.studentInputContainer}>
        <div className={style.studentInput}>
          {/* 1. Student Name */}
          <label htmlFor="studentName">Student Name:</label>
          <Input
            id="studentName"
            placeholder="Name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className={style.studentInput}>
          {" "}
          {/* 2. Date of Birth */}
          <label htmlFor="dob">Date of Birth:</label>
          <Input
            id="dob"
            placeholder="D.O.B"
            type="date"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
          />
        </div>

        <div className={style.studentInput}>
          {" "}
          {/* 3. Register Number */}
          <label htmlFor="regNo">Register Number:</label>
          <Input
            id="regNo"
            placeholder="Register Number"
            type="text"
            value={regNo}
            onChange={(e) => setRegNo(e.target.value)}
          />
        </div>

        <div className={style.studentInput}>
          {/* 4. Institution Name */}
          <label htmlFor="institution">Institution Name:</label>
          <Input
            id="institution"
            placeholder="College Name"
            type="text"
            value={institution}
            readOnly
          />
        </div>

        <div className={style.studentInput}>
          {" "}
          {/* 5. Affiliated University */}
          <label htmlFor="university">Affiliated University:</label>
          <Input
            id="university"
            placeholder="Affiliated University"
            type="text"
            value={university}
            readOnly
          />
        </div>

        <div className={style.studentInput}>
          {/* 6. Degree */}
          <label htmlFor="degree">Degree:</label>
          <Input
            id="degree"
            placeholder="Degree"
            type="text"
            value={degree}
            readOnly
          />
        </div>

        <div className={style.studentInput}>
          {" "}
          {/* 7. Branch */}
          <label htmlFor="branch">Select Department:</label>
          <select
            id="branch"
            onChange={handleDeptChange}
            className={styleInput.input}
          >
            <option value="">--Select a Department--</option>
            {departments.map((dept, index) => (
              <option key={index} value={dept.shortForm}>
                {dept.name}
              </option>
            ))}
          </select>
        </div>
        <div className={style.studentInput}>
          {/* 8. Tenure of Study */}
          <label htmlFor="studyPeriod">Tenure of Study:</label>
          <Input
            id="studyPeriod"
            placeholder="like 2021 - 2025"
            type="text"
            value={studyPeriod}
            onChange={(e) => setStudyPeriod(e.target.value)}
          />
        </div>

        <div className={style.studentInput}>
          {" "}
          {/* 9. Month & Year of Passing */}
          <label htmlFor="monthYearPassing">Month & Year of Passing:</label>
          <Input
            id="monthYearPassing"
            placeholder="like APR 2024"
            type="text"
            value={monthYearPassing}
            onChange={(e) => setMonthYearPassing(e.target.value)}
          />
        </div>

        <div className={style.studentInput}>
          {/* 10. CGPA */}
          <label htmlFor="CGPA">CGPA:</label>
          <Input
            id="CGPA"
            placeholder="CGPA"
            type="text"
            value={CGPA}
            onChange={(e) => setCGPA(e.target.value)}
          />
        </div>

        <div className={style.studentInput}>
          {/* 11. Class Obtained */}
          <label htmlFor="class">Class Obtained:</label>
          <Input
            id="class"
            placeholder="Class obtained"
            type="text"
            value={classObtained}
            onChange={(e) => setClassObtained(e.target.value)}
          />
        </div>

        <div className={style.studentInput}>
          {" "}
          {/* 12. Backlogs */}
          <label htmlFor="backlogs">Backlogs:</label>
          <select
            id="backlogs"
            onChange={(e) => setBacklogs(e.target.value)}
            className={styleInput.input}
          >
            <option key="yes" value="Yes">
              Yes
            </option>
            <option key="no" value="No">
              No
            </option>
          </select>
        </div>

        <div className={style.studentInput}>
          {/* 13. Remarks */}
          <label htmlFor="remarks">Remarks:</label>
          <textarea
            id="remarks"
            className={styleInput.input}
            placeholder=""
            rows={2}
            cols={30}
            value={remarks}
            onChange={(e) => setRemarks(e.target.value)}
          />
          <br />
        </div>
      </div>
      {/* Student Input Container ends here */}

      {/* Student Document Container starts here */}
      {/* ====================================================== */}
      <div className={style.studentDocumentContainer}>
        {/* 14. File Upload */}
        {/* document title container starts here */}
        <div className={style.documentTitle}>
          <h1>Document Details</h1>
        </div>
        {/* document title container ends here */}
        {/* Show MoreBtn if at least one file is uploaded */}
        {files.length > 0 && (
          <button type="button" onClick={handleMoreDocs}>
            Verify More Documents
          </button>
        )}

        {/*student document input container starts here */}
        <div className={style.documentInput}>
          {fileInputs.map((input, index) => (
            <File
              key={index}
              index={index}
              onChange={(e) => handleFileChange(e, index)}
            />
          ))}
        </div>

        {/* student document input container ends here */}
        <button type="submit" className={style.studentSubmit}>
          Submit
        </button>
      </div>

      {/* ============================================= */}
      {/* Student Document Container ends here */}
    </form>
    // Student Data container ends here
  );
}

export default StudentData;
