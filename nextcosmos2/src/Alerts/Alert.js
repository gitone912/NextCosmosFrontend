'use client';

import { Card } from 'flowbite-react';
import React, { useEffect, useState } from 'react';
import '../Alerts/Popup.css'
import reactimg from '../Alerts/reactimg.png';
import { motion } from 'framer-motion';



const PopupCard = () => {
  
  const [showPopup, setShowPopup] = useState(false);
 
  useEffect(() => {
    const timeId = setTimeout(() => setShowPopup(true), 1000)

    return () => clearTimeout(timeId)
  

    setShowPopup(true);
 
  },
   []);

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div>
      
   

      {showPopup && (
         <motion.div
         initial={{ opacity: 0, y: -100 }}
         animate={{ opacity: 1, y: 0 }}
         exit={{ opacity: 0, y: -100 }}
         transition={{ duration: 0.5 }}
         className='pop'
       >
       <div className='pop'>
        
         
         <div className="popup-container" >

          <div className="card">

          <Card 
      imgAlt="React tutorial"
      imgSrc={reactimg}
    >
      <a href="#">
        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
          <p>
           Learn with Real life examples.....
          </p>
        </h5>
      </a>
      <div className="mb-5 mt-2.5 flex items-center">
       
        <span className="ml-3 mr-2 rounded bg-cyan-100 px-2.5 py-0.5 text-xs font-semibold text-cyan-800 dark:bg-cyan-200 dark:text-cyan-800">
         
        </span>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-3xl font-bold text-gray-900 dark:text-white">
         Rs 99/-
        </span>
        <a
          className="rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
          href="#"
        >
          <p>
            Enroll
          </p>
        </a>
      </div>
    </Card>
            <button className="close-button" onClick={closePopup}>
              Close
            </button>
          </div>
       
        </div>
        
       </div>
       </motion.div>
      )}
    
    </div>

  );
};

export default PopupCard;
