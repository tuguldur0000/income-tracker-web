/* eslint-disable max-lines */
"use client";
// import { Icon } from "@/pages/icon/Icon";
// import { Icon2 } from "@/pages/icon/Icon2";
// import { Icon4 } from "@/pages/icon/Icon4";
import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/router";
import { Icon4 } from "@/components/icon/Icon4";
const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [userNameError, setUserNameError] = useState("");
  const [name, setName]=useState("");
  const router = useRouter();

  const handleSignUp = async () => {

    if (userNameError === "") {
      setUserNameError("Please enter your username");
    } else if (email.length <= 5) {
      setUserNameError("UserName must be more than 4 characters");
    } else if (confirmPassword !== password) {
      setUserNameError("2 password is diffrent");
    } else {
      setUserNameError("");
    }

    const res = await axios.post("http://localhost:8000/signup", {
      email: email,
      name:name,    
      password: password,
    }); 
    console.log(res);
  };

  const handleChangeEmail = (event: { target: { value: string } }) => {
    setEmail(event.target.value);
  };
  const handleChangePassword = (event: { target: { value: string } }) => {
    setPassword(event.target.value);
  };
  const handleChangeConfirmPassword = (event: {
    target: { value: string };
  }) => {
    setConfirmPassword(event.target.value);
  };
  const handleChangeName= (event:  {target:  {value:string}  } )=>{
    setName(event.target.value);
  }
  const changeRoute = ()=>{
    router.push('/login')
  }
  return (
    <div style={{ display: "flex" }}>
      <div style={{ width: "50vw", height: "100vh" }}>
        <div
          style={{
            width: "384px",
            height: "554.31px",
            marginLeft: "382px",
            marginTop: "235px",
            gap: "40px",
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <div
            style={{
              width: "92.34px",
              height: "34.41px",
              gap: "9.46px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            {/* <Icon /> <Icon2 /> */}
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              fontFamily: "sans-serif",
              width: "311px",
              height: "64px",
              marginTop: "-73px",
              alignItems: "center",
            }}
          >
            <div style={{ height: "32px" }}>
              <h1
                style={{
                  fontWeight: "600",
                  fontSize: "23px",
                  lineHeight: "32px",
                  color: "#0F172A",
                  marginTop: "-3px",
                }}
              >
                Create Geld account
              </h1>
            </div>
            <div style={{ height: "24px" }}>
              <p
                style={{
                  fontWeight: "400",
                  fontSize: "15px",
                  lineHeight: "24px",
                  color: "#334155",
                  marginTop: "3px",
                }}
              >
                Sign up below to create your Wallet account{" "}
              </p>
            </div>
          </div>
          <div
            style={{
              width: "384px",
              height: "304px",
              gap: "16px",
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              marginTop: "-75px",
              alignItems: "center",
            }}
          >
            <input
              placeholder="Name"
              onChange={handleChangeName}
              style={{
                paddingLeft: "19px",
                width: "384px",
                height: "48px",
                border: "1px solid #D1D5DB",
                borderRadius: "8px",
                backgroundColor: "#F3F4F6",
                color: "#A3A3A3",
                fontSize: "16px",
                lineHeight: "24px",
                fontWeight: "400",
              }}
            ></input>
            <input
              placeholder="Email"
              onChange={handleChangeEmail}
              style={{
                paddingLeft: "19px",
                width: "384px",
                height: "48px",
                border: "1px solid #D1D5DB",
                borderRadius: "8px",
                backgroundColor: "#F3F4F6",
                color: "#A3A3A3",
                fontSize: "16px",
                lineHeight: "24px",
                fontWeight: "400",
              }}
            ></input>
            <input
              placeholder="Password"
              type="password"
              onChange={handleChangePassword}
              style={{
                paddingLeft: "19px",
                width: "384px",
                height: "48px",
                border: "1px solid #D1D5DB",
                borderRadius: "8px",
                backgroundColor: "#F3F4F6",
                color: "#A3A3A3",
                fontSize: "16px",
                lineHeight: "24px",
                fontWeight: "400",
              }}
            ></input>
            <input
              placeholder="Re-assword"
              type="password"
              onChange={handleChangeConfirmPassword}
              style={{
                paddingLeft: "19px",
                width: "384px",
                height: "48px",
                border: "1px solid #D1D5DB",
                borderRadius: "8px",
                backgroundColor: "#F3F4F6",
                color: "#A3A3A3",
                fontSize: "16px",
                lineHeight: "24px",
                fontWeight: "400",
              }}
            ></input>
            <button
              style={{
                width: "384px",
                height: "48px",
                borderRadius: "20px",
                backgroundColor: "#0166FF",
                fontSize: "20px",
                lineHeight: "28px",
                fontWeight: "400",
                border: "none",
                color: "#FFFFFF",
              }}
              onClick={handleSignUp}
            >
              Sign up
            </button>
          </div>
        </div>
        <div
          style={{
            width: "228px",
            height: "32px",
            paddingLeft: "470px",
            marginTop: "-35px",
          }}
        >
          <Icon4 />
          <button
            onClick={()=>changeRoute()}
            style={{
              color: "#0166FF",
              width: "68px",
              height: "32px",
              fontSize: "16px",
              fontWeight: "400",
              lineHeight: "24px",
              backgroundColor: "white",
              border: "none  ",
            }}
          >
            Log in
          </button>
        </div>
      </div>
      <div
        style={{ width: "50vw", height: "100vh", backgroundColor: "#0166FF" }}
      ></div>
    </div>
  );
};
export default Signup;
