import React, { useEffect, useState } from 'react'
import "./viewProduct.css";
import { AiOutlineClose } from 'react-icons/ai';
import axios from "axios";

const ViewProduct = ({close,productId}) => {
  const [product,setProduct]=useState({});

//   const [details,setDetails] = useState({
//     productId: "",
//     name: "",
//     randomDataTitle1: "",
//     rd1info1: "",
//     rd1info1File: "",
//     rd1info2: "",
//     rd1info2File: "",
//     rd1info3: "",
//     rd1info3File: "",
//     rd1info4: "",
//     rd1info4File: "",
//     rd1info5: "",
//     rd1info5File: "",
//     randomDataTitle2: "",
//     rd2info1: "",
//     rd2info1File: "",
//     rd2info2: "",
//     rd2info2File: "",
//     rd2info3: "",
//     rd2info3File: "",
//     rd2info4: "",
//     rd2info4File: "",
//     rd2info5: "",
//     rd2info5File: "",
//     randomDataTitle3: "",
//     rd3info1: "",
//     rd3info1File: "",
//     rd3info2: "",
//     rd3info2File: "",
//     rd3info3: "",
//     rd3info3File: "",
//     rd3info4: "",
//     rd3info4File: "",
//     rd3info5: "",
//     rd3info5File: "",
//     randomDataTitle4: "",
//     rd4info1: "",
//     rd4info1File: "",
//     rd4info2: "",
//     rd4info2File: "",
//     rd4info3: "",
//     rd4info3File: "",
//     rd4info4: "",
//     rd4info4File: "",
//     rd4info5: "",
//     rd4info5File: "",
//     randomDataTitle5: "",
//     rd5info1: "",
//     rd5info1File: "",
//     rd5info2: "",
//     rd5info2File: "",
//     rd5info3: "",
//     rd5info3File: "",
//     rd5info4: "",
//     rd5info4File: "",
//     rd5info5: "",
//     rd5info5File: "",
// })

const [details,setDetails] = useState();

  const fetchData=async()=>{
    try {
      const url = `http://localhost:8080/api/product/${productId}`;
      const product = await axios.get(url,{});
      setProduct(product.data);
      setDetails(product.data);
  } catch (error) {
      console.log(error)
  }
  }


  useEffect(()=>{
   fetchData();
   
  },[])

  const handleTextChange = (e) => {
    setDetails({...details, [e.target.name]: e.target.value});
  }

  const handleFileChange = (e) => {
    setDetails({...details, [e.target.name]: e.target.files[0]});
  }

  const handleSumbit = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("productId", details.productId);
    data.append("name", details.name);
    data.append("randomDataTitle1", details.randomDataTitle1);
    data.append("rd1info1", details.rd1info1);
    data.append("rd1info1File", details.rd1info1File);
    data.append("rd1info2", details.rd1info2);
    data.append("rd1info2File", details.rd1info2File);
    data.append("rd1info3", details.rd1info3);
    data.append("rd1info3File", details.rd1info3File);
    data.append("rd1info4", details.rd1info4);
    data.append("rd1info4File", details.rd1info4File);
    data.append("rd1info5", details.rd1info5);
    data.append("rd1info5File", details.rd1info5File);
    data.append("randomDataTitle2", details.randomDataTitle2);
    data.append("rd2info1", details.rd2info1);
    data.append("rd2info1File", details.rd2info1File);
    data.append("rd2info2", details.rd2info2);
    data.append("rd2info2File", details.rd2info2File);
    data.append("rd2info3", details.rd2info3);
    data.append("rd2info3File", details.rd2info3File);
    data.append("rd2info4", details.rd2info4);
    data.append("rd2info4File", details.rd2info4File);
    data.append("rd2info5", details.rd2info5);
    data.append("rd2info5File", details.rd2info5File);
    data.append("randomDataTitle3", details.randomDataTitle3);
    data.append("rd3info1", details.rd3info1);
    data.append("rd3info1File", details.rd3info1File);
    data.append("rd3info2", details.rd3info2);
    data.append("rd3info2File", details.rd3info2File);
    data.append("rd3info3", details.rd3info3);
    data.append("rd3info3File", details.rd3info3File);
    data.append("rd3info4", details.rd3info4);
    data.append("rd3info4File", details.rd3info4File);
    data.append("rd3info5", details.rd3info5);
    data.append("rd3info5File", details.rd3info5File);
    data.append("randomDataTitle4", details.randomDataTitle4);
    data.append("rd4info1", details.rd4info1);
    data.append("rd4info1File", details.rd4info1File);
    data.append("rd4info2", details.rd4info2);
    data.append("rd4info2File", details.rd4info2File);
    data.append("rd4info3", details.rd4info3);
    data.append("rd4info3File", details.rd4info3File);
    data.append("rd4info4", details.rd4info4);
    data.append("rd4info4File", details.rd4info4File);
    data.append("rd4info5", details.rd4info5);
    data.append("rd4info5File", details.rd4info5File);
    data.append("randomDataTitle5", details.randomDataTitle5);
    data.append("rd5info1", details.rd5info1);
    data.append("rd5info1File", details.rd5info1File);
    data.append("rd5info2", details.rd5info2);
    data.append("rd5info2File", details.rd5info2File);
    data.append("rd5info3", details.rd5info3);
    data.append("rd5info3File", details.rd5info3File);
    data.append("rd5info4", details.rd5info4);
    data.append("rd5info4File", details.rd5info4File);
    data.append("rd5info5", details.rd5info5);
    data.append("rd5info5File", details.rd5info5File);
    console.log(details);

    const config = {
        headers: { 'Content-Type': 'multipart/form-data' },
    }
    const url = `http://localhost:8080/api/product/update?id=${productId}`;
    console.log("clicked")
    axios.patch(url,data,config).then(res => {
        console.log(res);
        close();
    }).catch(err => {console.log(err)});
  }

  console.log(product)

  return (
    <div className='view_product'>
        <div className='view_product_card'>
            <div className='view_card_top'>
                <h2>View Product</h2>
                <AiOutlineClose id='btn-close' onClick={close}/>
            </div>
            <div className='view_card_content'>
            <div className="form_holder">
                    <input type="text" name="productId" onChange={handleTextChange} placeholder='Product Id' defaultValue={product?.productId} disabled={product.productId?true:false}/>
                    <input type="text" name="name" onChange={handleTextChange} placeholder='Product Name' defaultValue={product?.name} disabled={product.name?true:false} />
                    <h3>Random Data 1 Title</h3>
                    <input type="text" name="randomDataTitle1" onChange={handleTextChange} defaultValue={product?.randomDataTitle1} disabled={product.randomDataTitle1?true:false}/>
                    <input type="text" name="rd1info1" onChange={handleTextChange} placeholder='Info 1' defaultValue={product?.rd1info1} disabled={product.rd1info1?true:false}/>
                    {
                      product.rd1info1File?<a href={`http://localhost:8080/${product.rd1info1File}`} download>Download Attached File</a>:<input type="file" name="rd1info1File" onChange={handleFileChange}/>
                    }
                    <input type="text" name="rd1info2" onChange={handleTextChange} placeholder='Info 2' defaultValue={product?.rd1info2} disabled={product.rd1info2?true:false}/>
                    {
                      product.rd1info2File?<a href={`http://localhost:8080/${product.rd1info2File}`} download>Download Attached File</a>:<input type="file" name="rd1info2File" onChange={handleFileChange}/>
                    }
                    <input type="text" name="rd1info3" onChange={handleTextChange} placeholder='Info 3'  defaultValue={product?.rd1info3} disabled={product.rd1info3?true:false}/>
                    {
                      product.rd1info3File?<a href={`http://localhost:8080/${product.rd1info3File}`} download>Download Attached File</a>:<input type="file" name="rd1info3File" onChange={handleFileChange}/>
                    }
                    <input type="text" name="rd1info4" onChange={handleTextChange} placeholder='Info 4'  defaultValue={product?.rd1info4} disabled={product.rd1info4?true:false}/>
                    {
                      product.rd1info4File?<a href={`http://localhost:8080/${product.rd1info4File}`} download>Download Attached File</a>:<input type="file" name="rd1info4File" onChange={handleFileChange}/>
                    }
                    <input type="text" name="rd1info5" onChange={handleTextChange} placeholder='Info 5'  defaultValue={product?.rd1info5} disabled={product.rd1info5?true:false}/>
                    {
                      product.rd1info5File?<a href={`http://localhost:8080/${product.rd1info5File}`} download>Download Attached File</a>:<input type="file" name="rd1info5File" onChange={handleFileChange}/>
                    }
                </div>
                <div className="form_holder">
                    <h3>Random Data 2 Title</h3>
                    <input type="text" name="randomDataTitle2" onChange={handleTextChange} defaultValue={product?.randomDataTitle2} disabled={product.randomDataTitle2?true:false}/>
                    <input type="text" name="rd2info1" onChange={handleTextChange} placeholder='Info 1' defaultValue={product?.rd2info1} disabled={product.rd2info1?true:false}/>
                    {
                      product.rd2info1File?<a href={`http://localhost:8080/${product.rd2info1File}`} download>Download Attached File</a>:<input type="file" name="rd2info1File" onChange={handleFileChange}/>
                    }
                    <input type="text" name="rd2info2" onChange={handleTextChange} placeholder='Info 2' defaultValue={product?.rd2info2} disabled={product.rd2info2?true:false}/>
                    {
                      product.rd2info2File?<a href={`http://localhost:8080/${product.rd2info2File}`} download>Download Attached File</a>:<input type="file" name="rd2info2File" onChange={handleFileChange}/>
                    }
                    <input type="text" name="rd2info3" onChange={handleTextChange} placeholder='Info 3' defaultValue={product?.rd2info3} disabled={product.rd2info3?true:false}/>
                    {
                      product.rd2info3File?<a href={`http://localhost:8080/${product.rd2info3File}`} download>Download Attached File</a>:<input type="file" name="rd2info3File" onChange={handleFileChange}/>
                    }
                    <input type="text" name="rd2info4" onChange={handleTextChange} placeholder='Info 4' defaultValue={product?.rd2info4} disabled={product.rd2info4?true:false}/>
                    {
                      product.rd2info4File?<a href={`http://localhost:8080/${product.rd2info4File}`} download>Download Attached File</a>:<input type="file" name="rd2info4File" onChange={handleFileChange}/>
                    }
                    <input type="text" name="rd2info5" onChange={handleTextChange} placeholder='Info 5' defaultValue={product?.rd2info5} disabled={product.rd2info5?true:false}/>
                    {
                      product.rd2info5File?<a href={`http://localhost:8080/${product.rd2info5File}`} download>Download Attached File</a>:<input type="file" name="rd2info5File" onChange={handleFileChange}/>
                    }
                </div>
                <div className="form_holder">
                    <h3>Random Data 3 Title</h3>
                    <input type="text" name="randomDataTitle3" onChange={handleTextChange} defaultValue={product?.randomDataTitle3} disabled={product.randomDataTitle3?true:false}/>
                    <input type="text" name="rd3info1" onChange={handleTextChange} placeholder='Info 1'  defaultValue={product?.rd3info1} disabled={product.rd3info1?true:false}/>
                    {
                      product.rd3info1File?<a href={`http://localhost:8080/${product.rd3info1File}`} download>Download Attached File</a>:<input type="file" name="rd3info1File" onChange={handleFileChange}/>
                    }                    
                    <input type="text" name="rd3info2" onChange={handleTextChange} placeholder='Info 2' defaultValue={product?.rd3info2} disabled={product.rd3info2?true:false} />
                    {
                      product.rd3info2File?<a href={`http://localhost:8080/${product.rd3info2File}`} download>Download Attached File</a>:<input type="file" name="rd3info2File" onChange={handleFileChange}/>
                    }                      
                    <input type="text" name="rd3info3" onChange={handleTextChange} placeholder='Info 3' defaultValue={product?.rd3info3} disabled={product.rd3info3?true:false} />
                    {
                      product.rd3info3File?<a href={`http://localhost:8080/${product.rd3info3File}`} download>Download Attached File</a>:<input type="file" name="rd3info3File" onChange={handleFileChange}/>
                    }
                    <input type="text" name="rd3info4" onChange={handleTextChange} placeholder='Info 4' defaultValue={product?.rd3info4} disabled={product.rd3info4?true:false} />
                    {
                      product.rd3info4File?<a href={`http://localhost:8080/${product.rd3info4File}`} download>Download Attached File</a>:<input type="file" name="rd3info4File" onChange={handleFileChange}/>
                    }
                    <input type="text" name="rd3info5" onChange={handleTextChange} placeholder='Info 5' defaultValue={product?.rd3info5} disabled={product.rd3info5?true:false} />
                    {
                      product.rd3info5File?<a href={`http://localhost:8080/${product.rd3info5File}`} download>Download Attached File</a>:<input type="file" name="rd3info5File" onChange={handleFileChange}/>
                    }
                </div>
                <div className="form_holder">
                    <h3>Random Data 4 Title</h3>
                    <input type="text" name="randomDataTitle4" onChange={handleTextChange} defaultValue={product?.randomDataTitle4} disabled={product.randomDataTitle4?true:false}/>
                    <input type="text" name="rd4info1" onChange={handleTextChange} placeholder='Info 1' defaultValue={product?.rd4info1} disabled={product.rd4info1?true:false}/>
                    {
                      product.rd4info1File?<a href={`http://localhost:8080/${product.rd4info1File}`} download>Download Attached File</a>:<input type="file" name="rd4info1File" onChange={handleFileChange}/>
                    }
                    <input type="text" name="rd4info2" onChange={handleTextChange} placeholder='Info 2' defaultValue={product?.rd4info2} disabled={product.rd4info2?true:false}/>
                    {
                      product.rd4info2File?<a href={`http://localhost:8080/${product.rd4info2File}`} download>Download Attached File</a>:<input type="file" name="rd4info2File" onChange={handleFileChange}/>
                    }
                    <input type="text" name="rd4info3" onChange={handleTextChange} placeholder='Info 3' defaultValue={product?.rd4info3} disabled={product.rd4info3?true:false}/>
                    {
                      product.rd4info3File?<a href={`http://localhost:8080/${product.rd4info3File}`} download>Download Attached File</a>:<input type="file" name="rd4info3File" onChange={handleFileChange}/>
                    }
                    <input type="text" name="rd4info4" onChange={handleTextChange} placeholder='Info 4' defaultValue={product?.rd4info4} disabled={product.rd4info4?true:false}/>
                    {
                      product.rd4info4File?<a href={`http://localhost:8080/${product.rd4info4File}`} download>Download Attached File</a>:<input type="file" name="rd4info4File" onChange={handleFileChange}/>
                    }
                    <input type="text" name="rd4info5" onChange={handleTextChange} placeholder='Info 5' defaultValue={product?.rd4info5} disabled={product.rd4info5?true:false}/>
                    {
                      product.rd4info5File?<a href={`http://localhost:8080/${product.rd4info5File}`} download>Download Attached File</a>:<input type="file" name="rd4info5File" onChange={handleFileChange}/>
                    }
                </div>
                <div className="form_holder">
                    <h3>Random Data 5 Title</h3>
                    <input type="text" name="randomDataTitle5" onChange={handleTextChange} defaultValue={product?.randomDataTitle5} disabled={product.randomDataTitle5?true:false}/>
                    <input type="text" name="rd5info1" onChange={handleTextChange} placeholder='Info 1' defaultValue={product?.rd5info1} disabled={product.rd5info1?true:false}/>
                    {
                      product.rd5info1File?<a href={`http://localhost:8080/${product.rd5info1File}`} download>Download Attached File</a>:<input type="file" name="rd5info1File" onChange={handleFileChange}/>
                    }
                    <input type="text" name="rd5info2" onChange={handleTextChange} placeholder='Info 2' defaultValue={product?.rd5info2} disabled={product.rd5info2?true:false}/>
                    {
                      product.rd5info2File?<a href={`http://localhost:8080/${product.rd5info2File}`} download>Download Attached File</a>:<input type="file" name="rd5info2File" onChange={handleFileChange}/>
                    }
                    <input type="text" name="rd5info3" onChange={handleTextChange} placeholder='Info 3' defaultValue={product?.rd5info3} disabled={product.rd5info3?true:false}/>
                    {
                      product.rd5info3File?<a href={`http://localhost:8080/${product.rd5info3File}`} download>Download Attached File</a>:<input type="file" name="rd5info3File" onChange={handleFileChange}/>
                    }
                    <input type="text" name="rd5info4" onChange={handleTextChange} placeholder='Info 4' defaultValue={product?.rd5info4} disabled={product.rd5info4?true:false}/>
                    {
                      product.rd5info4File?<a href={`http://localhost:8080/${product.rd5info4File}`} download>Download Attached File</a>:<input type="file" name="rd5info4File" onChange={handleFileChange}/>
                    }
                    <input type="text" name="rd5info5" onChange={handleTextChange} placeholder='Info 5' defaultValue={product?.rd5info5} disabled={product.rd5info1?true:false}/>
                    {
                      product.rd5info5sFile?<a href={`http://localhost:8080/${product.rd5info5sFile}`} download>Download Attached File</a>:<input type="file" name="rd5info5sFile" onChange={handleFileChange}/>
                    }
                </div>
                <button onClick={handleSumbit}>Save</button>
            </div>
        </div>
    </div>
  )
}

export default ViewProduct