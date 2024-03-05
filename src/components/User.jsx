import { Outlet } from "react-router-dom";
import call from "../assets/Group 46@2x.png";
import moptro from "../assets/moptro logo-2@2x.png";
import doghouse from "../assets/house.png";
import user from "../assets/user.png";
import { useNavigate } from "react-router-dom";

const User = () => {
    const navigate = useNavigate();
  const handleDash = () =>{
    navigate("/user/dashboard");
  }

  const handleDetails = () =>{
    navigate("/user/details");
  }
  return (
    <div className="user">
      <div>
        <img id="call" src={call} alt="call"></img>
      </div>
      <img id="moptro" src={moptro} alt="moptro"></img>
      <Outlet />
      <div className="navigate">
        <button className="icons" onClick={handleDash}>
          <img src={doghouse} alt="doghouse"></img>
        </button>
        <button className="icons" onClick={handleDetails}>
          <img src={user} alt="user"></img>
        </button>
      </div>
    </div>
  );
};

export default User;
