import CardPic from "../../public/CardPic.png" 

export const Card = ({ }) => {
return(
<div style={{
backgroundImage:`url(${CardPic.src})`,
width:"384px",
height:"216px",
position:"relative",
}}  >
      
    <div style={{display:"flex", flexDirection:'column', position:'absolute', bottom:20, left:15}}>
<p style={{margin:0,opacity:'50%',fontSize:"16px",color:"#FFFFFF" , fontFamily:"sans-serif"  }}>Cash </p>
<p style={{margin:0, fontSize:"24px",color:"#FFFFFF", fontFamily:"sans-serif" }}>10,000,000</p>
    </div>
</div>
)}

