import axios from 'axios'
import React, { useEffect, useState } from 'react'


function ClientTable() {
  const [getData,setgetData]=useState([])
 
      const [name,setName]=useState("");
    const [lastname,setLastname]=useState("");
    const [email,setEmail]=useState("");
    const [mobile,setMobile]=useState("");
    const [project,setProject]=useState("")
    const [id,setId]=useState()



async function singleTable(id){
const res=await axios.get( `http://localhost:5000/api/get-single-user/${id}`)
 
console.log(res?.data?.single?.name)

setName(res?.data?.single?.name)
setId(res?.data?.single?._id)

 setLastname(res?.data?.single?.lastname)
setEmail(res?.data?.single?.email)
setMobile(res?.data?.single?.mobile)
setProject(res?.data?.single?.project)

}


  async function getdata(){
    const {data} =await axios.get(`http://localhost:5000/api/getdata`)
    
    setgetData(data.find)
    // console.log(data.find)
  }
 async function handleUpdate(){
  console.log(id)
  await axios.put(`http://localhost:5000/api/update/${id}`,{
    name:name,
    lastname:lastname,
    email:email,
    project:project
  })
  alert('added successfully...')
 }



useEffect(()=>{
  getdata();  
},[])

async function handledelete(_id){
  await axios.delete(`http://localhost:5000/api/delete/${_id}`)
  alert("deleted successfully")

getdata()
}


  return (
    <div>

{/* update table */}
<div>
        

        {/* Modal */}
        <div
          className="modal  fade"
          id="exampleModal"
          tabIndex={-1}
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-body">
              
<form 
          
          >
            <div className="mb-3">
              <label htmlFor="exampleInputName" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                LASTNAME
              </label>
              <input
                type="lastname"
                className="form-control"
                name="lastname"
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div> 

            <div className="mb-3">
              <label htmlFor="exampleInputName" className="form-label">
                Mobile
              </label>
              <input
                type="text"
                className="form-control"
                name="mobile"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label
                htmlFor="exampleFormControlTextarea1"
                className="form-label"
              >
                Project
              </label>
              <textarea
                className="form-control"
              
                name="project"
                value={project}
                onChange={(e) => setProject(e.target.value)}
              />
            </div>

            <button type="submit" className="btn btn-success w-100"
             onClick={()=>handleUpdate()}
            >
             UPDATE
            </button>
          </form>
              </div>
            </div>
          </div>
        </div>
      </div>

{/* end */}



      {JSON.stringify(getData,null,4)}
        <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">email</th>
      <th scope="col">mobile No.</th>
      <th scope="col">project</th>
      <th></th>
    </tr>
  </thead>
  <tbody>
   {getData.map((alldata,i)=>{
   
  
return(
  <>
<tr>
<th scope="row">{i+1}</th>
      <td>{alldata.name}</td>
      <td>{alldata.lastname}</td>
      <td>{alldata.email}</td>
      <td>{alldata.mobile}</td>
      <td>{alldata.project}</td>
      {/* <NavLink className="btn btn-success btn-sm me-2" to={`/updatepage/${alldata._id}`}>
                            Edit
                          </NavLink> */}

<button
                            type="button"
                            className="btn btn-outline-primary"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                            onClick={()=>singleTable(alldata._id)}
                          >
                            Edit
                          </button>               
      <button className='btn btn-primary' onClick={()=>{if(window.confirm("are you conform to delete ?")){handledelete(alldata._id)}}}>Delete</button>
      </tr>

</>
)
   
   })} 
   </tbody> 
 </table>  


    </div>
  )
}

export default ClientTable