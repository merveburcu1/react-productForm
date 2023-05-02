import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch, useSelector } from 'react-redux';
import { deleteProduct } from '../store/ProductSlice';




export default function ProductList() {
  const products =useSelector((state)=>state.product?.list)
  const dispatch=useDispatch();


  
  
  const handleDelete = (id) => {
    dispatch(deleteProduct(id))}

const nav=useNavigate()
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Ürün Kodu</TableCell>
            <TableCell align="right">Ürün Tanımı</TableCell>
            <TableCell align="right">Birim</TableCell>
            <TableCell align="right">Ürün Tipi</TableCell>
            <TableCell align="right">Stok Miktarı</TableCell>
            <TableCell align="right">İşlemler</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
         {products && products.map((product)=>(
            <TableRow key={product.id}
             
            >
              <TableCell component="th" scope="row">
                {product.code}
              </TableCell>
              <TableCell align="right">{product.name}</TableCell>
              <TableCell align="right">{product.unit}</TableCell>
              <TableCell align="right">{product.type}</TableCell>
              <TableCell align="right">{product.stock}</TableCell>
              <TableCell align="right " sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "flex-end",
                }} >
              <Button variant="outlined" onClick={() => handleDelete(product.id)} startIcon={<DeleteIcon />  }>Sil</Button>
              <Button  onClick={()=>nav(`/update/${product.id}`)} >Güncelle</Button>
              </TableCell>
            </TableRow>
            ))}

        
        </TableBody>
      </Table>
    </TableContainer>
  );
}