import React from "react";
import "./MoreBooks.css";
import Footer from "./Footer";
import Header from "./Header";
import Product from "./Product";
import { Link } from "react-router-dom";
import { Component } from "react";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

function Category() {
  return (
    <div class="Category">
      <Header />
        <Link to="/MoreBooks">
      <div class="template">
        <img
          class="cuoTemplate"
          src="http://cuo.ac.in/images/logo-new-17.png"
        />
      </div>
        </Link>
      <div class="ctgr">
        
      <h2 class="MoreBooks_title">Antropology :</h2>
        <Carousel>
          <div class="home_row">
            <Product
              id="5"
              title="Indian Anthropology"
              image="https://images-na.ssl-images-amazon.com/images/I/418JjPklDdL._SX345_BO1,204,203,200_.jpg"
              size={54}
              rating={5}
              pdf="https://drive.google.com/file/d/1EAqhb8IGsKhLUw0zKu8wTD926k4UwmBK/view?usp=sharing"
            />

            <Product
              id="6"
              title="Anthropology"
              image="https://images-na.ssl-images-amazon.com/images/I/51CabZPhS4L._SX399_BO1,204,203,200_.jpg"
              size={43}
              rating={4}
              pdf="https://drive.google.com/file/d/1-94t8E8vKY4zR_d-kZ0fNMQb9SaKT2s0/view?usp=sharing"
            />

            <Product
              id="7"
              title="Social Cultural Anthropology"
              image="https://images-na.ssl-images-amazon.com/images/I/41VuaUeEYkL._SX313_BO1,204,203,200_.jpg"
              size={53}
              rating={4}
              pdf="https://drive.google.com/file/d/16j3qHQMmWm3m6wTbPXGm6aCM2eDbvFgx/view?usp=sharing"
            />

            <Product
              id="8"
              title="Biological Anthropology"
              image="https://images-na.ssl-images-amazon.com/images/I/51VCjeQVkOL._SX383_BO1,204,203,200_.jpg"
              size={35}
              rating={5}
              pdf="https://drive.google.com/file/d/1qlvtGit9fcc86Tmx8Ty1udUGj-QR1Uq0/view?usp=sharing"
            />
          </div>

          <div class="home_row">
            <Product
              id="15"
              title="Data Analytics using Python"
              image="https://m.media-amazon.com/images/I/41rniDM2CkL._BG0,0,0,0_FMpng_AC_SY320_SX320_.jpg"
              size={29}
              rating={4}
            />

            <Product
              id="18"
              title="Cloud Computing Design"
              image="https://m.media-amazon.com/images/I/51nu8p5vdcL._BG0,0,0,0_FMpng_AC_SY160_SX160_.jpg"
              size={19}
              rating={5}
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
            />
          </div>
        </Carousel>

        
        <h2 class="MoreBooks_title">Economics :</h2>
        <Carousel>
          <div class="home_row">
            <Product
              id="5"
              title="Day to Day Economics"
              image="https://m.media-amazon.com/images/P/B008OUUVM0.01._SCLZZZZZZZ_SX500_.jpg"
              size={52}
              rating={5}
              pdf="https://drive.google.com/file/d/1_jkcDoQtEuXyus3rTEfLBVIk3h1j9-4N/view?usp=sharing"
            />

            <Product
              id="6"
              title="Who Runs the Economy?"
              image="https://m.media-amazon.com/images/P/B01LAE1CXI.01._SCLZZZZZZZ_SX500_.jpg"
              size={344}
              rating={4}
              pdf="https://drive.google.com/file/d/1w7Ucpav0EsTtsk3VwQjVUydelVrQRvMS/view?usp=sharing"
            />

            <Product
              id="7"
              title="Freakonomics"
              image="https://images-na.ssl-images-amazon.com/images/I/918hM+7TOxL.jpg"
              size={80}
              rating={4}
              pdf="https://drive.google.com/file/d/1IY-3nRSEAb0Csr4oW00lbnSpmDwqlvJY/view?usp=sharing"
            />

            <Product
              id="8"
              title="International Economics"
              image="https://images-na.ssl-images-amazon.com/images/I/41fAwsPAjFL._SX390_BO1,204,203,200_.jpg"
              size={64}
              rating={5}
              pdf="https://drive.google.com/file/d/12_5bH8xT7PE5QwJGWvfb2m5CT1gQN0NZ/view?usp=sharing"
            />
          </div>

          <div class="home_row">
            <Product
              id="15"
              title="Data Analytics using Python"
              image="https://m.media-amazon.com/images/I/41rniDM2CkL._BG0,0,0,0_FMpng_AC_SY320_SX320_.jpg"
              size={29}
              rating={4}
            />

            <Product
              id="18"
              title="Cloud Computing Design"
              image="https://m.media-amazon.com/images/I/51nu8p5vdcL._BG0,0,0,0_FMpng_AC_SY160_SX160_.jpg"
              size={19}
              rating={5}
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
            />
          </div>
        </Carousel>

        
        <h2 class="MoreBooks_title">Education :</h2>
        <Carousel>
          <div class="home_row">
            <Product
              id="5"
              title="Complete Indian Geography"
              image="https://images-na.ssl-images-amazon.com/images/I/41xQAsVthjS._SX331_BO1,204,203,200_.jpg"
              size={65}
              rating={5}
              pdf="https://drive.google.com/file/d/1A2rFeQWvtP-N9HPtfW7p75qO0Kr3R1-R/view?usp=sharing"
            />

            <Product
              id="6"
              title="Ancient and Medieval"
              image="https://m.media-amazon.com/images/P/B08X6M8DF4.01._SCLZZZZZZZ_SX500_.jpg"
              size={67}
              rating={4}
              pdf="https://drive.google.com/file/d/1SqK7va9dJtvsgtznEWO2eENCFrqp59lV/view?usp=sharing"
            />

            <Product
              id="7"
              title="Indian Art and Culture"
              image="https://images-na.ssl-images-amazon.com/images/I/51URPCHNSBL._SX379_BO1,204,203,200_.jpg"
              size={80}
              rating={4}
              pdf="https://drive.google.com/file/d/1wDbHTzHhO-7iQtjVKQzgOK4S2HHMu686/view?usp=sharing"
            />

            <Product
              id="8"
              title="History of Modern India"
              image="https://images-na.ssl-images-amazon.com/images/I/91DnVLRObbL.jpg"
              size={64}
              rating={5}
              pdf="https://drive.google.com/file/d/1y_YHFeOFKMQCoNYxtSY1J1WyTlc8MGuL/view?usp=sharing"
            />
          </div>

          <div class="home_row">
            <Product
              id="15"
              title="Data Analytics using Python"
              image="https://m.media-amazon.com/images/I/41rniDM2CkL._BG0,0,0,0_FMpng_AC_SY320_SX320_.jpg"
              size={29}
              rating={4}
            />

            <Product
              id="18"
              title="Cloud Computing Design"
              image="https://m.media-amazon.com/images/I/51nu8p5vdcL._BG0,0,0,0_FMpng_AC_SY160_SX160_.jpg"
              size={19}
              rating={5}
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
            />
          </div>
        </Carousel>

        <h2 class="MoreBooks_title">Computer Science :</h2>

        <Carousel>
          <div class="home_row">
            <Product
              id="13"
              title="Digital Logic and Computer Design"
              image="https://m.media-amazon.com/images/I/41IlZdU0AzL._BG0,0,0,0_FMpng_AC_SY320_SX320_.jpg"
              size={659}
              rating={5}
              pdf="https://drive.google.com/file/d/1srgrmwpIXYJyFPJJqURDXMHdFHrdfFBx/view?usp=sharing"

            />

            <Product
              id="14"
              title="Manufacturing Engineering and Technology"
              image="https://images-eu.ssl-images-amazon.com/images/I/41o4oJbjLSL._AC_UL160_SR160,160_.jpg"
              size={820}
              rating={5}
              pdf="https://drive.google.com/file/d/1RJIs4wOboIgl0_p_AC4hk4EO3imLBtlg/view?usp=sharing"
            />

            <Product
              id="15"
              title="Data Analytics using Python"
              image="https://m.media-amazon.com/images/I/41rniDM2CkL._BG0,0,0,0_FMpng_AC_SY320_SX320_.jpg"
              size={629}
              rating={4}
              pdf="https://drive.google.com/file/d/16b8lE9dMp--7Oa71SGrFuoP3YuQSfp_m/view?usp=sharing"
            />

            <Product
              id="16"
              title="Concrete Technology"
              image="https://m.media-amazon.com/images/I/51ceIuk+LwL._BG0,0,0,0_FMpng_AC_SY320_SX320_.jpg"
              size={798}
              rating={4}
              pdf="https://drive.google.com/file/d/1Wiem9DQTlb5qHwpBiHAiAJIMmC-lx9qR/view?usp=sharing"
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
              pdf="https://drive.google.com/file/d/1_ZLn7gHbhrdzdhJ-PELN7P98u5I0GhWU/view?usp=sharing"
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
            />
          </div>
        </Carousel>

        
        <h2 class="MoreBooks_title">Journalism :</h2>
        <Carousel>
          <div class="home_row">
            <Product
              id="5"
              title="Beginners' Guide To Journalism"
              image="https://m.media-amazon.com/images/P/B07M8ZLFHK.01._SCLZZZZZZZ_SX500_.jpg"
              size={46}
              rating={5}
            />

            <Product
              id="6"
              title="Introduction to Mass Communication"
              image="https://images-na.ssl-images-amazon.com/images/I/41UGfXnoteL._SX370_BO1,204,203,200_.jpg"
              size={31}
              rating={4}
            />

            <Product
              id="7"
              title="Mass Communication in India"
              image="https://m.media-amazon.com/images/P/B008JZR4ES.01._SCLZZZZZZZ_SX500_.jpg"
              size={80}
              rating={4}
            />

            <Product
              id="8"
              title="New Media and Online Journalism"
              image="https://images-na.ssl-images-amazon.com/images/I/51mEsyTlN-S._SX327_BO1,204,203,200_.jpg"
              size={64}
              rating={5}
            />
          </div>

          <div class="home_row">
            <Product
              id="15"
              title="Data Analytics using Python"
              image="https://m.media-amazon.com/images/I/41rniDM2CkL._BG0,0,0,0_FMpng_AC_SY320_SX320_.jpg"
              size={29}
              rating={4}
            />

            <Product
              id="18"
              title="Cloud Computing Design"
              image="https://m.media-amazon.com/images/I/51nu8p5vdcL._BG0,0,0,0_FMpng_AC_SY160_SX160_.jpg"
              size={19}
              rating={5}
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
            />
          </div>
        </Carousel>

        
        <h2 class="MoreBooks_title">Management :</h2>
        <Carousel>
          <div class="home_row">
            <Product
              id="9"
              title="Human Resource Management"
              image="https://images-na.ssl-images-amazon.com/images/I/41a+nZ-Aq7L._SX320_BO1,204,203,200_.jpg"
              size={43}
              rating={4}
            />

            <Product
              id="10"
              title="Leadership Essentials"
              image="https://images-na.ssl-images-amazon.com/images/I/410SuefHXlL._SX322_BO1,204,203,200_.jpg"
              size={90}
              rating={5}
            />

            <Product
              id="11"
              title="Marketing Management"
              image="https://m.media-amazon.com/images/P/B07XTMRFF5.01._SCLZZZZZZZ_SX500_.jpg"
              size={73}
              rating={4}
            />

            <Product
              id="12"
              title="Product Management"
              image="https://images-na.ssl-images-amazon.com/images/I/41MlicJH3ML._SX331_BO1,204,203,200_.jpg"
              size={82}
              rating={4}
            />
          </div>
          <div class="home_row">
            <Product
              id="15"
              title="Data Analytics using Python"
              image="https://m.media-amazon.com/images/I/41rniDM2CkL._BG0,0,0,0_FMpng_AC_SY320_SX320_.jpg"
              size={29}
              rating={4}
            />

            <Product
              id="18"
              title="Cloud Computing Design"
              image="https://m.media-amazon.com/images/I/51nu8p5vdcL._BG0,0,0,0_FMpng_AC_SY160_SX160_.jpg"
              size={19}
              rating={5}
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
            />
          </div>
        </Carousel>

        <h2 class="MoreBooks_title">Mathematics :</h2>
        <Carousel>
          <div class="home_row">
            <Product
              id="5"
              title="Introduction to the Maths and Physics"
              image="https://m.media-amazon.com/images/P/036700254X.01._SCLZZZZZZZ_SX500_.jpg"
              size={60}
              rating={5}
              pdf="https://drive.google.com/file/d/1onWCbesAtJaP6ET-1IT0CQ6y6_d147n4/view?usp=sharing"
            />

            <Product
              id="6"
              title="Mathematical Physics"
              image="https://images-eu.ssl-images-amazon.com/images/I/41cn-YQjYsL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg"
              size={67}
              rating={4}
              pdf="https://drive.google.com/file/d/16cdCgFr3jntFlD47eLqih2okg60_MEnP/view?usp=sharing"
            />

            <Product
              id="7"
              title="IIT-JAM Physics"
              image="https://images-na.ssl-images-amazon.com/images/I/41xrCeLAdlL._SX374_BO1,204,203,200_.jpg"
              size={80}
              rating={4}
              pdf="https://drive.google.com/file/d/1SrwdCc5CnurInJ_hkLhF8w5F9CanBCS_/view?usp=sharing"
            />

            <Product
              id="8"
              title="Mathematical Statistics"
              image="https://images-na.ssl-images-amazon.com/images/I/41jlLEh5x1L._SX378_BO1,204,203,200_.jpg"
              size={64}
              rating={5}
              pdf="https://drive.google.com/file/d/1iYVlUZuaf1l6TZA4if9Oq_1ZypbuyoBq/view?usp=sharing"
            />
          </div>

          <div class="home_row">
            <Product
              id="15"
              title="Data Analytics using Python"
              image="https://m.media-amazon.com/images/I/41rniDM2CkL._BG0,0,0,0_FMpng_AC_SY320_SX320_.jpg"
              size={29}
              rating={4}
            />

            <Product
              id="18"
              title="Cloud Computing Design"
              image="https://m.media-amazon.com/images/I/51nu8p5vdcL._BG0,0,0,0_FMpng_AC_SY160_SX160_.jpg"
              size={19}
              rating={5}
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
            />
          </div>
        </Carousel>

        
        <h2 class="MoreBooks_title">Sociology :</h2>
        <Carousel>
          <div class="home_row">
            <Product
              id="5"
              title="Sociology"
              image="https://m.media-amazon.com/images/P/0745623115.01._SCLZZZZZZZ_SX500_.jpg"
              size={56}
              rating={5}
            />

            <Product
              id="6"
              title="Essential Sociology"
              image="https://images-na.ssl-images-amazon.com/images/I/41hT3ZJM3vL._SX372_BO1,204,203,200_.jpg"
              size={20}
              rating={4}
            />

            <Product
              id="7"
              title="HARALAMBOS & HOLBORN SOCIOLOGY"
              image="https://images-na.ssl-images-amazon.com/images/I/41ifPirrMUL._SX361_BO1,204,203,200_.jpg"
              size={45}
              rating={4}
            />

            <Product
              id="8"
              title="Sociology of India"
              image="https://images-na.ssl-images-amazon.com/images/I/41KpqdBSprL._SX331_BO1,204,203,200_.jpg"
              size={34}
              rating={5}
            />
          </div>

          <div class="home_row">
            <Product
              id="15"
              title="Data Analytics using Python"
              image="https://m.media-amazon.com/images/I/41rniDM2CkL._BG0,0,0,0_FMpng_AC_SY320_SX320_.jpg"
              size={29}
              rating={4}
            />

            <Product
              id="18"
              title="Cloud Computing Design"
              image="https://m.media-amazon.com/images/I/51nu8p5vdcL._BG0,0,0,0_FMpng_AC_SY160_SX160_.jpg"
              size={19}
              rating={5}
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
            />
          </div>
        </Carousel>

        
        <h2 class="MoreBooks_title">Statistics :</h2>
        <Carousel>
          <div class="home_row">
            <Product
              id="5"
              title="The Art of Statistics"
              image="https://images-na.ssl-images-amazon.com/images/I/41avZxZMM4L._SX305_BO1,204,203,200_.jpg"
              size={60}
              rating={5}
            />

            <Product
              id="6"
              title="Statistics without Tears"
              image="https://m.media-amazon.com/images/P/0141987499.01._SCLZZZZZZZ_SX500_.jpg"
              size={67}
              rating={4}
            />

            <Product
              id="7"
              title="Fundamentals of Applied Statistics"
              image="https://images-na.ssl-images-amazon.com/images/I/51id+ANZRsL._SX380_BO1,204,203,200_.jpg"
              size={80}
              rating={4}
            />

            <Product
              id="8"
              title="Statistics for Data Scientists"
              image="https://m.media-amazon.com/images/P/B08712TT3F.01._SCLZZZZZZZ_SX500_.jpg"
              size={64}
              rating={5}
            />
          </div>

          <div class="home_row">
            <Product
              id="15"
              title="Data Analytics using Python"
              image="https://m.media-amazon.com/images/I/41rniDM2CkL._BG0,0,0,0_FMpng_AC_SY320_SX320_.jpg"
              size={29}
              rating={4}
            />

            <Product
              id="18"
              title="Cloud Computing Design"
              image="https://m.media-amazon.com/images/I/51nu8p5vdcL._BG0,0,0,0_FMpng_AC_SY160_SX160_.jpg"
              size={19}
              rating={5}
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
            />
          </div>
        </Carousel>

        <h2 class="MoreBooks_title">Additional Books :</h2>

        
        <h2 class="MoreBooks_title">Law :</h2>
        <Carousel>
          <div class="home_row">
            <Product
              id="5"
              title="Direct Taxes Ready Reckoner"
              image="https://images-na.ssl-images-amazon.com/images/I/41e-zruGC1L._SX364_BO1,204,203,200_.jpg"
              size={60}
              rating={5}
            />

            <Product
              id="6"
              title="Constitution of India Bare Act"
              image="https://images-na.ssl-images-amazon.com/images/I/41TrXIjC6oL._SX321_BO1,204,203,200_.jpg"
              size={67}
              rating={4}
            />

            <Product
              id="7"
              title="Guide To Clat & LL.B. Entrance Examination"
              image="https://images-na.ssl-images-amazon.com/images/I/41nmrkuuCIL._SX378_BO1,204,203,200_.jpg"
              size={80}
              rating={4}
            />

            <Product
              id="8"
              title="Constitutional Law of india"
              image="https://images-na.ssl-images-amazon.com/images/I/41M+8Z82CIL._SX320_BO1,204,203,200_.jpg"
              size={64}
              rating={5}
            />
          </div>

          <div class="home_row">
            <Product
              id="15"
              title="Data Analytics using Python"
              image="https://m.media-amazon.com/images/I/41rniDM2CkL._BG0,0,0,0_FMpng_AC_SY320_SX320_.jpg"
              size={29}
              rating={4}
            />

            <Product
              id="18"
              title="Cloud Computing Design"
              image="https://m.media-amazon.com/images/I/51nu8p5vdcL._BG0,0,0,0_FMpng_AC_SY160_SX160_.jpg"
              size={19}
              rating={5}
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
            />
          </div>
        </Carousel>

        <h2 class="MoreBooks_title">Medical :</h2>

        <Carousel>
          <div class="home_row">
            <Product
              id="1"
              title="Medical Physiology"
              image="https://images-na.ssl-images-amazon.com/images/I/41KNcQulYfL._SX385_BO1,204,203,200_.jpg"
              size={51}
              rating={4}
              pdf="https://drive.google.com/file/d/1vCbeCRZo4593kmmcj_ZdHPq-Pc7YMkoo/view?usp=sharing"
            />

            <Product
              id="2"
              title="Surgical Nursing"
              image="https://images-na.ssl-images-amazon.com/images/I/61Uv15AIwIL._SX380_BO1,204,203,200_.jpg"
              size={55}
              rating={4}
              pdf="https://drive.google.com/file/d/1CUvJOqVi6gV34FyyxVYAoDdfeFOTLBbZ/view?usp=sharing"
            />

            <Product
              id="3"
              title="Davidson's Principles and Practice of Medicine"
              image="https://images-na.ssl-images-amazon.com/images/I/41O6U3zJxBL._SX354_BO1,204,203,200_.jpg"
              size={19}
              rating={3}
              pdf="https://drive.google.com/file/d/15H_FoqJQDE0b9WJxzzVYHiGH8bXxHs6C/view?usp=sharing"
            />

            <Product
              id="4"
              title="Biochemistry"
              image="https://m.media-amazon.com/images/P/9389034981.01._SCLZZZZZZZ_SX500_.jpg"
              size={22}
              rating={5}
              pdf="https://drive.google.com/file/d/1Njw8MoaDbWFhL5PzhX_Q7nZ1qiFPvGmm/view?usp=sharing"
            />

            {/*Product */}
          </div>

          <div class="home_row">
            <Product
              id="15"
              title="Data Analytics using Python"
              image="https://m.media-amazon.com/images/I/41rniDM2CkL._BG0,0,0,0_FMpng_AC_SY320_SX320_.jpg"
              size={29}
              rating={4}
            />

            <Product
              id="18"
              title="Cloud Computing Design"
              image="https://m.media-amazon.com/images/I/51nu8p5vdcL._BG0,0,0,0_FMpng_AC_SY160_SX160_.jpg"
              size={19}
              rating={5}
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
            />
          </div>

          <div class="home_row">
            <Product
              id="1"
              title="Medical Physiology"
              image="https://images-na.ssl-images-amazon.com/images/I/41KNcQulYfL._SX385_BO1,204,203,200_.jpg"
              size={51}
              rating={4}
            />

            <Product
              id="2"
              title="Surgical Nursing"
              image="https://images-na.ssl-images-amazon.com/images/I/61Uv15AIwIL._SX380_BO1,204,203,200_.jpg"
              size={55}
              rating={4}
            />

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

            <div class="home_row">
              <Product
                id="15"
                title="Data Analytics using Python"
                image="https://m.media-amazon.com/images/I/41rniDM2CkL._BG0,0,0,0_FMpng_AC_SY320_SX320_.jpg"
                size={29}
                rating={4}
              />

              <Product
                id="18"
                title="Cloud Computing Design"
                image="https://m.media-amazon.com/images/I/51nu8p5vdcL._BG0,0,0,0_FMpng_AC_SY160_SX160_.jpg"
                size={19}
                rating={5}
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
              />
            </div>

            {/*Product */}
          </div>

          <div class="home_row">
            <Product
              id="1"
              title="Medical Physiology"
              image="https://images-na.ssl-images-amazon.com/images/I/41KNcQulYfL._SX385_BO1,204,203,200_.jpg"
              size={51}
              rating={4}
            />

            <Product
              id="2"
              title="Surgical Nursing"
              image="https://images-na.ssl-images-amazon.com/images/I/61Uv15AIwIL._SX380_BO1,204,203,200_.jpg"
              size={55}
              rating={4}
            />

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

            {/*Product */}
          </div>
        </Carousel>

        <Footer />
      </div>
    </div>
  );
}

export default Category;
