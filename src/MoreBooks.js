import React from 'react'
import Product from "./Product";
import "./MoreBooks.css"

function MoreBooks() {
  return (
    <div class="MoreBooks">
        <h2 class="MoreBooks_title">Books Collection :</h2>
        <div class="home_row">
                <Product 
                id="1"
                title="Cracking the Coding Interview" 
                image="https://images-na.ssl-images-amazon.com/images/I/41p1cRZGtaL._SX348_BO1,204,203,200_.jpg" 
                price={541} 
                rating={4}/>

                <Product 
                id="2"
                title="Data Structures And Algorithms" 
                image="https://images-eu.ssl-images-amazon.com/images/I/31wnfksD1eL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg" 
                price={545} 
                rating={4}/>
                
                <Product 
                id="3"
                title="The Lean Startup" 
                image="https://m.media-amazon.com/images/P/0670921602.01._SCLZZZZZZZ_SX500_.jpg" 
                price={1339} 
                rating={3}/>
                
                <Product 
                id="4"
                title="Learn Python" 
                image="https://m.media-amazon.com/images/I/51Rb35UTXZL._SX260_.jpg" 
                price={222} 
                rating={5}/>
                
                {/*Product */}
            </div>
        
            <div class="home_row">
                <Product 
                id="5"
                title="CareerCup Cracking Product Manager" 
                image="https://images-eu.ssl-images-amazon.com/images/I/41QgO7VU5fL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg" 
                price={600} 
                rating={5}/>

                <Product 
                id="6"
                title="Operating Systems | By Pearson" 
                image="https://images-eu.ssl-images-amazon.com/images/I/41vr8m6x8SL._SY264_BO1,204,203,200_QL40_ML2_.jpg" 
                price={820} 
                rating={5}/>

                <Product 
                id="7"
                title="System Design Interview" 
                image="https://m.media-amazon.com/images/I/315sXDgx3YL.jpg" 
                price={850} 
                rating={4}/>
                
                <Product 
                id="8"
                title="Introduction to Algorithms" 
                image="https://images-na.ssl-images-amazon.com/images/I/513P8XoCAEL._SX376_BO1,204,203,200_.jpg" 
                price={624} 
                rating={5}/>
            </div>
            
            <div class="home_row">
                <Product 
                id="9"
                title="Mastering Html, Css & Javascript" 
                image="https://images-na.ssl-images-amazon.com/images/I/51OJP-O142L._SX379_BO1,204,203,200_.jpg" 
                price={433} 
                rating={4}/>

                <Product 
                id="10"
                title="Handbook of Data Structures" 
                image="https://m.media-amazon.com/images/P/149870185X.01._SCLZZZZZZZ_SX500_.jpg" 
                price={9800} 
                rating={5}/>

                <Product 
                id="11"
                title="Machine Learning" 
                image="https://images-na.ssl-images-amazon.com/images/I/510xW7BQDpL._SX376_BO1,204,203,200_.jpg" 
                price={815} 
                rating={4}/>
                
                <Product 
                id="12"
                title="Machine Learning" 
                image="https://images-na.ssl-images-amazon.com/images/I/510xW7BQDpL._SX376_BO1,204,203,200_.jpg" 
                price={815} 
                rating={4}/>
            </div>
            <div class="home_row">
                <Product 
                id="13"
                title="Computer Networks| By Pearson" 
                image="https://images-eu.ssl-images-amazon.com/images/I/51WWOcqo1CL._SX198_BO1,204,203,200_QL40_ML2_.jpg" 
                price={600} 
                rating={5}/>

                <Product 
                id="14"
                title="Operating Systems | By Pearson" 
                image="https://images-eu.ssl-images-amazon.com/images/I/41vr8m6x8SL._SY264_BO1,204,203,200_QL40_ML2_.jpg" 
                price={820} 
                rating={5}/>

                <Product 
                id="15"
                title="Machine Learning" 
                image="https://images-na.ssl-images-amazon.com/images/I/510xW7BQDpL._SX376_BO1,204,203,200_.jpg" 
                price={815} 
                rating={4}/>
                
                <Product 
                id="16"
                title="Machine Learning" 
                image="https://images-na.ssl-images-amazon.com/images/I/510xW7BQDpL._SX376_BO1,204,203,200_.jpg" 
                price={815} 
                rating={4}/>
            </div>
            <div class="home_row">
                <Product 
                id="17"
                title="Computer Networks| By Pearson" 
                image="https://images-eu.ssl-images-amazon.com/images/I/51WWOcqo1CL._SX198_BO1,204,203,200_QL40_ML2_.jpg" 
                price={600} 
                rating={5}/>

                <Product 
                id="18"
                title="Operating Systems | By Pearson" 
                image="https://images-eu.ssl-images-amazon.com/images/I/41vr8m6x8SL._SY264_BO1,204,203,200_QL40_ML2_.jpg" 
                price={820} 
                rating={5}/>

                <Product 
                id="19"
                title="Machine Learning" 
                image="https://images-na.ssl-images-amazon.com/images/I/510xW7BQDpL._SX376_BO1,204,203,200_.jpg" 
                price={815} 
                rating={4}/>
                
                <Product 
                id="20"
                title="Machine Learning" 
                image="https://images-na.ssl-images-amazon.com/images/I/510xW7BQDpL._SX376_BO1,204,203,200_.jpg" 
                price={815} 
                rating={4}/>
            </div>

    </div>
  )
}

export default MoreBooks