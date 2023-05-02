import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Select, TableBody, TableCell, TableRow } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 150,
  bgcolor: 'background.paper',
  border: 'inherit',
  boxShadow: 24,
  p: 4,
  borderRadius:2 ,
  
};

export default function ModalA({value,handleChange}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Birim Seçin</Button>
      <label>Birim : </label>

      <span>{value}</span>
      <Modal
      
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        
      >
        <TableBody>
            
        <Box sx={style}>
        <TableRow>
            <TableCell>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Birim Seçin
          </Typography>
          </TableCell>
          </TableRow>
          <TableCell>
          <select name="productType"  style={{borderRadius:5}}    onChange={(e) => {
                      handleChange(e.target.value)}} value={value} >
          <option style={{  listStyle:'none', padding:8, borderRadius : 8,cursor:'default', borderBottom:'none'}} value="kg">kg</option >
          <option style={{  listStyle:'none', padding:8, borderRadius : 8,cursor:'default', borderBottom:'none'}} value="adet">adet</option>
          <option style={{  listStyle:'none', padding:8, borderRadius : 8,cursor:'default', borderBottom:'none'}} value="m">m</option >
          </select>
          </TableCell>
          <Button onClick={handleClose}>Uygula</Button>
        </Box> 
        </TableBody>
      </Modal>
    </div>
  );
}
