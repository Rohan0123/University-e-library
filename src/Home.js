
import React from 'react';
import "./Home.css";
import Product from "./Product";
import { Link } from 'react-router-dom';

function Home() {
  return (
      
    

    <div class="home">

        <div>
        
            <Link to="/MoreBooks">
            <img class="home_image" src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Books/072021/bookshprefresh/1500-X-300-University.jpg">
            </img>
            </Link>
            <div class="home_row">
                <Product 
                id="1"
                title="Programming in ANSI C" 
                image="https://images-eu.ssl-images-amazon.com/images/I/5111biSmaxL._SX198_BO1,204,203,200_QL40_ML2_.jpg" 
                price={541} 
                rating={5}/>

                <Product 
                id="2"
                title="Software Engineering By Pearson" 
                image="https://images-eu.ssl-images-amazon.com/images/I/511DuL1myZL._SX198_BO1,204,203,200_QL40_FMwebp_.jpg" 
                price={545} 
                rating={4}/>
                
                {/*Product */}
            </div>

            <div class="home_row">
                <Product 
                id="3"
                title="Computer Networks| By Pearson" 
                image="https://images-eu.ssl-images-amazon.com/images/I/51WWOcqo1CL._SX198_BO1,204,203,200_QL40_ML2_.jpg" 
                price={600} 
                rating={5}/>

                <Product 
                id="4"
                title="Operating Systems | By Pearson" 
                image="https://images-eu.ssl-images-amazon.com/images/I/41vr8m6x8SL._SY264_BO1,204,203,200_QL40_ML2_.jpg" 
                price={820} 
                rating={5}/>

                <Product 
                id="5"
                title="Machine Learning" 
                image="https://images-eu.ssl-images-amazon.com/images/I/51siMTrPRzL._SX198_BO1,204,203,200_QL40_FMwebp_.jpg" 
                price={815} 
                rating={4}/>
                
            </div>

            <div class="home_row">
            <Product 
                id="6"
                title="Rich Dad Poor Dad" 
                image="https://images-eu.ssl-images-amazon.com/images/I/51u8ZRDCVoL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg" 
                price={302} 
                rating={5}/>
            </div>
        </div> 
    
    </div>
    
    
  )
}

export default Home