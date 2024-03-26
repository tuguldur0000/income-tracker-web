// import { Icon14 } from "@/components/icon/Icon14";
import { Icon17} from "@/components/icon/Icon17";
export const Toyes = ({amount, title,date}) => {
  return (
    <div
      style={{
        width: "894px",
        height: "64px",
        display: "flex",
        alignItems: "center",
        borderRadius:"12px",
        marginTop:"11px",
        border:"1px solid #E5E7EB",
        backgroundColor:"#FFFFFF"
        
      }}
    >
      <div style={{marginLeft:"70px"}}>
     <Icon17/>
      </div>
      <div
        style={{
          width: "140px",
          height: "50px",
          display: "flex",
          flexWrap: "wrap",
          marginLeft: "10px",
        }}
      >
        <p
          style={{
            fontFamily: "sans-serif",
            fontSize: "16px",
            marginTop: "3px",
          }}
        >
          {title}
        </p>
        <p
          style={{
            fontFamily: "sans-serif",
            fontSize: "12px",
            color: "#6B7280",
            marginTop: "-7px",
          }}
        >
            
         {date}
       
        </p>
         
        <div style={{ marginLeft: "700px", marginTop: "-40px" }}>
           <div   style={{color:"#84CC16"}}>    {amount}  </div> </div>
      </div>
    </div>
  );
};
