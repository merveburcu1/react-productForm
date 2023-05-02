import  React  from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';

import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button} from '@mui/material';
import ModalA from './modal';
import { useNavigate } from 'react-router-dom';
import { addProduct, updateProduct } from '../store/ProductSlice';
import { useDispatch, useSelector } from 'react-redux';



const  AddProduct =({productId}) =>{

  const products =useSelector((state)=>state.product?.list)
  console.log(products)

  const[code,setCode]=React.useState("");
  const[name,setName]=React.useState("");
  const[unit,setUnit]=React.useState("");
  const[type,setType]=React.useState("");
  const[stock,setStock]=React.useState("");

  const dispatch=useDispatch();
  const nav=useNavigate()
  
  function handleSave(){
    if(productId){
      dispatch(updateProduct({
        id:productId,
        code,
        name,
        unit,
        type,
        stock,
      }))
    }else{
      dispatch(addProduct({
        code,
        name,
        unit,
        type,
        stock,
      }))
    }
    nav("/")
  }
  React.useEffect(()=>{
    if(!productId || !products) return;
    const product=products&&products.find((product)=>product.id===productId);
    if(!product){
      nav("/")
    }else{
      setCode(product.code);
      setName(product.name);
      setUnit(product.unit);
      setType(product.type);
      setStock(product.stock);
    }
  },[nav, productId, products])

 
    
  return (
    <div style={{width:"100%", height:"100vh", display:'flex', justifyContent:'center', alignItems:'center'}}>
    <TableContainer component={Paper} sx={{ maxWidth: 400 }}>
        Ekleme Ekranı
      <Table  aria-label="simple table" >
      <TableBody>
        
          <TableRow>
            <TableCell>Ürün Kodu</TableCell>
            <TableCell   component="th" scope="row" ><input name='code' style={{borderRadius:5,borderColor:'inherit'}}value={code} onChange={(e)=>setCode(e.target.value)}></input></TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Ürün Tanımı</TableCell>
            <TableCell component="th" scope="row"><input name='name' style={{borderRadius:5,borderColor:'inherit'}}value={name} onChange={(e)=>setName(e.target.value)}></input></TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Birim</TableCell>
            <TableCell component="th" scope="row"> <ModalA value={unit} handleChange={setUnit} />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Ürün Tipi</TableCell>
            <TableCell component="th" scope="row">
            <select name="type" value={type} style={{borderRadius:5}} onChange={(e)=>setType(e.target.value)}  >
                        <option style={{  listStyle:'none', padding:8, borderRadius : 8,cursor:'default', borderBottom:'none'}} value="ürün">ürün</option >
                        <option value="hizmet">hizmet</option>
                      </select>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Stok Miktarı</TableCell>
            <TableCell component="th" scope="row"><input name='stok' type='number' value={stock} onChange={(e)=>setStock(e.target.value)} style={{borderRadius:5,borderColor:'inherit'}}></input></TableCell>
          </TableRow>       
        </TableBody>
        <TableCell>
        <Button  onClick={handleSave}>Kaydet</Button>
        </TableCell>
      </Table>
    </TableContainer>
   
    </div>
  );
}
export default AddProduct;