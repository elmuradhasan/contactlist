import React from 'react';
import "./Header.css";
import {
    Link
  } from "react-router-dom";
export default function Header() {
  return (
    <>
       <header className='full_w floating'>
       <div className='center'>
         <div className='add_contact_div full_w floating'>
            <Link to="/"><h3 className='contact_list_title'>Kontakt siyahısı</h3></Link>
             <Link to="/addcontact" className='add_button_header'>Əlavə et</Link>
            </div>
         </div>
       </header>
    </>
  )
}
