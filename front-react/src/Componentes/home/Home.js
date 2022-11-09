import React from 'react';
import NavbarComp from '../NavBar/NavbarComp';
import Slider from '../slider/Slider';
import Footer from '../footer/Footer'


 
function Home() {
  return (

    
<>
 
 <NavbarComp /> 

 <main role="main" className="flex-shrink-0 mt-5">
     <div className="container">
     <Slider/>
     </div>

           <div className="container">
           
           

           <hr className="featurette-divider" />

           </div>

     

   </main>

   <Footer />

   </>

 
  );
}

export default Home;