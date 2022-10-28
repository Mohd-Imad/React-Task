import React, { useState ,useEffect} from 'react';
import axios from "axios"

const Contact = () => {
  const [users, setusers] = useState({
    email: "",
    phone: ""
    
  });

  let handleChange = (e) => {
    let newusers = { ...users }
    newusers[e.target.name] = e.target.value
    setusers(newusers)
  }

  let addUsers = () => {
    axios.post("http://localhost:3000/contact", users).then((res) => {
      console.log(res.data)
      clearForm()
    })
  }

  useEffect(() => {
    axios.get("http://localhost:3000/contact").then((res) => {
      console.log(res.data)
      setusers(res.data)
    })
  }, []);

  let clearForm = () => {
    setusers({
      email: "",
      phone: ""
      
    });
  }

  return (
    <div className="container py-5" >
      <div className="row" id='tablerow'>
        <div style={{ border: "1px solid" }} className="col-md-6">
          <form>
            <h1 className="container py-2">Enter Your Contact Details</h1>
            <div class="mb-3 text-start">
              <label className="form-label">Email Address</label>
              <input type="text" placeholder='email' className='form-control' name="email" value={users.email} onChange={(e) => { handleChange(e) }} /><br />

            </div>
            <div class="mb-3 text-start">
              <label className="form-label">Phone Number</label>
              <input type="text" placeholder='Phone Number' className='form-control' name="phone" value={users.phone} onChange={(e) => { handleChange(e) }} /><br />

            </div>

            <div class="mb-3">

              <button className='btn btn-success my-3' onClick={addUsers}>Next</button>
            </div>


        

          </form>
        </div>
      </div>

      <div>
        <div className="container py-5">
          <div className="row">
            <div className="col-md-12">
              <table className='table table-hover'>
                <thead>
                  <tr>
                    <th>Email Address</th>
                    <th>Phone</th>
                    <th>id</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    users.length > 0 ? <>
                      {users.map((user, i) => {
                        return <tr key={i}>
                          <td>{user.email}</td>
                          <td>{user.phone}</td>
                          <td>{user.id}</td>
                        </tr>
                      })}
                    </> : null
                  }

                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
