import { Button, Container } from '@mui/material'
import React from 'react'
import ProductList from '../components/ProductList'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const nav=useNavigate();

  return (
    <div style={{margin:'auto', paddingTop:50}}>
        <Container> 
        <Button variant="contained" onClick={()=>nav("/add")} >Ekle</Button>
        <ProductList/>
        </Container>
      
    </div>
  )
}

export default Home
