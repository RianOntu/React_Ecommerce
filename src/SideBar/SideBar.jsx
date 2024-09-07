import React, { useEffect, useState } from 'react'
import ActiveLinkOne from './ActiveLinkOne';

function Sidebar({chairType}) {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
     
      const timer = setTimeout(() => {
          setIsLoading(false);
      }, 2000);

     
      return () => clearTimeout(timer);
  }, []);

  const ToggleSidebar = () => {
    setIsOpen(prevIsOpen => !prevIsOpen);
    console.log('clicked');
      
  }
  useEffect(() => {
    const handleClickOutside = (event) => {
      const sidebar = document.getElementById('hamburger');
      if (sidebar && !sidebar.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);
  useEffect(()=>{
    console.log(isOpen);
  
    isOpen===true?document.getElementById('hamburger').style.transform = "translateX(208px)":document.getElementById('hamburger').style.transform = "translateX(0px)"
  },[isOpen])


    return (
        <>
        <i class="fas fa-bars block sm:hidden" onClick={ToggleSidebar} id='hamburger'></i>
        <div  class={`${isOpen == true ? 'flex flex-col z-10 bg-white p-6 w-52  inset-y-0  shadow-md h-screen overflow-y-auto absolute' : 'hidden'}`}>
        
                <button onClick={()=>chairType('rocking chair')} className='padding p-6 mt-20 text-[#9F9EA6]'  >Rocking Chair</button><br />
                <hr />
                <br />
             <button onClick={()=>chairType('side chair')} className='padding p-6 text-[#9F9EA6]'  >Side Chair</button><br />
             <hr />
             <br />
             <button onClick={()=>chairType('lounge chair')}  className='padding p-6 text-[#9F9EA6]' >Lounge Chair</button>
             
            
            
                
               
                
            
          </div>
          {
            isLoading?<h1 className='center-container text-[50px]'>Loading...</h1>:<div className="bg-white p-6 hidden md:flex lg:flex  md:flex-col md:w-52 inset-y-0  shadow-md sm:h-full sm:overflow-y-auto fixed md:top-[80px] z-index">
         
            <button onClick={()=>chairType('rocking chair')} className='padding p-6 mt-20 text-[#9F9EA6]' >Rocking Chair</button><br />
            <hr /><br />
               <button onClick={()=>chairType('side chair')} className='padding p-6 text-[#9F9EA6]'>Side Chair</button><br />
               <hr /><br />
               <button onClick={()=>chairType('lounge chair')}  className='padding p-6 text-[#9F9EA6]'  >Lounge Chair</button>
             
              
              
                 
                  
              
            </div>
          }
       
          
        </>
    )
}

export default Sidebar
