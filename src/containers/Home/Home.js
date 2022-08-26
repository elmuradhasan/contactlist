import { Button, Modal, Space } from 'antd';
import React,{useState} from 'react'
import {
  DeleteOutlined,
  FormOutlined 
} from '@ant-design/icons';
import "./Home.css";
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
const { confirm } = Modal;
export default function Home() {
   const [data, setdata] = useState(JSON.parse(localStorage.getItem("alldata")) === null   ? [] : JSON.parse(localStorage.getItem("alldata")));
   const showDeleteConfirm = (curr_id) => {
    confirm({
      title: 'Şəxs kontakt siyahınızdan silinsin?',
      okText: 'Bəli',
      okType: 'danger',
      cancelText: 'Xeyr',
      onOk() {
        var updatedata = data.filter(item=>item.id !== curr_id);
        setdata(()=>updatedata);
        localStorage.setItem("alldata",JSON.stringify(updatedata));
        toast.error("Şəxs uğurla silindi");      
      },
  
      onCancel() {
        console.log('Cancel');
      },
    });
  };
   const deleteonecontact = (curr_id) =>{
    showDeleteConfirm(curr_id)   
   }

  return (
    <>
     <section>
        <div className='add_contact_home_div full_w floating'>
           <div className='center'>
            <div className='home_sub_div floating full_w'>
               <h2>Bütün əlaqə siyahınız burdadır</h2>
                <div className='contact_list_item_home'>
                <div className='map_do_item_top'>
                 <h3>ad</h3>
                 <h3>soyad</h3>
                 <h3>ata adi</h3>
                 <h3>ixtisas</h3>
                 <h3>Emeliyyatlar</h3>
                </div>
                      {
                  data.length > 0  ?  data.map((item,index)=>{
                          return (
                            <React.Fragment key={index}>
                           <div className='map_do_item'>
                           <p>{item.ad}</p>
                           <p>{item.soyad}</p>
                           <p>{item.ataad}</p>
                           <p>{item.ixtisas}</p>
                          <p className='icon_more_delete'>
                           <Link to={`/edit/${item.id}`}><FormOutlined /></Link>
                           <button onClick={()=>deleteonecontact(item.id)}><DeleteOutlined /></button>
                          <Link to={`/more/${item.id}`}><button className='more_infor_homes'>ətraflı</button></Link>
                          </p>
                           </div>
                            </React.Fragment>
                          )
                        })   : 
                        <div className='full_w floating empty_div'>
                           <h3 className='empty_head'>Melumat yoxdur</h3>
                        </div>
                      }
                </div>
            </div>
            <ToastContainer
position="bottom-left"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
/>
           </div>
        </div>
     </section>
    </>
  )
}
