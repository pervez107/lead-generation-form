import axios from "axios";
import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import * as yup from "yup";


export function EmailForm(){

    let navigate=useNavigate();

    const formik=useFormik({
        initialValues:{
            name:'',
            email:'',
            company:'',
            message:''
        },
        validationSchema:yup.object({
            name:yup.string().required('Name must Required').min(4,'Name is too short').max(20,'Name is too Long'),
            email:yup.string().required('Email must Required').matches(/^[a-zA-Z0-9._%+-]+@gmail\.com$/,'Only @gmail.com emails are allowed')
        }),
        onSubmit:(Data)=>{
            axios.post('http://localhost:5000/api/leads',Data)
            .then((response) => {
      alert(response.data.message); // Show success message from backend
      navigate('/'); // Redirect after success
    })
    .catch((error) => {
        if (error.response && error.response.data && error.response.data.error) {
            alert('Error: ' + error.response.data.error); // Show backend error
        } else {
            alert('An unexpected error occurred.');
        }
    });
            
            navigate('/');
        }
    })


    return(
        <div className="d-flex justify-content-center rounded rounded-1">
            <div className=" bg-light w-25 p-3 m-2" style={{height:'450px',overflow:'auto'}}>
                <h2>Email-form for client</h2>
                <form   onSubmit={formik.handleSubmit}>
                    <dl>
                        <dt>User-Name</dt>
                        <dd><input type="text" onBlur={formik.handleBlur} onChange={formik.handleChange} name="name" className=" form-control"/></dd>
                        <dd className=" text-danger">{formik.errors.name}</dd>
                        <dt>User-Email</dt>
                        <dd><input type="text" onBlur={formik.handleBlur} onChange={formik.handleChange} name="email" className="form-control" /></dd>
                        <dd className=" text-danger">{formik.errors.email}</dd>
                        <dt>Company-Name</dt>
                        <dd><input type="text" onChange={formik.handleChange} name="company" placeholder="Company (optional)" className="form-control" /></dd>
                        <dt>Message</dt>
                        <dd><textarea onChange={formik.handleChange} name="message" placeholder="Message (optional)" className=" w-100" ></textarea></dd>
                    </dl>
                    <div>
                        <button type="submit" className="btn btn-success w-50">Submit</button>
                        <Link to='/' className="btn btn-danger w-50">Go-Back</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}