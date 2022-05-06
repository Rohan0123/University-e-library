import React from "react";
import "./Home.css";
import Product from "./Product";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

import { Component } from "react";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

function Home() {
  return (
    <div class="home">

      <div class="books">
      <Header />
        <div class="img">
          <Link to="/MoreBooks">
            <img
              class="home_image"
              src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Books/072021/bookshprefresh/1500-X-300-University.jpg"
            ></img>
            <button class="viewMore">View More Books</button>
          </Link>
        </div>
        <div class="newArrival">
          <p>Just Arrival:</p>

          <Carousel>
            <div class="home_row">
              <Product
                id="3"
                title="Computer Networks| By Pearson"
                image="https://images-eu.ssl-images-amazon.com/images/I/51WWOcqo1CL._SX198_BO1,204,203,200_QL40_ML2_.jpg"
                size={26}
                rating={5}
                pdf="https://drive.google.com/file/d/1VY5YIwpA8H2eiQf5xtmhkhnitV9gIPx9/view?usp=sharing"
              />

              <Product
                id="4"
                title="Operating Systems | By Pearson"
                image="https://images-eu.ssl-images-amazon.com/images/I/41vr8m6x8SL._SY264_BO1,204,203,200_QL40_ML2_.jpg"
                size={28}
                rating={5}
                pdf="https://drive.google.com/file/d/1nrsKSWeR6DwGba9b5UPcl27MGQgmi4pi/view?usp=sharing"
              />

              <Product
                id="5"
                title="Machine Learning"
                image="https://images-eu.ssl-images-amazon.com/images/I/51siMTrPRzL._SX198_BO1,204,203,200_QL40_FMwebp_.jpg"
                size={18}
                rating={4}
                pdf="https://drive.google.com/file/d/1IGAKGoVoOs3lRNlymMuhXuS-ys9agELL/view?usp=sharing"
              />

              <Product
                id="20"
                title="Wireless Communications"
                image="https://m.media-amazon.com/images/I/41bhsjxxlyL._BG0,0,0,0_FMpng_AC_SY320_SX320_.jpg"
                size={41}
                rating={4}
                pdf="https://drive.google.com/file/d/1IBeu8IrCtw1yG4dk5m-SVi7NzeIO7kCn/view?usp=sharing"
              />
            </div>

            <div class="home_row">
              <Product
                id="15"
                title="Data Analytics using Python"
                image="https://m.media-amazon.com/images/I/41rniDM2CkL._BG0,0,0,0_FMpng_AC_SY320_SX320_.jpg"
                size={29}
                rating={4}
                pdf="https://drive.google.com/file/d/16b8lE9dMp--7Oa71SGrFuoP3YuQSfp_m/view?usp=sharing"
              />

              <Product
                id="18"
                title="Cloud Computing Design"
                image="https://m.media-amazon.com/images/I/51nu8p5vdcL._BG0,0,0,0_FMpng_AC_SY160_SX160_.jpg"
                size={19}
                rating={5}
                pdf="https://drive.google.com/file/d/16b8lE9dMp--7Oa71SGrFuoP3YuQSfp_m/view?usp=sharing"
              />

              <Product
                id="11"
                title="Marketing Management"
                image="https://m.media-amazon.com/images/P/B07XTMRFF5.01._SCLZZZZZZZ_SX500_.jpg"
                size={7}
                rating={4}
              />

              <Product
                id="12"
                title="Product Management"
                image="https://images-na.ssl-images-amazon.com/images/I/41MlicJH3ML._SX331_BO1,204,203,200_.jpg"
                size={28}
                rating={4}
              />
            </div>

            <div class="home_row">
              <Product
                id="3"
                title="Davidson's Principles and Practice of Medicine"
                image="https://images-na.ssl-images-amazon.com/images/I/41O6U3zJxBL._SX354_BO1,204,203,200_.jpg"
                size={19}
                rating={3}
              />

              <Product
                id="4"
                title="Biochemistry"
                image="https://m.media-amazon.com/images/P/9389034981.01._SCLZZZZZZZ_SX500_.jpg"
                size={22}
                rating={5}
              />

              <Product
                id="7"
                title="Guide To Clat & LL.B. Entrance Examination"
                image="https://images-na.ssl-images-amazon.com/images/I/41nmrkuuCIL._SX378_BO1,204,203,200_.jpg"
                size={17}
                rating={4}
              />

              <Product
                id="8"
                title="Constitutional Law of india"
                image="https://images-na.ssl-images-amazon.com/images/I/41M+8Z82CIL._SX320_BO1,204,203,200_.jpg"
                size={46}
                rating={5}
              />
            </div>

            <div class="home_row">
              <Product
                id="21"
                title="Cracking the Coding Interview"
                image="https://images-na.ssl-images-amazon.com/images/I/41p1cRZGtaL._SX348_BO1,204,203,200_.jpg"
                size={41}
                rating={4}
              />

              <Product
                id="22"
                title="Data Structures And Algorithms"
                image="https://images-eu.ssl-images-amazon.com/images/I/31wnfksD1eL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg"
                size={45}
                rating={4}
              />

              <Product
                id="23"
                title="The Lean Startup"
                image="https://m.media-amazon.com/images/P/0670921602.01._SCLZZZZZZZ_SX500_.jpg"
                size={33}
                rating={3}
              />

              <Product
                id="24"
                title="Learn Python"
                image="https://m.media-amazon.com/images/I/51Rb35UTXZL._SX260_.jpg"
                size={22}
                rating={5}
                pdf="https://drive.google.com/file/d/16b8lE9dMp--7Oa71SGrFuoP3YuQSfp_m/view?usp=sharing"
              />
            </div>
          </Carousel>
        </div>

        <h1 class="ebook">E-books Collection:</h1>
        <div class="home_row">
          <Product
            id="1"
            title="Programming in ANSI C"
            image="https://images-eu.ssl-images-amazon.com/images/I/5111biSmaxL._SX198_BO1,204,203,200_QL40_ML2_.jpg"
            size={17}
            rating={5}
            pdf="https://drive.google.com/file/d/1tU1zJfP1bmtQJ5Na4pVCepNEj7KUcCvb/view?usp=sharing"
          />

          <Product
            id="2"
            title="Software Engineering By Pearson"
            image="https://images-eu.ssl-images-amazon.com/images/I/511DuL1myZL._SX198_BO1,204,203,200_QL40_FMwebp_.jpg"
            size={22}
            rating={4}
            pdf="https://drive.google.com/file/d/1WkeZQZl75O2uf5NAvbnCpfyvmMwOzNSJ/view?usp=sharing"
          />

          {/*Product */}
        </div>

        <div class="home_row">
          <Product
            id="3"
            title="Computer Networks| By Pearson"
            image="https://images-eu.ssl-images-amazon.com/images/I/51WWOcqo1CL._SX198_BO1,204,203,200_QL40_ML2_.jpg"
            size={26}
            rating={5}
            pdf="https://drive.google.com/file/d/1VY5YIwpA8H2eiQf5xtmhkhnitV9gIPx9/view?usp=sharing"
          />

          <Product
            id="4"
            title="Operating Systems | By Pearson"
            image="https://images-eu.ssl-images-amazon.com/images/I/41vr8m6x8SL._SY264_BO1,204,203,200_QL40_ML2_.jpg"
            size={28}
            rating={5}
            pdf="https://drive.google.com/file/d/1nrsKSWeR6DwGba9b5UPcl27MGQgmi4pi/view?usp=sharing"
          />

          <Product
            id="5"
            title="Machine Learning"
            image="https://images-eu.ssl-images-amazon.com/images/I/51siMTrPRzL._SX198_BO1,204,203,200_QL40_FMwebp_.jpg"
            size={81}
            rating={4}
            pdf="https://drive.google.com/file/d/1IGAKGoVoOs3lRNlymMuhXuS-ys9agELL/view?usp=sharing"
          />
        </div>

        <div class="home_row">
          <Product
            id="6"
            title="Rich Dad Poor Dad"
            image="https://images-eu.ssl-images-amazon.com/images/I/51u8ZRDCVoL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg"
            size={32}
            rating={5}
            pdf="https://drive.google.com/file/d/1mS4cIwfjOyGUET3Ua3kzCuS0nwWtpry8/view?usp=sharing"
          />
        </div>

        <div class="footer">
        <Footer />
      </div>
      <div class="copyRight">
        <h3>© Copy Rights Central University of Odisha All Rights Reserved</h3>
      </div>

      </div>
      
    </div>
  );
}

export default Home;
