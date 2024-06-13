require('dotenv').config();
const express = require("express");
const app = express();
const conn =  require("./db");
const cors = require("cors");
const userRoutes = require("./routes/user");
const authRoutes = require("./routes/auth");
const multer = require('multer');
const upload = require('./middleware/Upload');
const Product = require('./models/Product');
const {User} = require('./models/user');
const mongoose = require('mongoose');

conn();

app.use(express.json());
app.use(cors());
app.use('/uploads', express.static('uploads'));
let photoArray = [
    {name: "rd1info1File"},
    {name: "rd1info2File"},
    {name: "rd1info3File"},
    {name: "rd1info4File"},
    {name: "rd1info5File"},
    {name: "rd2info1File"},
    {name: "rd2info2File"},
    {name: "rd2info3File"},
    {name: "rd2info4File"},
    {name: "rd2info5File"},
    {name: "rd3info1File"},
    {name: "rd3info2File"},
    {name: "rd3info3File"},
    {name: "rd3info4File"},
    {name: "rd3info5File"},
    {name: "rd4info1File"},
    {name: "rd4info2File"},
    {name: "rd4info3File"},
    {name: "rd4info4File"},
    {name: "rd4info5File"},
    {name: "rd5info1File"},
    {name: "rd5info2File"},
    {name: "rd5info3File"},
    {name: "rd5info4File"},
    {name: "rd5info5File"},
]
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.post("/api/product",upload.fields(photoArray),(req,res,next) => {
    if(req.files){
    let product = new Product({
        name: req.body.name,
        productId: req.body.productId,
        randomDataTitle1: req.body.randomDataTitle1,
        rd1info1: req.body.rd1info1,
        rd1info1File: req.files.rd1info1File?req.files.rd1info1File[0].path: null,
        rd1info2: req.body.rd1info2,
        rd1info2File: req.files.rd1info2File?req.files.rd1info2File[0].path: null,
        rd1info3: req.body.rd1info3,
        rd1info3File: req.files.rd1info3File?req.files.rd1info3File[0].path: null,
        rd1info4: req.body.rd1info4,
        rd1info4File: req.files.rd1info4File?req.files.rd1info4File[0].path: null,
        rd1info5: req.body.rd1info5,
        rd1info5File: req.files?.rd1info5File?req.files.rd1info5File[0].path: null,
        randomDataTitle2: req.body.randomDataTitle2,
        rd2info1: req.body.rd2info1,
        rd2info1File: req.files?.rd2info1File?req.files.rd2info1File[0].path: null,
        rd2info2: req.body.rd2info2,
        rd2info2File: req.files?.rd2info2File?req.files.rd2info2File[0].path: null,
        rd2info3: req.body.rd2info3,
        rd2info3File: req.files?.rd2info3File?req.files.rd2info3File[0].path: null,
        rd2info4: req.body.rd2info4,
        rd2info4File: req.files?.rd2info4File?req.files.rd2info4File[0].path: null,
        rd2info5: req.body.rd2info5,
        rd2info5File: req.files?.rd2info5File?req.files.rd2info5File[0].path: null,
        randomDataTitle3: req.body.randomDataTitle3,
        rd3info1: req.body.rd3info1,
        rd3info1File: req.files?.rd3info1File?req.files.rd3info1File[0].path: null,
        rd3info2: req.body.rd3info2,
        rd3info2File: req.files?.rd3info2File?req.files.rd3info2File[0].path: null,
        rd3info3: req.body.rd3info3,
        rd3info3File: req.files?.rd3info3File?req.files.rd3info3File[0].path: null,
        rd3info4: req.body.rd3info4,
        rd3info4File: req.files?.rd3info4File?req.files.rd3info4File[0].path: null,
        rd3info5: req.body.rd3info5,
        rd3info5File: req.files?.rd3info5File?req.files.rd3info5File[0].path: null,
        randomDataTitle4: req.body.randomDataTitle4,
        rd4info1: req.body.rd4info1,
        rd4info1File: req.files?.rd4info1File?req.files.rd4info1File[0].path: null,
        rd4info2: req.body.rd4info2,
        rd4info2File: req.files?.rd4info2File?req.files.rd4info2File[0].path: null,
        rd4info3: req.body.rd4info3,
        rd4info3File: req.files?.rd4info3File?req.files.rd4info3File[0].path: null,
        rd4info4: req.body.rd4info4,
        rd4info4File: req.files?.rd4info4File?req.files.rd4info4File[0].path: null,
        rd4info5: req.body.rd4info5,
        rd4info5File: req.files?.rd4info5File?req.files.rd4info5File[0].path: null,
        randomDataTitle5: req.body.randomDataTitle5,
        rd5info1: req.body.rd5info1,
        rd5info1File: req.files?.rd5info1File?req.files.rd5info1File[0].path: null,
        rd5info2: req.body.rd5info2,
        rd5info2File: req.files?.rd5info2File?req.files.rd5info2File[0].path: null,
        rd5info3: req.body.rd5info3,
        rd5info3File: req.files?.rd5info3File?req.files.rd5info3File[0].path: null,
        rd5info4: req.body.rd5info4,
        rd5info4File: req.files?.rd5info4File?req.files.rd5info4File[0].path: null,
        rd5info5: req.body.rd5info5,
        rd5info5File: req.files?.rd5info5File?req.files.rd5info5File[0].path: null,
    })
    product.save().then((response) => {
        console.log(response)
       res.send("Product added");
       return;
    })
   .catch(err => {
       console.log(err);
        res.send(err);
        console.log(req.files);
   })
}
})

app.patch ("/api/product/update",upload.fields(photoArray),async (req,res,next) => {
    if(req.files){
    let product = {
        name: req.body.name,
        productId: req.body.productId,
        randomDataTitle1: req.body.randomDataTitle1,
        rd1info1: req.body.rd1info1,
        rd1info1File: req.files.rd1info1File?req.files.rd1info1File[0].path: null,
        rd1info2: req.body.rd1info2,
        rd1info2File: req.files.rd1info2File?req.files.rd1info2File[0].path: null,
        rd1info3: req.body.rd1info3,
        rd1info3File: req.files.rd1info3File?req.files.rd1info3File[0].path: null,
        rd1info4: req.body.rd1info4,
        rd1info4File: req.files.rd1info4File?req.files.rd1info4File[0].path: null,
        rd1info5: req.body.rd1info5,
        rd1info5File: req.files?.rd1info5File?req.files.rd1info5File[0].path: null,
        randomDataTitle2: req.body.randomDataTitle2,
        rd2info1: req.body.rd2info1,
        rd2info1File: req.files?.rd2info1File?req.files.rd2info1File[0].path: null,
        rd2info2: req.body.rd2info2,
        rd2info2File: req.files?.rd2info2File?req.files.rd2info2File[0].path: null,
        rd2info3: req.body.rd2info3,
        rd2info3File: req.files?.rd2info3File?req.files.rd2info3File[0].path: null,
        rd2info4: req.body.rd2info4,
        rd2info4File: req.files?.rd2info4File?req.files.rd2info4File[0].path: null,
        rd2info5: req.body.rd2info5,
        rd2info5File: req.files?.rd2info5File?req.files.rd2info5File[0].path: null,
        randomDataTitle3: req.body.randomDataTitle3,
        rd3info1: req.body.rd3info1,
        rd3info1File: req.files?.rd3info1File?req.files.rd3info1File[0].path: null,
        rd3info2: req.body.rd3info2,
        rd3info2File: req.files?.rd3info2File?req.files.rd3info2File[0].path: null,
        rd3info3: req.body.rd3info3,
        rd3info3File: req.files?.rd3info3File?req.files.rd3info3File[0].path: null,
        rd3info4: req.body.rd3info4,
        rd3info4File: req.files?.rd3info4File?req.files.rd3info4File[0].path: null,
        rd3info5: req.body.rd3info5,
        rd3info5File: req.files?.rd3info5File?req.files.rd3info5File[0].path: null,
        randomDataTitle4: req.body.randomDataTitle4,
        rd4info1: req.body.rd4info1,
        rd4info1File: req.files?.rd4info1File?req.files.rd4info1File[0].path: null,
        rd4info2: req.body.rd4info2,
        rd4info2File: req.files?.rd4info2File?req.files.rd4info2File[0].path: null,
        rd4info3: req.body.rd4info3,
        rd4info3File: req.files?.rd4info3File?req.files.rd4info3File[0].path: null,
        rd4info4: req.body.rd4info4,
        rd4info4File: req.files?.rd4info4File?req.files.rd4info4File[0].path: null,
        rd4info5: req.body.rd4info5,
        rd4info5File: req.files?.rd4info5File?req.files.rd4info5File[0].path: null,
        randomDataTitle5: req.body.randomDataTitle5,
        rd5info1: req.body.rd5info1,
        rd5info1File: req.files?.rd5info1File?req.files.rd5info1File[0].path: null,
        rd5info2: req.body.rd5info2,
        rd5info2File: req.files?.rd5info2File?req.files.rd5info2File[0].path: null,
        rd5info3: req.body.rd5info3,
        rd5info3File: req.files?.rd5info3File?req.files.rd5info3File[0].path: null,
        rd5info4: req.body.rd5info4,
        rd5info4File: req.files?.rd5info4File?req.files.rd5info4File[0].path: null,
        rd5info5: req.body.rd5info5,
        rd5info5File: req.files?.rd5info5File?req.files.rd5info5File[0].path: null,
    };
   try{
       const doc = await Product.findOneAndUpdate({_id: req.query.id}, product , {new: true});
       res.json({doc});
   } catch(err){
    res.send(err);
   };
}
})


app.get("/api/product/:id", async(req,res) => {
    try {
        const product=await Product.findOne({_id:req.params.id});
        res.json(product);
    } catch (error) {
        res.send(error);
        console.log(error);
    }
 })

 app.delete("/api/product/delete", async(req,res) => {
    try{
        const product=await Product.findOneAndDelete({_id:req.query.id});
        res.send(product);
    }
    catch(err){
        res.send(err);
    }
 })
 

app.get("/api/products", async(req,res) => {
   const products = await Product.find({});
   res.json(products);
})

app.get("/",(req,res)=>{res.send("running");})

const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`Listening on port ${port}...`);
})