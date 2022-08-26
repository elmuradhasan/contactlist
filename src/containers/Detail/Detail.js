import React from 'react'
import { Link, useParams } from 'react-router-dom';
import "./Detail.css";
export default function Detail() {
  var data =JSON.parse(localStorage.getItem("alldata"));
  var {id} = useParams();
  var oneperson = data.filter(item=> item.id === id); 
  return (
    <>
     <section className='floating full_w'>
        <div className='add_contact_form_div floating full_w'>
            <div className='center'>
                <div className='add_element_sub floating full_w'>
                  <h2>Şəxs haqqında ətraflı məlumat</h2>
                     <div className='detail_mains_flex floating'>
                     <div className='map_do_item_top_detail floating'>
                 <h3>ad</h3>
                 <h3>soyad</h3>
                 <h3>ata adi</h3>
                 <h3>ixtisas</h3>
                 <h3>Cins</h3>
                 <h3>Ətraflı</h3>
                 <h3>Email</h3>
                </div>
                    {
                      oneperson.map((item,index)=>{
                        return (
                          <React.Fragment key={index}>
                        <div className='map_do_item_detail floating'>
                            <p>{item.ad}</p>
                            <p>{item.soyad}</p>
                            <p>{item.ataad}</p>
                            <p>{item.ixtisas}</p>
                            <p>{item.cins}</p>
                            <p>{item.mesaj}</p>
                            <p>{item.email}</p>
                        </div>
                          </React.Fragment>
                        )
                      })  
                    }
                     <Link to="/">Siyahiya qayit</Link>
                     </div>
                   
                </div>
            </div>
        </div>
     </section>
    </>
  )
}
