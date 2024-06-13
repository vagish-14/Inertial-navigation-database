import React from 'react'
import "./table.css";

const Table = ({products, setProduct, setView, deleteBox, deleteProductId}) => {
  return (
    <table class="fl-table">
    <thead>
    <tr>
        <th></th>
        <th>Product ID</th>
        <th>Name</th>
        <th colSpan={2}>Action</th>
    </tr>   
    </thead>
    <tbody>
        {
            products && products.map((product,i) => {
                return(
                    <tr>
                    <td>{i+1}</td>
                    <td>{product.productId}</td>
                    <td>{product.randomDataTitle1}</td>
                    <td><p className='btn-edit' onClick={()=>{setProduct(product?._id);setView()}}>View</p></td>
                    <td><p className='btn-del' onClick={() => {deleteBox();deleteProductId(product?._id)}}>Delete</p></td>       
                </tr>
                )
            })
        }
    </tbody>
</table>
  )
}

export default Table