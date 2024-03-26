
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import styles from "../styles/addrecord.module.css";
import { Icon21 } from "@/components/icon/Icon21";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 735,
  height:455,
  
  bgcolor: 'background.paper',
//   border: '2px solid #000',
  boxShadow: 24,
  borderRadius:4,
  p: 4,
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
const [ transactionType, settransactionType ] = React.useState("expense")

  const incomes = () => {
   
    settransactionType("income")
    console.log(transactionType)
  }
  const expenses = () => {
    
    settransactionType("expense")
    console.log(transactionType)
  }
  return (
    <div>
      <Button 
      className={styles.nemehAdd} onClick={handleOpen}>Add
       <Icon21/>
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <div className={styles.container}>
      <div className={styles.ehnidiv}>
        <p>Add Record</p>
        {/* <button onClick={() => router.push("/record")} className={styles.garah}>
          <Icon20 />
        </button> */}
      </div>
      <div className={styles.zuunhagas}>
        <div className={styles.ExIn}>
          <button onClick={expenses} className={styles.Expense}>Expense</button>
            
          <button onClick={incomes} className={styles.Income}>Income</button>
        </div>
        <div className={styles.AmCaDa}>
          <input placeholder="MNT 000.00" className={styles.Amount}></input>
          <p className={styles.Categoryug}>Category</p>
          <select className={styles.Category}></select>
          <div className={styles.Dateug}>
             
            <p>Date</p>
          </div>
          <div className={styles.inputdad}>
            <select className={styles.Date}></select>
           
          </div>
          <button className={styles.Addrecord}>Add Record</button>
        </div>
      </div>
      <div className={styles.baruunhagas}>
        <div>
          <p>Note</p>
          <input placeholder="Write here" className={styles.writehere2}></input>
        </div>
      </div>
    </div>
        </Box>
      </Modal>
    </div>
  );
}
