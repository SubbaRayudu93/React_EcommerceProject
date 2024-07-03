import React, {useState} from 'react';
import Header from '../components/Header'
import Footer from '../components/Footer'
import Collections from '../components/Collections'
import Banner from '../components/Banner'
import LadiesCollection from '../components/LadiesCollection';
import { Ladies } from '../leadies';
import BannerLadies from '../components/BannerLadies';
//import {Gents} from '../data.js'


const MainPage = () => {   
    
    

  
    //const [gentsFassion, setGentsFassion] = useState(Gents);
    // const[ladiesFassion, setLadiesFassion] = useState(Ladies)
    // console.log(Ladies)
   
    
    const Gents ={
        
        title: "Gents Fashion",
        
        image1: "assets/Men/1.jpg",
        
        image2: "assets/Men/2.jpg",
        
        image3: "assets/Men/3.jpg",
        
        image4: "assets/Men/4.jpg",
        
        image5: "assets/Men/5.jpg",
         image6: "assets/Men/6.jpg",
         image7: "assets/Men/7.jpg",
         image8: "assets/Men/8.jpg",
         image9: "assets/Men/9.jpg",
         image10: "assets/Men/10.jpg",

        
        pricel: "559 INR",
        
        price2: "459 INR",
        
        price3: "659 INR",
        
        price4: "759 INR",
        
        price5: "859 INR",
        
        price6: "959 INR",
        }
        
        //  const Ladies = {
        
        // title : "Ladies Fashion",
        
        // Imagel: "assets/Woman/1.jpg",
        
        // image2: "assets/Woman/2.jpg",
        
        // Image3: "assets/Woman/3.jpg",
        
        // image4: "assets/Noman/4.jpg",
        
        // image5: "assets/Woman/5.jpg",
        
        // Image6: "assets/Woman/6.jpg",
        
        // price1:" 1559 INR",
        
        // price2: "1459 INR",
        
        // price3 :"1659 INR",
        
        // price4 : "1759 INR",
        
        // price3: "71859 INR",
        
        // price4: "1959 INR",
        // }
        //const [gentsFassion, setGentsFassion] = useState(Gents);
        const[ladiesFassion , setLadiesFassion] = useState(Ladies)
        console.log(Ladies)

  return (
    <div>
        <Header />
        <Banner />
        <Collections url= {Gents} />
        <BannerLadies />
        <LadiesCollection ladiesFassion = {ladiesFassion} />
      
        <Footer />
       


    </div>
  )
}

export default MainPage