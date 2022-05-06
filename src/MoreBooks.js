import React from "react";
import Product from "./Product";
import "./MoreBooks.css";
import Footer from "./Footer";
import Header from "./Header";

function MoreBooks() {
  return (
    <div class="MoreBooks">
      <Header />
      <div class="template">
        <img
          class="cuoTemplate"
          src="http://cuo.ac.in/images/logo-new-17.png"
        />
      </div>

      <h2 class="MoreBooks_title">Books Collection :</h2>

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
          id="5"
          title="Direct Taxes Ready Reckoner"
          image="https://images-na.ssl-images-amazon.com/images/I/41e-zruGC1L._SX364_BO1,204,203,200_.jpg"
          size={60}
          rating={5}
          pdf="https://drive.google.com/file/d/17Nc-e257ceCBkOJdOym0_u60d4028jFF/view?usp=sharing"
        />

        <Product
          id="6"
          title="Constitution of India Bare Act"
          image="https://images-na.ssl-images-amazon.com/images/I/41TrXIjC6oL._SX321_BO1,204,203,200_.jpg"
          size={67}
          rating={4}
          pdf="https://drive.google.com/file/d/1bSYJ7EphXHqLxh91oI7uGyQjG9XSfRhn/view?usp=sharing"
        />

        <Product
          id="7"
          title="Guide To Clat & LL.B. Entrance Examination"
          image="https://images-na.ssl-images-amazon.com/images/I/41nmrkuuCIL._SX378_BO1,204,203,200_.jpg"
          size={80}
          rating={4}
          pdf="https://drive.google.com/file/d/1xXXj08U14He9H1wKedFtMTOmfBEUP1jj/view?usp=sharing"
        />

        <Product
          id="8"
          title="Constitutional Law of india"
          image="https://images-na.ssl-images-amazon.com/images/I/41M+8Z82CIL._SX320_BO1,204,203,200_.jpg"
          size={64}
          rating={5}
          pdf="https://drive.google.com/file/d/1z_lvULlHJp9CZMlmSDVultaC2uzbCQXG/view?usp=sharing"
        />
      </div>

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
          id="13"
          title="Digital Logic and Computer Design"
          image="https://m.media-amazon.com/images/I/41IlZdU0AzL._BG0,0,0,0_FMpng_AC_SY320_SX320_.jpg"
          size={659}
          rating={5}
        />

        <Product
          id="14"
          title="Manufacturing Engineering and Technology"
          image="https://images-eu.ssl-images-amazon.com/images/I/41o4oJbjLSL._AC_UL160_SR160,160_.jpg"
          size={820}
          rating={5}
        />

        <Product
          id="15"
          title="Data Analytics using Python"
          image="https://m.media-amazon.com/images/I/41rniDM2CkL._BG0,0,0,0_FMpng_AC_SY320_SX320_.jpg"
          size={629}
          rating={4}
        />

        <Product
          id="16"
          title="Concrete Technology"
          image="https://m.media-amazon.com/images/I/51ceIuk+LwL._BG0,0,0,0_FMpng_AC_SY320_SX320_.jpg"
          size={798}
          rating={4}
        />
      </div>
      <div class="home_row">
        <Product
          id="17"
          title="Electronic Devices and Circuit"
          image="https://m.media-amazon.com/images/I/51apMp-coYL._BG0,0,0,0_FMpng_AC_SY320_SX320_.jpg"
          size={824}
          rating={5}
        />

        <Product
          id="18"
          title="Cloud Computing Design"
          image="https://m.media-amazon.com/images/I/51nu8p5vdcL._BG0,0,0,0_FMpng_AC_SY160_SX160_.jpg"
          size={419}
          rating={5}
        />

        <Product
          id="19"
          title="Automata Theory Language & Computation"
          image="https://m.media-amazon.com/images/I/4180mc3AzAL._BG0,0,0,0_FMpng_AC_SY320_SX320_.jpg"
          size={773}
          rating={4}
        />

        <Product
          id="20"
          title="Wireless Communications"
          image="https://m.media-amazon.com/images/I/41bhsjxxlyL._BG0,0,0,0_FMpng_AC_SY320_SX320_.jpg"
          size={410}
          rating={4}
        />
      </div>
      <div class="home_row">
        <Product
          id="21"
          title="Cracking the Coding Interview"
          image="https://images-na.ssl-images-amazon.com/images/I/41p1cRZGtaL._SX348_BO1,204,203,200_.jpg"
          size={541}
          rating={4}
        />

        <Product
          id="22"
          title="Data Structures And Algorithms"
          image="https://images-eu.ssl-images-amazon.com/images/I/31wnfksD1eL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg"
          size={545}
          rating={4}
        />

        <Product
          id="23"
          title="The Lean Startup"
          image="https://m.media-amazon.com/images/P/0670921602.01._SCLZZZZZZZ_SX500_.jpg"
          size={1339}
          rating={3}
        />

        <Product
          id="24"
          title="Learn Python"
          image="https://m.media-amazon.com/images/I/51Rb35UTXZL._SX260_.jpg"
          size={222}
          rating={5}
        />

        {/*Product */}
      </div>

      <div class="home_row">
        <Product
          id="25"
          title="CareerCup Cracking Product Manager"
          image="https://images-eu.ssl-images-amazon.com/images/I/41QgO7VU5fL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg"
          size={600}
          rating={5}
        />

        <Product
          id="26"
          title="DIGITAL SIGNAL PROCESSING"
          image="https://images-na.ssl-images-amazon.com/images/I/517mKRC7k3L._SX365_BO1,204,203,200_.jpg"
          size={657}
          rating={4}
        />

        <Product
          id="27"
          title="Computer Graphics C Version"
          image="https://images-eu.ssl-images-amazon.com/images/I/41AK3Jk866L._SX198_BO1,204,203,200_QL40_FMwebp_.jpg"
          size={850}
          rating={4}
        />

        <Product
          id="28"
          title="Introduction to Algorithms"
          image="https://images-na.ssl-images-amazon.com/images/I/513P8XoCAEL._SX376_BO1,204,203,200_.jpg"
          size={624}
          rating={5}
        />
      </div>

      <div class="home_row">
        <Product
          id="29"
          title="Mastering Html, Css & Javascript"
          image="https://images-na.ssl-images-amazon.com/images/I/51OJP-O142L._SX379_BO1,204,203,200_.jpg"
          size={433}
          rating={4}
        />

        <Product
          id="30"
          title="Handbook of Data Structures"
          image="https://m.media-amazon.com/images/P/149870185X.01._SCLZZZZZZZ_SX500_.jpg"
          size={9800}
          rating={5}
        />

        <Product
          id="31"
          title="Computer System Architecture"
          image="https://m.media-amazon.com/images/I/51IKBI0rftL._BG0,0,0,0_FMpng_AC_SY320_SX320_.jpg"
          size={734}
          rating={4}
        />

        <Product
          id="32"
          title="Digital Image Processing"
          image="https://m.media-amazon.com/images/I/51s7sgLQF-L._BG0,0,0,0_FMpng_AC_SY320_SX320_.jpg"
          size={820}
          rating={4}
        />
      </div>
      <div class="home_row">
        <Product
          id="33"
          title="Digital Logic and Computer Design"
          image="https://m.media-amazon.com/images/I/41IlZdU0AzL._BG0,0,0,0_FMpng_AC_SY320_SX320_.jpg"
          size={659}
          rating={5}
        />

        <Product
          id="34"
          title="Manufacturing Engineering and Technology"
          image="https://images-eu.ssl-images-amazon.com/images/I/41o4oJbjLSL._AC_UL160_SR160,160_.jpg"
          size={820}
          rating={5}
        />

        <Product
          id="35"
          title="Data Analytics using Python"
          image="https://m.media-amazon.com/images/I/41rniDM2CkL._BG0,0,0,0_FMpng_AC_SY320_SX320_.jpg"
          size={629}
          rating={4}
        />

        <Product
          id="36"
          title="Concrete Technology"
          image="https://m.media-amazon.com/images/I/51ceIuk+LwL._BG0,0,0,0_FMpng_AC_SY320_SX320_.jpg"
          size={798}
          rating={4}
        />
      </div>
      <div class="home_row">
        <Product
          id="37"
          title="Electronic Devices and Circuit"
          image="https://m.media-amazon.com/images/I/51apMp-coYL._BG0,0,0,0_FMpng_AC_SY320_SX320_.jpg"
          size={824}
          rating={5}
        />

        <Product
          id="38"
          title="Cloud Computing Design"
          image="https://m.media-amazon.com/images/I/51nu8p5vdcL._BG0,0,0,0_FMpng_AC_SY160_SX160_.jpg"
          size={419}
          rating={5}
        />

        <Product
          id="39"
          title="Automata Theory Language & Computation"
          image="https://m.media-amazon.com/images/I/4180mc3AzAL._BG0,0,0,0_FMpng_AC_SY320_SX320_.jpg"
          size={773}
          rating={4}
        />

        <Product
          id="40"
          title="Wireless Communications"
          image="https://m.media-amazon.com/images/I/41bhsjxxlyL._BG0,0,0,0_FMpng_AC_SY320_SX320_.jpg"
          size={410}
          rating={4}
        />
      </div>
      <div class="home_row">
        <Product
          id="41"
          title="Cracking the Coding Interview"
          image="https://images-na.ssl-images-amazon.com/images/I/41p1cRZGtaL._SX348_BO1,204,203,200_.jpg"
          size={541}
          rating={4}
        />

        <Product
          id="42"
          title="Data Structures And Algorithms"
          image="https://images-eu.ssl-images-amazon.com/images/I/31wnfksD1eL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg"
          size={545}
          rating={4}
        />

        <Product
          id="43"
          title="The Lean Startup"
          image="https://m.media-amazon.com/images/P/0670921602.01._SCLZZZZZZZ_SX500_.jpg"
          size={1339}
          rating={3}
        />

        <Product
          id="44"
          title="Learn Python"
          image="https://m.media-amazon.com/images/I/51Rb35UTXZL._SX260_.jpg"
          size={222}
          rating={5}
        />

        {/*Product */}
      </div>

      <div class="home_row">
        <Product
          id="45"
          title="CareerCup Cracking Product Manager"
          image="https://images-eu.ssl-images-amazon.com/images/I/41QgO7VU5fL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg"
          size={600}
          rating={5}
        />

        <Product
          id="46"
          title="DIGITAL SIGNAL PROCESSING"
          image="https://images-na.ssl-images-amazon.com/images/I/517mKRC7k3L._SX365_BO1,204,203,200_.jpg"
          size={657}
          rating={4}
        />

        <Product
          id="47"
          title="Computer Graphics C Version"
          image="https://images-eu.ssl-images-amazon.com/images/I/41AK3Jk866L._SX198_BO1,204,203,200_QL40_FMwebp_.jpg"
          size={850}
          rating={4}
        />

        <Product
          id="48"
          title="Introduction to Algorithms"
          image="https://images-na.ssl-images-amazon.com/images/I/513P8XoCAEL._SX376_BO1,204,203,200_.jpg"
          size={624}
          rating={5}
        />
      </div>

      <div class="home_row">
        <Product
          id="49"
          title="Mastering Html, Css & Javascript"
          image="https://images-na.ssl-images-amazon.com/images/I/51OJP-O142L._SX379_BO1,204,203,200_.jpg"
          size={433}
          rating={4}
        />

        <Product
          id="50"
          title="Handbook of Data Structures"
          image="https://m.media-amazon.com/images/P/149870185X.01._SCLZZZZZZZ_SX500_.jpg"
          size={9800}
          rating={5}
        />

        <Product
          id="51"
          title="Computer System Architecture"
          image="https://m.media-amazon.com/images/I/51IKBI0rftL._BG0,0,0,0_FMpng_AC_SY320_SX320_.jpg"
          size={734}
          rating={4}
        />

        <Product
          id="52"
          title="Digital Image Processing"
          image="https://m.media-amazon.com/images/I/51s7sgLQF-L._BG0,0,0,0_FMpng_AC_SY320_SX320_.jpg"
          size={820}
          rating={4}
        />
      </div>
      <div class="home_row">
        <Product
          id="53"
          title="Digital Logic and Computer Design"
          image="https://m.media-amazon.com/images/I/41IlZdU0AzL._BG0,0,0,0_FMpng_AC_SY320_SX320_.jpg"
          size={659}
          rating={5}
        />

        <Product
          id="54"
          title="Manufacturing Engineering and Technology"
          image="https://images-eu.ssl-images-amazon.com/images/I/41o4oJbjLSL._AC_UL160_SR160,160_.jpg"
          size={820}
          rating={5}
        />

        <Product
          id="55"
          title="Data Analytics using Python"
          image="https://m.media-amazon.com/images/I/41rniDM2CkL._BG0,0,0,0_FMpng_AC_SY320_SX320_.jpg"
          size={629}
          rating={4}
        />

        <Product
          id="56"
          title="Concrete Technology"
          image="https://m.media-amazon.com/images/I/51ceIuk+LwL._BG0,0,0,0_FMpng_AC_SY320_SX320_.jpg"
          size={798}
          rating={4}
        />
      </div>
      <div class="home_row">
        <Product
          id="57"
          title="Electronic Devices and Circuit"
          image="https://m.media-amazon.com/images/I/51apMp-coYL._BG0,0,0,0_FMpng_AC_SY320_SX320_.jpg"
          size={824}
          rating={5}
        />

        <Product
          id="58"
          title="Cloud Computing Design"
          image="https://m.media-amazon.com/images/I/51nu8p5vdcL._BG0,0,0,0_FMpng_AC_SY160_SX160_.jpg"
          size={419}
          rating={5}
        />

        <Product
          id="59"
          title="Automata Theory Language & Computation"
          image="https://m.media-amazon.com/images/I/4180mc3AzAL._BG0,0,0,0_FMpng_AC_SY320_SX320_.jpg"
          size={773}
          rating={4}
        />

        <Product
          id="60"
          title="Wireless Communications"
          image="https://m.media-amazon.com/images/I/41bhsjxxlyL._BG0,0,0,0_FMpng_AC_SY320_SX320_.jpg"
          size={410}
          rating={4}
        />
      </div>
      <div class="home_row">
        <Product
          id="61"
          title="Cracking the Coding Interview"
          image="https://images-na.ssl-images-amazon.com/images/I/41p1cRZGtaL._SX348_BO1,204,203,200_.jpg"
          size={541}
          rating={4}
        />

        <Product
          id="62"
          title="Data Structures And Algorithms"
          image="https://images-eu.ssl-images-amazon.com/images/I/31wnfksD1eL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg"
          size={545}
          rating={4}
        />

        <Product
          id="63"
          title="The Lean Startup"
          image="https://m.media-amazon.com/images/P/0670921602.01._SCLZZZZZZZ_SX500_.jpg"
          size={1339}
          rating={3}
        />

        <Product
          id="64"
          title="Learn Python"
          image="https://m.media-amazon.com/images/I/51Rb35UTXZL._SX260_.jpg"
          size={222}
          rating={5}
        />

        {/*Product */}
      </div>

      <div class="home_row">
        <Product
          id="65"
          title="CareerCup Cracking Product Manager"
          image="https://images-eu.ssl-images-amazon.com/images/I/41QgO7VU5fL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg"
          size={600}
          rating={5}
        />

        <Product
          id="66"
          title="DIGITAL SIGNAL PROCESSING"
          image="https://images-na.ssl-images-amazon.com/images/I/517mKRC7k3L._SX365_BO1,204,203,200_.jpg"
          size={657}
          rating={4}
        />

        <Product
          id="67"
          title="Computer Graphics C Version"
          image="https://images-eu.ssl-images-amazon.com/images/I/41AK3Jk866L._SX198_BO1,204,203,200_QL40_FMwebp_.jpg"
          size={850}
          rating={4}
        />

        <Product
          id="68"
          title="Introduction to Algorithms"
          image="https://images-na.ssl-images-amazon.com/images/I/513P8XoCAEL._SX376_BO1,204,203,200_.jpg"
          size={624}
          rating={5}
        />
      </div>

      <div class="home_row">
        <Product
          id="69"
          title="Mastering Html, Css & Javascript"
          image="https://images-na.ssl-images-amazon.com/images/I/51OJP-O142L._SX379_BO1,204,203,200_.jpg"
          size={433}
          rating={4}
        />

        <Product
          id="70"
          title="Handbook of Data Structures"
          image="https://m.media-amazon.com/images/P/149870185X.01._SCLZZZZZZZ_SX500_.jpg"
          size={9800}
          rating={5}
        />

        <Product
          id="71"
          title="Computer System Architecture"
          image="https://m.media-amazon.com/images/I/51IKBI0rftL._BG0,0,0,0_FMpng_AC_SY320_SX320_.jpg"
          size={734}
          rating={4}
        />

        <Product
          id="72"
          title="Digital Image Processing"
          image="https://m.media-amazon.com/images/I/51s7sgLQF-L._BG0,0,0,0_FMpng_AC_SY320_SX320_.jpg"
          size={820}
          rating={4}
        />
      </div>
      <div class="home_row">
        <Product
          id="73"
          title="Digital Logic and Computer Design"
          image="https://m.media-amazon.com/images/I/41IlZdU0AzL._BG0,0,0,0_FMpng_AC_SY320_SX320_.jpg"
          size={659}
          rating={5}
        />

        <Product
          id="74"
          title="Manufacturing Engineering and Technology"
          image="https://images-eu.ssl-images-amazon.com/images/I/41o4oJbjLSL._AC_UL160_SR160,160_.jpg"
          size={820}
          rating={5}
        />

        <Product
          id="75"
          title="Data Analytics using Python"
          image="https://m.media-amazon.com/images/I/41rniDM2CkL._BG0,0,0,0_FMpng_AC_SY320_SX320_.jpg"
          size={629}
          rating={4}
        />

        <Product
          id="76"
          title="Concrete Technology"
          image="https://m.media-amazon.com/images/I/51ceIuk+LwL._BG0,0,0,0_FMpng_AC_SY320_SX320_.jpg"
          size={798}
          rating={4}
        />
      </div>
      <div class="home_row">
        <Product
          id="77"
          title="Electronic Devices and Circuit"
          image="https://m.media-amazon.com/images/I/51apMp-coYL._BG0,0,0,0_FMpng_AC_SY320_SX320_.jpg"
          size={824}
          rating={5}
        />

        <Product
          id="78"
          title="Cloud Computing Design"
          image="https://m.media-amazon.com/images/I/51nu8p5vdcL._BG0,0,0,0_FMpng_AC_SY160_SX160_.jpg"
          size={419}
          rating={5}
        />

        <Product
          id="79"
          title="Automata Theory Language & Computation"
          image="https://m.media-amazon.com/images/I/4180mc3AzAL._BG0,0,0,0_FMpng_AC_SY320_SX320_.jpg"
          size={773}
          rating={4}
        />

        <Product
          id="80"
          title="Wireless Communications"
          image="https://m.media-amazon.com/images/I/41bhsjxxlyL._BG0,0,0,0_FMpng_AC_SY320_SX320_.jpg"
          size={410}
          rating={4}
        />
      </div>
      <div class="home_row">
        <Product
          id="81"
          title="Cracking the Coding Interview"
          image="https://images-na.ssl-images-amazon.com/images/I/41p1cRZGtaL._SX348_BO1,204,203,200_.jpg"
          size={541}
          rating={4}
        />

        <Product
          id="82"
          title="Data Structures And Algorithms"
          image="https://images-eu.ssl-images-amazon.com/images/I/31wnfksD1eL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg"
          size={545}
          rating={4}
        />

        <Product
          id="83"
          title="The Lean Startup"
          image="https://m.media-amazon.com/images/P/0670921602.01._SCLZZZZZZZ_SX500_.jpg"
          size={1339}
          rating={3}
        />

        <Product
          id="84"
          title="Learn Python"
          image="https://m.media-amazon.com/images/I/51Rb35UTXZL._SX260_.jpg"
          size={222}
          rating={5}
        />

        {/*Product */}
      </div>

      <div class="home_row">
        <Product
          id="85"
          title="CareerCup Cracking Product Manager"
          image="https://images-eu.ssl-images-amazon.com/images/I/41QgO7VU5fL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg"
          size={600}
          rating={5}
        />

        <Product
          id="86"
          title="DIGITAL SIGNAL PROCESSING"
          image="https://images-na.ssl-images-amazon.com/images/I/517mKRC7k3L._SX365_BO1,204,203,200_.jpg"
          size={657}
          rating={4}
        />

        <Product
          id="87"
          title="Computer Graphics C Version"
          image="https://images-eu.ssl-images-amazon.com/images/I/41AK3Jk866L._SX198_BO1,204,203,200_QL40_FMwebp_.jpg"
          size={850}
          rating={4}
        />

        <Product
          id="88"
          title="Introduction to Algorithms"
          image="https://images-na.ssl-images-amazon.com/images/I/513P8XoCAEL._SX376_BO1,204,203,200_.jpg"
          size={624}
          rating={5}
        />
      </div>

      <div class="home_row">
        <Product
          id="89"
          title="Mastering Html, Css & Javascript"
          image="https://images-na.ssl-images-amazon.com/images/I/51OJP-O142L._SX379_BO1,204,203,200_.jpg"
          size={433}
          rating={4}
        />

        <Product
          id="90"
          title="Handbook of Data Structures"
          image="https://m.media-amazon.com/images/P/149870185X.01._SCLZZZZZZZ_SX500_.jpg"
          size={9800}
          rating={5}
        />

        <Product
          id="91"
          title="Computer System Architecture"
          image="https://m.media-amazon.com/images/I/51IKBI0rftL._BG0,0,0,0_FMpng_AC_SY320_SX320_.jpg"
          size={734}
          rating={4}
        />

        <Product
          id="92"
          title="Digital Image Processing"
          image="https://m.media-amazon.com/images/I/51s7sgLQF-L._BG0,0,0,0_FMpng_AC_SY320_SX320_.jpg"
          size={820}
          rating={4}
        />
      </div>
      <div class="home_row">
        <Product
          id="93"
          title="Digital Logic and Computer Design"
          image="https://m.media-amazon.com/images/I/41IlZdU0AzL._BG0,0,0,0_FMpng_AC_SY320_SX320_.jpg"
          size={659}
          rating={5}
        />

        <Product
          id="94"
          title="Manufacturing Engineering and Technology"
          image="https://images-eu.ssl-images-amazon.com/images/I/41o4oJbjLSL._AC_UL160_SR160,160_.jpg"
          size={820}
          rating={5}
        />

        <Product
          id="95"
          title="Data Analytics using Python"
          image="https://m.media-amazon.com/images/I/41rniDM2CkL._BG0,0,0,0_FMpng_AC_SY320_SX320_.jpg"
          size={629}
          rating={4}
        />

        <Product
          id="96"
          title="Concrete Technology"
          image="https://m.media-amazon.com/images/I/51ceIuk+LwL._BG0,0,0,0_FMpng_AC_SY320_SX320_.jpg"
          size={798}
          rating={4}
        />
      </div>
      <div class="home_row">
        <Product
          id="97"
          title="Electronic Devices and Circuit"
          image="https://m.media-amazon.com/images/I/51apMp-coYL._BG0,0,0,0_FMpng_AC_SY320_SX320_.jpg"
          size={824}
          rating={5}
        />

        <Product
          id="98"
          title="Cloud Computing Design"
          image="https://m.media-amazon.com/images/I/51nu8p5vdcL._BG0,0,0,0_FMpng_AC_SY160_SX160_.jpg"
          size={419}
          rating={5}
        />

        <Product
          id="99"
          title="Automata Theory Language & Computation"
          image="https://m.media-amazon.com/images/I/4180mc3AzAL._BG0,0,0,0_FMpng_AC_SY320_SX320_.jpg"
          size={773}
          rating={4}
        />

        <Product
          id="100"
          title="Wireless Communications"
          image="https://m.media-amazon.com/images/I/41bhsjxxlyL._BG0,0,0,0_FMpng_AC_SY320_SX320_.jpg"
          size={410}
          rating={4}
        />
      </div>
      <div>
      <Footer />
      <div class="copyRight">
        <h3>© Copy Rights Central University of Odisha All Rights Reserved</h3>
      </div>
      </div>
    </div>
  );
}

export default MoreBooks;
