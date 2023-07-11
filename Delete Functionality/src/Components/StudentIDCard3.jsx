import React, { useState } from "react";
import "./StudentIdCard.css";

export default function StudentIDCard3() {
  const [studentIDCard, setStudentIDCard] = useState([
    {
      key: 1,
      ID: 5579,
      FirstName: "Rohit",
      LastName: "Soni",
      DOB: "17/08/2000",
      userImage: "https://randomuser.me/api/portraits/men/75.jpg",
      C_Name: "Parul University",
      C_CollegeAddress: "Vadodara,Gujarat",
      C_CollegeLogo:
        "https://img.collegedekhocdn.com/media/img/institute/logo/WhatsApp_Image_2023-03-06_at_11.16.15_AM_MFoyM10.jpeg",
    },
    {
      key: 2,
      ID: 5579222,
      FirstName: "Rahul",
      LastName: "Soni",
      DOB: "17/08/2000",
      userImage: "https://randomuser.me/api/portraits/men/74.jpg",
      C_Name: "Parul University",
      C_CollegeAddress: "Vadodara,Gujarat",
      C_CollegeLogo:
        "https://img.collegedekhocdn.com/media/img/institute/logo/WhatsApp_Image_2023-03-06_at_11.16.15_AM_MFoyM10.jpeg",
    },
    {
      key: 3,
      ID: 55793333,
      FirstName: "Jay",
      LastName: "Soni",
      DOB: "17/08/2000",
      userImage: "https://randomuser.me/api/portraits/men/78.jpg",
      C_Name: "Parul University",
      C_CollegeAddress: "Vadodara,Gujarat",
      C_CollegeLogo:
        "https://img.collegedekhocdn.com/media/img/institute/logo/WhatsApp_Image_2023-03-06_at_11.16.15_AM_MFoyM10.jpeg",
    },
  ]);

  const handleDelte = (id) => {
    console.log(id);
    setStudentIDCard((oldvalues) => {
      return oldvalues.filter((currentValues) => currentValues.key !== id);
    });
  };

  return (
    <>
      <div className="container d-flex justify-content-between align-content-center flex-wrap p-3">
        {studentIDCard.map((studentCard) => {
          return (
            <>
              <div className="card" key={studentCard.key}>
                <div className="Section_1">
                  <div className="image_Container">
                    <img
                      src={studentCard.userImage}
                      alt="Employee/Student Image"
                      id="emp_image"
                    />
                  </div>
                  <div className="info_Container">
                    <p>
                      <strong>Student Id :</strong>
                      {studentCard.ID}
                    </p>
                    <p>
                      <strong>Name :</strong>
                      {`${studentCard.FirstName} ${studentCard.LastName}`}
                    </p>
                    <p>
                      <strong>Date Of Birth :</strong>
                      {studentCard.DOB}
                    </p>
                  </div>
                </div>
                <div className="Section_2">
                  <div className="info_Container">
                    <p>
                      <strong>College Name :</strong>
                      {studentCard.C_Name}
                    </p>
                    <p>
                      <strong>College Address :</strong>
                      {studentCard.C_CollegeAddress}
                    </p>
                  </div>
                  <div id="logo_Container">
                    <img
                      src={studentCard.C_CollegeLogo}
                      alt="Employee/Student Image"
                      id="logo_Css"
                    />
                  </div>
                </div>
                <div className="Section_3  d-flex justify-center">
                  <button
                    type="button"
                    className="btn btn-outline-primary"
                    id={studentCard.key}
                    onClick={() => handleDelte(studentCard.key)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}
