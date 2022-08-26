import React, {useState, useEffect} from 'react'
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useNavigate} from "react-router-dom";
import {useParams} from 'react-router-dom';
export default function EditItem() {
  let navigate = useNavigate();
  var {id} = useParams();
  const [data,setdata] = useState(JSON.parse(localStorage.getItem("alldata")).filter(item => item.id === id));
  var alldata = JSON.parse(localStorage.getItem("alldata"))
    .filter(item => item.id !== id);
  const [input,setinput] = useState(data[0]);
  const handleinput = (e) => {
    setinput({
      ...input,
      [e.target.name]: e.target.value
    });
    setdata(() => [input])
  }
  useEffect(() => {
    setdata(() =>[input])
  }, [input])
  const alldatasave = (e) => {
    e.preventDefault();
    if (input.ad === "" || input.soyad === "" || input.ataad === "" || input.email === "" || input.mesaj === "") {
      toast.error("Xanaları tam doldurduğunuzdan əmin olun");
    } else {
      alldata.push(data[0])
      localStorage.setItem("alldata", JSON.stringify(alldata))
      toast.success("Şəxs uğurla yenilendi")
        setTimeout(() => {
          navigate("/")
        }, 2000);
    }
  }
  return ( <> 
  <section className='floating full_w'>
    <div className='add_contact_form_div floating full_w'>
      <div className='center'>
        <div className='add_element_sub floating full_w'>
          <h2>Kontaktinizi yenileyin</h2>
          {data.map((item, index) => {
            return (
              <React.Fragment key={index}>
                <form className='floating' onSubmit={alldatasave}>
                  <label className='marri'>Ad:
                    <input
                      type="text"
                      className='input_add'
                      name='ad'
                      value={item.ad}
                      placeholder='Şəxsin adını daxil edin'
                      onChange={handleinput}/>
                  </label>
                  <label>Soyad:
                    <input
                      type="text"
                      name='soyad'
                      value={item.soyad}
                      className='input_add'
                      placeholder='Şəxsin soyadını daxil edin'
                      onChange={handleinput}/>
                  </label>
                  <label className='marri'>Ata adi:
                    <input
                      type="text"
                      name='ataad'
                      value={item.ataad}
                      className='input_add'
                      placeholder='Şəxsin ata adını daxil edin'
                      onChange={handleinput}/>
                  </label>
                  <label>Email:
                    <input
                      type="email"
                      name='email'
                      value={item.email}
                      className='input_add'
                      placeholder='Şəxsin email-ni daxil edin'
                      onChange={handleinput}/>
                  </label>
                  <label className='plus_information'>Əlavə məlumat:
                    <textarea
                      placeholder='Mesajınız'
                      name='mesaj'
                      value={item.mesaj}
                      onChange={handleinput}></textarea>
                  </label>
                  <label>Vəzifə:
                    <select name='ixtisas' value={item.ixtisas} onChange={handleinput}>
                      <option value="Müəllim">Müəllim</option>
                      <option value="Kimyaçı">Kimyaçı</option>
                      <option value="Proqramçı">Proqramçı</option>
                      <option value="Digər">Digər</option>
                    </select>
                  </label>
                  <label>
                    Cins:
                    <input
                      type="radio"
                      name='cins'
                      value="Kisi"
                      checked={item.cins === "Kisi"
                      ? true
                      : false}
                      className='radios'
                      onChange={handleinput}/>Kisi
                    <input
                      type="radio"
                      name='cins'
                      value="Qadin"
                      checked={item.cins === "Qadin"
                      ? true
                      : false}
                      className='radios'
                      onChange={handleinput}/>Qadin
                  </label>
                  <label className='plus_information check_element'>
                    <input
                      type="checkbox"
                      name='sert'
                      value="true"
                      checked={item.sert === "true"
                      ? true
                      : false}
                      onChange={handleinput}/>Yenilikler barede melumat almaq isteyirsinizmi?
                  </label>
                  <button type='submit' className='form_add_buttom'>Yenile</button>
                </form>
              </React.Fragment>
            )
          })
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
        pauseOnHover/>
    </div>
  </section> 
</>
)
}