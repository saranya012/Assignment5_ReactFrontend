import React from 'react'
import EmployeeHeader from './EmployeeHeader'
import { useState } from "react";
import axios from 'axios';

const EmployeeForm = () => {
    const apiUrl = "https://jsonplaceholder.typicode.com/users"
    const [input, setInput] = useState([])

    const changeMyData = (event) => {
        setInput({
            ...input, [event.target.name]: event.target.value
        })
    }

    const buttonClickEvent = () => {
        console.log(input)
        axios.post(apiUrl, input).then(
            (response) => {
                console.log(response.data)
                if (response.data.status == "success") {
                    alert("Employee added successfully")
                } else {
                    alert("Something went wrong..!!")
                }
            }               
        )
    }
    return (
        <div>
            <EmployeeHeader />
            <div className="container">
                <div className="row g-3">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <label htmlFor="" className="form-label">Name : </label>
                        <input name="name" type="text" className="form-control" onChange={changeMyData} />

                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <label htmlFor="" className="form-label">Designation : </label>
                        <input name="designation" type="text" className="form-control" onChange={changeMyData} />


                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <label htmlFor="" className="form-label">Location : </label>
                        <input name="location" type="text" className="form-control" onChange={changeMyData} />


                    </div>   
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <label htmlFor="" className="form-label">Salary : </label>
                        <input name="salary" type="number" className="form-control" onChange={changeMyData} />


                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <button onClick={buttonClickEvent} className="btn btn-warning">ADD EMPLOYEE</button>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default EmployeeForm