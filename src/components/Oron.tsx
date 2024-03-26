import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
export const Oron= ()=>{
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const labels = ["January", "February", "March", "April", "May", "June", "July"];
const data = {
  labels,
  datasets: [
    {
      label: "Income",
      data: labels.map(() => {
        
        return Math.random() * 3000000;
      }),
      backgroundColor: "#84CC16",
      borderRadius: 30,
    },
    {
      label: "Expense",
      data: labels.map(() => {
        return Math.random() * 3000000;
      }),
      backgroundColor: "#F97316",
      borderRadius: 30,
    },
  ],
};


function Dashboard() {
  return (
    <div>
    <div
    style={{
      gap:"17px",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "0 20px",
      fontFamily:"sans-serif",
      borderBlockEnd:"1px solid #E5E7EB",
      height:"56px",
      
}}>
    <h3>Income - Expense</h3>
       
        </div>
        <div>
        <div style={{   height:"200px", width:"586px",gap:"17px",   justifyContent:"center", alignItems:"center",  display:"flex"  }}>
         <Bar
         style={{ height:"200px", width:"550px",marginTop:"30px" }}
      data={data}
        options={{
          plugins: {
            legend: {
              display: false
            },
          },
        }}
      />
         </div>
        </div>
        </div>
  );
  
}
return Dashboard()
}