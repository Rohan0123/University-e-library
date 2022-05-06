import React, { useState, Component } from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";
import ThumbUpTwoToneIcon from "@mui/icons-material/ThumbUpTwoTone";
import ThumbDownTwoToneIcon from "@mui/icons-material/ThumbDownTwoTone";
import { jsPDF } from "jspdf";
import PDF from "./University.png"
import Axios from "axios"
import FileDownload from "js-file-download"
import { saveAs } from "file-saver";
import { Link } from "react-router-dom";



function Product({ id, title, image, size, rating, pdf }) {
  const [state, dispatch] = useStateValue();
  const [show, setShow] = useState(true);
  const [display, setDisplay] = useState(true);
  const like = { color: show ? "" : "orange" };
  const dislike = { display: display ? "block" : "none" };

    const pdfGenerate = () => {
    //const doc = PDF;
    const doc = new jsPDF();
    doc.text(title, 40, 20);
    doc.addImage(PDF,"PNG",15,30, 180, 100)
    doc.save(title);
  };
  
 /*
 const download = (e) =>{
   e.preventDefault()
   Axios({
     url:"http://localhost:3000",
     method:"GET",
    responseType:"png"
   }).then((res)=>{
     console.log(res)
      FileDownload(res.data,"University.png")
   })
 }
*/
  //console.log(show);
  const saveFile = () => {
  saveAs((pdf),title);
  };

  const removeFromLiked = () => {
    dispatch({
      type: "REMOVE_FROM_LIKED",
      id: id,
      
    });
  };

  const addToLiked = () => {
    if(show === true)
    {

    dispatch({
      type: "ADD_TO_LIKED",
      item: {
        id: id,
        title: title,
        image: image,
        size: size,
        rating: rating,
        pdf: pdf,
      },
    });

    setShow(false);
  }
  else
  {
    dispatch({
    type: "REMOVE_FROM_LIKED",
    id: id,
  });
  setShow(true);

  }

  };

  const set = () => setDisplay((s) => !s);


  return (
    <div class="product" style={dislike}>
      <div class="product_info">
        <p>{title}</p>
        <p class="product_size">
          <small>File Size:</small>
          <strong>{size}</strong>
          <strong> MB</strong>
        </p>
      </div>
      <img src={image} alt="" />
      <div class="btn">
        <ThumbUpTwoToneIcon
          style={like}
          className="like"
          onClick={addToLiked}
        />
        <ThumbDownTwoToneIcon className="dislike" onClick={set} />
        
        <button class="button" onClick={saveFile} >Download /View book</button> 
        
      </div>
      <div></div>
    </div>
  );
}

export default Product;
/*
<button class="button" onClick={pdfGenerate}>
Download Now
</button>
*/