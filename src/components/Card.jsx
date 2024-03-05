/* eslint-disable react/prop-types */

const Card = ({ empid, name, dob, role }) => {
  return (
    <>
      <div className="card">
        <p>EMP ID : {empid}</p>
        <p>Name &nbsp; : {name}</p>
        <p>
          DOB &nbsp;&nbsp;&nbsp; : <span className="dob">{dob}</span>
        </p>
        <p>
          Role &nbsp;&nbsp;&nbsp;&nbsp;: <span className="role">{role}</span>
        </p>
      </div>
    </>
  );
};

export default Card;
