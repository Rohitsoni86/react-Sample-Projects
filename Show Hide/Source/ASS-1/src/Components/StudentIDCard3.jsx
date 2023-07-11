import React, { useState } from "react";
import "./StudentIdCard.css";

export default function StudentIDCard3() {
  const [studentIDCard, setStudentIDCard] = useState([
    {
      key: 1,
      ID: 5579,
      show: false,
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
      show: false,
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
      show: false,
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
    // let card = studentIDCard.filter((currentValues) => currentValues.key == id);
    // let card = prevData.filter((currentValues) => currentValues.key == id);
    // card[0].show = !card[0].show;

    // console.log(id);

    let DATA = [...studentIDCard];
    DATA[id - 1].show = !DATA[id - 1].show;
    setStudentIDCard(DATA);

    // setStudentIDCard((prevData) => {
    //   prevData.map((e, index) => {
    //     if (e.key == id) {
    //       return { ...e, show: false };
    //     }
    //   });
    // });

    // let change = !card[0].show;
    // let changeCardData = { ...card,{...card[0], show: change }};
    // card[0].show = !card[0].show;
    // console.log(card);

    // setStudentIDCard((preData) => ({ ...preData, changeCardData }));
    // setStudentIDCard(...studentIDCard, ...studentIDCard.filter((currentValues) => currentValues.key == id));
    // console.log(idCard);
    // ✅ Find the first object that matches a condition
    //         const found = arr.find(obj => {
    //        return obj.id === 1;
    // });

    // let card = [...studentIDCard];

    // let mySelectedCard = card.find((obj) => {
    //   return obj.key === id;
    // });
    // console.log(mySelectedCard);

    // mySelectedCard.show = true;

    // console.log(mySelectedCard);

    // let newUpdatedData = studentIDCard.map((obj) => {
    //   if (obj.show === true) {
    //     return { ...obj, show: false };
    //   }

    // else if (obj.show === false) {
    //   return { ...obj, show: true };
    // }

    // return obj;
    // });

    // console.log(newUpdatedData);
    // setStudentIDCard(newUpdatedData);
  };

  return (
    <>
      <div className="container d-flex justify-content-between align-content-center flex-wrap p-3">
        {studentIDCard?.map((studentCard) => {
          return (
            <div className="card" key={studentCard.key}>
              <>
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
                {studentCard.show ? (
                  <>
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
                  </>
                ) : (
                  ""
                )}

                <div className="Section_3  d-flex justify-center">
                  <button
                    type="button"
                    className="btn btn-outline-primary"
                    id={studentCard.key}
                    onClick={() => handleDelte(studentCard.key)}
                  >
                    {studentCard.show
                      ? "Hide College Information"
                      : "Show College Information"}
                  </button>
                </div>
              </>
            </div>
          );
        })}
      </div>
    </>
  );
}
