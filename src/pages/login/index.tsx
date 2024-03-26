import { Icon } from "@/pages/icon/Icon";
import { Icon2 } from "@/pages/icon/Icon2";
import { Icon3 } from "@/pages/icon/Icon3";
import { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = async (email: string, password: string) => {
    console.log(email, password);
    const res = await axios.post("http://localhost:8000/login", {
      email: email,
      password: password,
    });
    console.log(res);

    if (res.status === 200) {
      alert(res.data.message);
      console.log(res);
      localStorage.setItem("user", "true");
      localStorage.setItem("userId", res.data._id);
      router.push("/");
    }
  };

  const changeRoute = ()=>{
    router.push('/Signup')
  }
  
  return (
    <div style={{ display: "flex" }}>
      <div style={{ width: "50vw", height: "100vh" }}>
        <div
          style={{
            width: "384px",
            height: "426.31px",
            marginTop: "276.84px",
            marginLeft: "382px",
            gap: "40px",
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <div
            style={{
              width: "92.24px",
              height: "34.41px",
              gap: "9.46px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "5.4px",
            }}
          >
            <Icon />
            <Icon2 />
          </div>
          <div
            style={{
              width: "287px",
              height: "64px",
              gap: "8px",
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              fontFamily: "sans-serif",
            }}
          >
            <p
              style={{
                fontSize: "23px",
                color: "#0F172A",
                lineHeight: "32px",
                fontWeight: "600",
                marginTop: "-2px",
              }}
            >
              Welcome Back
            </p>
            <p
              style={{
                fontSize: "15px",
                color: "#334155",
                lineHeight: "16px",
                fontWeight: "400",
                marginTop: "-15px",
              }}
            >
              Welcome back, Please enter your details
            </p>
          </div>
          <div
            style={{
              width: "384px",
              height: "176px",gap: "16px",display: "flex",justifyContent: "center",flexWrap: "wrap",
            }}
          >
            <input
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
       
              style={{
                width: "384px",height: "48px",backgroundColor: "#F3F4F6",borderRadius: "8px",border: "1px solid #D1D5DB",color: "#A3A3A3",paddingLeft: "19px",fontSize: "16px",
              }}
            ></input>
            <input
              placeholder="Password"
              value={password}
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              style={{width: "384px",height: "48px",backgroundColor: "#F3F4F6",borderRadius: "8px",border: "1px solid #D1D5DB",color: "#A3A3A3",paddingLeft: "19px",fontSize: "16px",
              }}
            ></input>
            <button
              onClick={() => loginUser(email, password)}
              
              style={{
  width: "384px",height: "48px",backgroundColor: "#0166FF",border: "none",borderRadius: "20px",fontSize: "20px",color: "#FFFFFF",lineHeight: "28px",fontWeight: "400",
              }}
            >
              Log in
              
            </button>
          </div>
          <div style={{ width: "220px", height: "32px" }}>
            <Icon3 />
            <button
            onClick={()=>changeRoute()}
              style={{width: "77px",height: "32px",color: "#0166FF",border: "none",fontSize: "16px",backgroundColor: "white",
              }}
            >
              Sign up
            </button>
          </div>
        </div>
      </div>
      <div
        style={{ width: "50vw", height: "100vh", backgroundColor: "#0166FF" }}
      ></div>
    </div>
  );
};
export default Login
