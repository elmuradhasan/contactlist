import React,{useState,useEffect} from 'react'
import "./AddContact.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";
import {v4 as uuid} from 'uuid';
export default function Addcontact() {
  let navigate = useNavigate();
  const [alldata, setalldata] = useState(JSON.parse(localStorage.getItem("alldata")) === null   ? [] : JSON.parse(localStorage.getItem("alldata")));
  const [input, setinput] = useState({ad:"",soyad:"",ataad:"",email:"",mesaj:"",ixtisas:"Müəllim",cins:"Kisi",sert:false});
  useEffect(() => {
    localStorage.setItem("alldata",JSON.stringify(alldata));
  }, [alldata])
  const handeinput = (e)=>{
    const unique_id = uuid();
    setinput({...input,[e.target.name]:e.target.value,id:unique_id});
  }
  const alldatasave = (e)=>{
    e.preventDefault();
    if (input.ad === "" || input.soyad === ""  || input.ataad === "" || input.email === "" || input.mesaj === "" ) {
      toast.error("Xanalari tam doldurduğunuzdan emin olun");
    }else{
      setalldata(()=>[...alldata,input]);
      toast.success("Şəxs uğurla əlavə edildi")
      setinput({ad:"",soyad:"",ataad:"",email:"",mesaj:"",ixtisas:"Müəllim",cins:"",sert:false})
      setTimeout(() => {
        navigate("/")
      }, 2000)
    }
  }
  return ( 
  <> 
  <section className='floating full_w'>
    <div className='add_contact_form_div floating full_w'>
      <div className='center'>
        <div className='add_element_sub floating full_w'>
          <h2>Yeni kontakt əlavə et</h2>
          <form className='floating' onSubmit={alldatasave}>
            <label className='marri'>Ad:
              <input
               type="text" 
               className='input_add' 
               name='ad' value={input.ad  || ""} 
               placeholder='Şəxsin adını daxil edin'
               onChange={handeinput}
               />
            </label>
            <label>Soyad:
              <input
                type="text"
                name='soyad'
                value={input.soyad  || ""}
                className='input_add'
                placeholder='Şəxsin soyadını daxil edin'
                onChange={handeinput}
                />
            </label>
            <label className='marri'>Ata adi:
              <input
                type="text"
                name='ataad'
                value={input.ataad  || ""}
                className='input_add'
                placeholder='Şəxsin ata adını daxil edin'
                onChange={handeinput}
                />
            </label>
            <label>Email:
              <input
                type="email"
                name='email'
                value={input.email  || ""}
                className='input_add'
                placeholder='Şəxsin email-ni daxil edin'
                onChange={handeinput} 
                />
            </label>
            <label className='plus_information'>Əlavə məlumat:
              <textarea placeholder='Mesajınız'  name='mesaj' value={input.mesaj  || ""}  onChange={handeinput}  ></textarea>
            </label>
            <label>Vəzifə:
              <select name='ixtisas' value={input.ixtisas} onChange={handeinput}>
                <option  value="Müəllim">Müəllim</option>
                <option value="Kimyaçı">Kimyaçı</option>
                <option value="Proqramçı">Proqramçı</option>
                <option value="Digər">Digər</option>
              </select>
            </label>
            <label>
              Cins:
              <input type="radio" name='cins'   value="Kisi" className='radios' onChange={handeinput}/>Kisi
              <input type="radio" name='cins' value="Qadin" className='radios' onChange={handeinput}/>Qadin
            </label>
            <label className='plus_information check_element'>
              <input type="checkbox" name='sert' value={true} onChange={handeinput}/>Yenilikler barede melumat almaq isteyirsinizmi?
            </label>
            <button type='submit'  className='form_add_buttom'>Əlavə et</button>
          </form>
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
  </section> 
</>
)
}