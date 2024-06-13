import React, { useEffect, useState } from 'react'
import AddProduct from '../../Components/AddProduct/AddProduct'
import Table from '../../Components/Table/Table'
import "./rightPane.css"
import axios from "axios";
import ViewProduct from '../../Components/ViewProduct/ViewProduct';
import DeleteBox from '../../Components/DeleteBox/DeleteBox';

const RightPane = () => {
  const [display,setDisplay] = useState(0);
  const [products,setProducts] = useState([]);
  const [productView,setProductView] = useState(0);
  const [productId, setProductId] = useState("");
  const [deleteBox,setDeleteBox] = useState(0);
  const [deleteId, setDeleteId] = useState("");
  const [search,setSearch] = useState("");

  const fetchData = async() => {
    await axios.get('http://localhost:8080/api/products').then(response => {
      setProducts(response.data);
      console.log(response)
    })
  }

  useEffect(() => {
    fetchData();
  },[])

  const deleteProduct = async() => {
    console.log(deleteId)
    await axios.delete(`http://localhost:8080/api/product/delete?id=${deleteId}`).then(response => {
      setDeleteBox(0);
      window.location.reload();
    }).catch(err => {
      console.log(err);
    })
  }
  const handleChange = e => {
    setSearch(e.target.value);
  }
  let filteredProduct = products.filter(product => {return product.productId.includes(search)});

  return (
    <div className='right_pane'>
        <div className='header'>
            <h1>Inertial Navigation System</h1>
        </div>
        <div className='filter_box'>
            <input type="text" placeholder='search id...' className='searchbox' onChange={handleChange}/>
            <a className='btn_add' onClick={()=>{setDisplay(1)}}>Add New +</a>
        </div>
        <div style={{padding: "20px"}}>
            <Table products={filteredProduct}  setProduct={(id) => {setProductId(id)}} setView={()=>{setProductView(1)}} deleteBox={(id) => {setDeleteBox(1)}} deleteProductId={id => setDeleteId(id)} />
        </div>
        {display?<AddProduct close={() => {setDisplay(0)}}/>:null}
        {productView?<ViewProduct close={() => {setProductView(0)}} productId={productId}/>:null}
        {deleteBox?<DeleteBox close={() => {setDeleteBox(0)}}  deleteProduct={() => {deleteProduct()}} />:null}
    </div>
  )
}

export default RightPane