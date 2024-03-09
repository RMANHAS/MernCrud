// import axios from 'axios';
// import React, { useEffect, useState } from 'react'
// import { useParams } from 'react-router-dom'

// function UpdatePage() {

//     const [name,setName]=useState();
//     const [lastname,setLastname]=useState();
//     const [email,setEmail]=useState();
//     const [mobile,setMobile]=useState();
//     const [project,setProject]=useState()
// const {id}=useParams();

// async function singleTable(){
// const {data}=await axios.get( `http://localhost:5000/api/get-single-user/${id}`)
// setName(data?.name)
// setLastname(data?.lastname)
// setEmail(data?.email)
// setMobile(data?.mobile)
// setProject(data?.project)
// }

// useEffect(()=>{
//     singleTable()
// },1000)

//   return (
//     <div className="row">
//       <div className="col-md-6 offset-3">
//         <div className="card p-5 my-3">
//           <h3>Create Client</h3>

//           <form 
//         //   onSubmit={handleSubmit}
//           >
//             <div className="mb-3">
//               <label htmlFor="exampleInputName" className="form-label">
//                 Name
//               </label>
//               <input
//                 type="text"
//                 className="form-control"
//                 name="name"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//               />
//             </div>
//             <div className="mb-3">
//               <label htmlFor="exampleInputPassword1" className="form-label">
//                 LASTNAME
//               </label>
//               <input
//                 type="lastname"
//                 className="form-control"
//                 name="lastname"
//                 value={lastname}
//                 onChange={(e) => setLastname(e.target.value)}
//               />
//             </div>

//             <div className="mb-3">
//               <label htmlFor="exampleInputEmail1" className="form-label">
//                 Email address
//               </label>
//               <input
//                 type="email"
//                 className="form-control"
//                 name="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//               />
//             </div> 

//             <div className="mb-3">
//               <label htmlFor="exampleInputName" className="form-label">
//                 Mobile
//               </label>
//               <input
//                 type="text"
//                 className="form-control"
//                 name="mobile"
//                 value={mobile}
//                 onChange={(e) => setMobile(e.target.value)}
//               />
//             </div>

//             <div className="mb-3">
//               <label
//                 htmlFor="exampleFormControlTextarea1"
//                 className="form-label"
//               >
//                 Project
//               </label>
//               <textarea
//                 className="form-control"
              
//                 name="project"
//                 value={project}
//                 onChange={(e) => setProject(e.target.value)}
//               />
//             </div>

//             <button type="submit" className="btn btn-success w-100">
//              UPDATE
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default UpdatePage