/* eslint-disable max-lines */
import { Icon7 } from "@/components/icon/Icon7";
import { Icon8 } from "@/components/icon/Icon8";
import { Icon9 } from "@/components/icon/Icon9";
import { Icon10 } from "@/components/icon/Icon10";
import { Icon11 } from "@/components/icon/Icon11";

import { Last } from "@/components/last";
import { Card } from "@/components/Card";
import { Dou } from "@/components/Nut";
import { Oron } from "@/components/Oron";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const record=()=>{
    router.push('record')
  }
  return (
    <div
      style={{
        width: "100vw",
        height: "200vh",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
        backgroundColor: "whitesmoke",
      }}
    >
      <div
        style={{
          width: "100vw",
          height: "72px",
          padding: "16px , 120px, 16px, 120px",
          justifyContent: "space-between",
          display: "flex",
          flexWrap: "wrap",
          backgroundColor: "#FFFFFF",
        }}
      >
        <div
          style={{
            width: "225.4px",
            height: "40px",
            gap: "24px",
            display: "flex",
            alignItems: "center",
            marginTop: "15px",
            marginLeft: "505px",
          }}
        >
          <Icon7 />
          <h1
            style={{
              fontSize: "16px",
              fontWeight: "600",
              alignItems: "center",
              lineHeight: "24px",
              color: "#0F172A",
              fontFamily: "sans-serif",
            }}
            
          >
            Dashboard
          </h1>
          <h1
            style={{
              fontSize: "16px",
              fontWeight: "400",
              lineHeight: "24px",
              alignItems: "center",
              color: "#0F172A",
              fontFamily: "sans-serif",
            }}
            onClick={record}
          >
            Records
          </h1>
        </div>
        <div
          style={{
            width: "163px",
            height: "40px",
            gap: "24px",
            display: "flex",
            alignItems: "center",
            marginTop: "15px",
            marginRight: "505px",
          }}
        >
          <button
            style={{
              width: "99px",
              height: "32px",
              borderRadius: "20px",
              gap: "10px",
              backgroundColor: "#0166FF",
              border: "none",
              color: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            type="button"
            onClick={() => router.push("/record")}
          >
            <Icon8 />
            <p>Record</p>
          </button>
          <img
            style={{ width: "40px", height: "40px", borderRadius: "50%" }}
            src="https://i.pinimg.com/736x/c0/5c/0a/c05c0aa478293de9c04130482f576011.jpg"
          ></img>
        </div>
      </div>
      <div
        style={{
          gap: "30px",
          width: "1500px",
          height: "220px",
          display: "flex",
          marginTop: "-430px",
        }}
      >
        <div
          style={{
            width: "384px",
            height: "214px",
            borderRadius: "18px",
            marginLeft: "140px",
            backgroundColor: "#FFFFFF",
          }}
        >
          {" "}
          <Card />{" "}
        </div>

        <div
          style={{
            width: "384px",
            height: "214px",
            borderRadius: "12px",
            backgroundColor: "#FFFFFF",
          }}
        >
          <div
            style={{
              width: "384px",
              height: "56px",
              borderBlockEnd: "1px solid #E2E8F0",
              padding: "16px, 24px, 16px, 24px",
              gap: "8px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <div
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "50px",
                backgroundColor: "#84CC16",
                marginLeft: "20px",
              }}
            ></div>
            <p style={{ fontFamily: "sans-serif" }}>Your Income</p>
          </div>
          <h1 style={{ marginLeft: "25px", fontFamily: "sans-serif" }}>
            1,200,000
            <Icon9 />
          </h1>
          <p
            style={{
              marginLeft: "25px",
              fontFamily: "sans-serif",
              color: "#64748B",
            }}
          >
            Your Income Amount
          </p>
          <div
            style={{
              width: "290px",
              height: "29px",
              display: "flex",
              fontFamily: "sans-serif",
              color: "#000000",
              alignItems: "center",
              marginLeft: "24px",
            }}
          >
            <Icon10 />{" "}
            <p style={{ marginLeft: "10px" }}>32% from last mounth </p>
          </div>
        </div>

        <div
          style={{
            width: "384px",
            height: "214px",
            borderRadius: "12px",
            backgroundColor: "#FFFFFF",
          }}
        >
          <div
            style={{
              width: "384px",
              height: "56px",
              borderBlockEnd: "1px solid #E2E8F0",
              padding: "16px, 24px, 16px, 24px",
              gap: "8px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <div
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "50px",
                backgroundColor: "#0166FF",
                marginLeft: "20px",
              }}
            ></div>
            <p style={{ fontFamily: "sans-serif" }}>Total Expenses</p>
          </div>
          <h1 style={{ marginLeft: "25px", fontFamily: "sans-serif" }}>
            -1,200,000
            <Icon9 />
          </h1>
          <p
            style={{
              marginLeft: "25px",
              fontFamily: "sans-serif",
              color: "#64748B",
            }}
          >
            Your Income Amount
          </p>
          <div
            style={{
              width: "290px",
              height: "29px",
              display: "flex",
              fontFamily: "sans-serif",
              color: "#000000",
              alignItems: "center",
              marginLeft: "24px",
            }}
          >
            <Icon11 />{" "}
            <p style={{ marginLeft: "10px" }}>32% from last mounth </p>
          </div>
        </div>
      </div>

      <div
        style={{
          width: "1400px",
          height: "284px",
          display: "flex",
          marginTop: "-660px",
          gap: "30px",
        }}
      >
        <div
          style={{
            width: "588px",
            height: "284px",
            borderRadius: "20px",
            backgroundColor: "#FFFFFF",
            marginLeft: "95px",
            justifyContent: "center",
            alignItems: "center",
            // display:"flex"
          }}
        >
          <Oron />
        </div>

        <div>
          <div>
            <Dou />
          </div>
        </div>
      </div>

      <div
        style={{
          width: "1200px",
          height: "456px",
          borderRadius: "12px",
          marginLeft: "0px",
          marginTop: "-815px",
          backgroundColor: "#FFFFFF",
        }}
      >
        <div
          style={{
            width: "1200px",
            height: "56px",
            gap: "8px",
            display: "flex",
            alignItems: "center",
            borderBlockEnd: "1px solid #E2E8F0",
          }}
        >
          <p style={{ fontFamily: "sans-serif", marginLeft: "25px" }}>
            {" "}
            Last Records
          </p>
        </div>

        <Last amount={-8000} title="Lending & Renting" date="2023-12-11" />
        <Last amount={-1000} title="Lending & Renting" date="2023-12-20" />
        <Last amount={-1000} title="Lending & Renting" date="2024-1-11" />
        <Last amount={-2000} title="Lending & Renting" date="2024-2-11" />
        <Last amount={-9000} title="Lending & Renting" date="2024-3-19" />
      </div>
    </div>
  );
}
