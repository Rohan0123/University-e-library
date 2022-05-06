import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";
import { jsPDF } from "jspdf";
import Footer from "./Footer";
import { saveAs } from "file-saver";


function CheckoutProduct({ id, title, image, size, rating, pdf }) {
  const [{ basket }, dispatch] = useStateValue();
  const removeFromLiked = () => {
    dispatch({
      type: "REMOVE_FROM_LIKED",
      id: id,
    });
  };
  const pdfGenerate = () => {
    const doc = new jsPDF();
    doc.text("Hello world!", 10, 10);
    doc.save(title);
  };

  const saveFile = () => {
    saveAs((pdf),title);
    };
    console.log(pdf);

  return (
    <div class="CheckoutProduct">
      <img class="CheckoutProduct_image" src={image} />
      <div class="CheckoutProduct_info">
        <p class="CheckoutProduct_title">{title}</p>
        <p class="CheckoutProduct_size">
          <small>File Size: </small>
          <b>{size} MB</b>
        </p>

        <button onClick={removeFromLiked}>Romove This Book</button>
        <button class="button2" onClick={saveFile}>
          Download Now
        </button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
