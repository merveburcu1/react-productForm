import React from 'react'
import { useParams } from 'react-router-dom'
import AddProduct from './AddProduct';

const UpdateForm = () => {
  const {id}= useParams();
  console.log(id)
  return (
    <div>
      <AddProduct productId={id}  />
    </div>
  )
}

export default UpdateForm
