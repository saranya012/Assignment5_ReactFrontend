import axios from 'axios'
import React, { useEffect, useState } from 'react'
import EmployeeHeader from './EmployeeHeader'

const EmployeeList = () => {
    const apiUrl = "https://jsonplaceholder.typicode.com/users"

    const [data, setData] = useState([])

    useEffect(
        () => {
            axios.get(apiUrl).then(
                (response) => {
                    console.log(response.data)
                    setData(response.data)
                })
        }, []
    )

    return (
        <div>
            <EmployeeHeader />
            <div className="container">
                <div className="row g-3">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            {data.map(
                                (item) => {
                                    return (
                                        <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3 col-xxl-3">
                                            <div className="card">
                                                <p className="card-text">Employee ID : {item.id}</p>
                                                <div className="card-body">
                                                    <h5 className="card-title">Name : {item.name}</h5>
                                                    <p className="card-text">Email ID : {item.email}</p>
                                                </div>
                                            </div>
                                        </div>)
                                }
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EmployeeList