import React, { useState ,useEffect} from 'react';
import axios from "axios"

import { Navigate} from "react-router-dom";
const Home = () => {
  
  const [users, setusers] = useState({
    firstname: "",
    lastname: "",
    day: "",
    month:"",
    year:""
  });
  // let navigate=useNavigate()
  let [submitted,setSubmitted]=useState(false)

  let handleChange = (e) => {
    let newusers = { ...users }
    newusers[e.target.name] = e.target.value
    setusers(newusers)
  }

  let addUsers = () => {
    axios.post("http://localhost:3000/task", users).then((res) => {
      
      console.log(res.data)
      setSubmitted(true)
      // alert("successfully navigate")
      // navigate("contact")
      clearForm()
    })

  }

  useEffect(() => {
    axios.get("http://localhost:3000/task").then((res) => {
      console.log(res.data)
      setusers(res.data)
    })
  }, []);

  let clearForm = () => {
    setusers({
      firstname: "",
      lastname: "",
      day: "",
      month: "",
      year: ""
    });
  }

  return (
  
    <div className="container py-5" >
       {submitted?<Navigate to="/contact"/>    :
       <>
        <div className="row" id='tablerow'>
        <div style={{ border: "1px solid" }} className="col-md-6">
          <form>
            <h1 className="container py-2">Enter Your Personal Details</h1>
            <div class="mb-3 text-start">
              <label className="form-label">First Name</label>
              <input type="text" placeholder='First Name' className='form-control' name="firstname" value={users.firstname} onChange={(e) => { handleChange(e) }} /><br />

            </div>
            <div class="mb-3 text-start">
              <label className="form-label">Last Name</label>
              <input type="text" placeholder='Last Name' className='form-control' name="lastname" value={users.lastname} onChange={(e) => { handleChange(e) }} /><br />

            </div>

            <div class="mb-3 text-start">
              <label className="form-label">Enter Your Date Of Birth</label>
              <fieldset>
                <legend> <label>Date Of Birth </label></legend>
                <div className="row">
                  <div className="col-md-4">
                    <div class="mb-2 text-start">
                      <input type="text" placeholder='Day' className='form-control' name="day" value={users.day} onChange={(e) => { handleChange(e) }} /><br />

                    </div>


                  </div>
                  <div className="col-md-4">
                    <div class="mb-2 text-start">
                      <input type="text" placeholder='month' className='form-control' name="month" value={users.month} onChange={(e) => { handleChange(e) }} /><br />

                    </div>


                  </div>
                  <div className="col-md-4">
                    <div class="mb-2 text-start">
                      <input type="text" placeholder='year' className='form-control' name="year" value={users.year} onChange={(e) => { handleChange(e) }} /><br />

                    </div>


                  </div>
                </div>
              </fieldset>


            </div>

            <div class="mb-3">

              <button className='btn btn-warning my-3' onClick={addUsers}>Next</button>
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
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>date</th>
                    <th>month</th>
                    <th>year</th>
                    <th>id</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    users.length > 0 ? <>
                      {users.map((user, i) => {
                        return <tr key={i}>
                          <td>{user.firstname}</td>
                          <td>{user.lastname}</td>
                          <td>{user.day}</td>
                          <td>{user.month}</td>
                          <td>{user.year}</td>
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
       </>
       
       }
     
      
      
    </div>
  );
}

export default Home;
