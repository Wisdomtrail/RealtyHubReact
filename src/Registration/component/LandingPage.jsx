import React, { useState } from "react";
import "../style/SignUp.css";
import th from '../../assets/image/th.jpeg';
import searchButton from '../../assets/image/searchButton.jpeg'
import axios from 'axios'
import {ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useNavigate } from 'react-router-dom';



const Register = () => {
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isBlurry, setIsBlurry] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const openRegistrationForm = () => {
    setIsRegistrationOpen(!isRegistrationOpen);
    setIsLoginOpen(false);
    setIsBlurry(!isBlurry);
  };
  const notifyInfo = (arg) => {
    toast.info(arg, {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };
const notifySuccess = (arg) => {
  toast.success(arg, {
    position: "top-center",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    });
  };
const notifyRedir = (arg) => {
  toast.info(arg, {
    position: "top-center",
    autoClose:5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
}
const notifyError= (arg) => {
  toast.error(arg, {
    position: "top-center",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("Fields --> ",  password, email);
    const URL = "http://localhost:8080/api/v1/user";
    let item = {
      email,
      password,
    };

    if (email !== "" && password !== "") {
      const response = await axios
        .post(URL, item)
        .then((res) => {
          return res.data;
      
        })
        .catch((error) => {
          return error;
        });
     

      console.log("res --> ", response);

        if (response.name === "AxiosError") {
          notifyError("Registration failed. Kindly try again!");
        }
        else {
          notifySuccess(response.message)
          localStorage.setItem('email', email)
          setTimeout(()=>{
            notifyRedir("We've sent a verification link to your email");
          }, 2000);
        }
    } else {
      notifyInfo("Please fill the form below!");
    }
    
  };

const handleLoginSubmit = async (event) => {
  event.preventDefault();
  console.log("Fields --> ",  password, email);
  const URL = "http://localhost:8080/api/v1/login";
  let item = {
    email,
    password,
  };

  if (email !== "" && password !== "") {
    const response = await axios
      .post(URL, item)
      .then((res) => {
        return res.data;
    
      })
      .catch((error) => {
        return error;
      });
   

    console.log("res --> ", response);

      if (response.name === "AxiosError") {
        notifyError("Login Failed! Incorrect Email or Password");
      }
      else {
        notifySuccess("Login successful");
        setTimeout(() => {
          navigate("/dashboard");
        }, 2000);
      }
  } else {
    notifyInfo("Please fill the form below!");
    }
    
  };
  
 
  const search = () => {
  };
  
  const openLoginForm = () => {
    setIsRegistrationOpen(false);
    setIsLoginOpen(!isLoginOpen);
    setIsBlurry(!isBlurry);
  };

  return (
    <div className="mainContainers">
      <div className="topNav">
        <h2 className="realtyHub">RealtyHub</h2>
        <button onClick={openRegistrationForm} className="RegisterBtn" >Register</button>
        <button onClick={openLoginForm}>Login</button>
        <button>Help</button>
        <button>About us</button>
      </div>
      <br />
      <div className="imgContainer">
      <h1 className="welcomeText">Find Home Together</h1>
        <h1 className="welcome">Find your next roommate or room to rent</h1>
        <div>
          <input type="text" placeholder="Enter an address, neighbothood, city or zip Code" />
          <img src={searchButton} alt="" onClick={search} />
        </div>
      </div>
      <div className="properties">
        <div className="f">
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className="s">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      {isRegistrationOpen && (
        <div className="formContainer">
          <div className="formContent">
            <button className="closeButton" onClick={openRegistrationForm}>
              X
            </button>
            <form className="form" action="" onSubmit={handleSubmit}>
              <h2>Welcome to RealtyHub</h2>
              <img className="house" src={th} alt="" />
              <input type="email" placeholder=" Enter Email" value={email} onChange={e => setEmail(e.target.value)} />
              <input type="password" maxLength={8} placeholder=" Create Password" value={password} onChange={e => setPassword(e.target.value)} />
              <div className="passwordInstruction">
                Atleast 8 characters <br />
                Mix of letters and numbers <br />
                Atleast 1 special characters <br />
                Atleast 1 uppercase and 1 lowercase
              </div>
              <br />
              <br />
              <button type="submit">
                Register
              </button>
              <ToastContainer/>
            </form>
          </div>
        </div>
      )}
      {isLoginOpen && (
        <div className="formContainer">
          <div className="formContent">
            <button className="closeButton" onClick={openLoginForm}>
              X
            </button>
            <form className="form" onSubmit={handleLoginSubmit}>
              <h2>Welcome to RealtyHub! Log in to your account</h2>
              <img className="house" src={th} alt="" />
              <br />
              <input type="email" placeholder="Enter Email" value={email} onChange={e => setEmail(e.target.value)} />
              <br />
              <input type="password" placeholder="Enter Password" value={password} onChange={e => setPassword(e.target.value)} />
              <br />
              <br />
              <button type="submit">
                Login
              </button>
              <ToastContainer/>
              <br />
              <br />
            </form>
          </div>
        </div>
      )}
      <div>
        <h1 className="why">Why use RealtyHub?</h1>
        </div>
        <div className="whyText">
        <p>Every 3 minutes someone finds a <br /> roommate on RealtyHub. <br />
          With the biggest selection of ads, <br />
          you'll find yours.</p>
        <p>Your safety is our top priority. <br/>We have a team of moderators <br /> working 7 days a week to check <br /> ads and content.</p>
        <p>Everyone's idea of the perfect <br /> roommate is different, so search <br /> based on what's important to you.</p>
        </div>
        <div className="bottomNav">
        <div className="Info">
          <h3>Information for roommates</h3>
          <a href=" ">Info for roommates</a><br /> <br />
          <a href=" ">The right to have a roommate</a>
          <p></p>
        </div>
        <div className="About">
          <h3>About us</h3>
          <p>About RealtyHub</p>
          <p>How RealtyHub works</p>
          <p>Terms and conditions</p>
          <p>Privacy policy</p>
        </div>
        <div className="ContactUs">
          <h3>Contact us/Need help?</h3>
          <p>Contact us</p>
          <p>Feedback</p>
        </div>
        </div>
    </div>
  );
};
export default Register;
