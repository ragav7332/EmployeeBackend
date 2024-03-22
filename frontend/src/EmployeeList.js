// import React, { useState } from 'react';
// import axios from 'axios';
// import { Link, useNavigate } from 'react-router-dom';
// import "bootstrap/dist/css/bootstrap.min.css"

// const EmployeeList = () => {
//     const [name, setName] = useState('');
//     const [email, setEmail] = useState('');
//     const [mobileNo, setMobileNo] = useState('');
//     const [designation, setDesignation] = useState('');
//     const [gender, setGender] = useState('');
//     const [course, setCourse] = useState('');
//     const [imageUpload, setImageUpload] = useState('');

    
//     const navigate = useNavigate();
//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         try {
//             await axios.post('http://localhost:8000/addemployees', {
//                 name,
//                 email,
//                 mobileNo,
//                 designation,
//                 gender,
//                 course,
//                 imageUpload
//             });

//             navigate('/getemployee'); // Navigate to EmployeeTable page
//         } catch (error) {
//             console.error(error);
//         }
//     };

//     return (
//         <div class="top-container text-align-center mx-3">
//             <h1>Add Employee</h1>
//             <form onSubmit={(e) => handleSubmit(e)}>
//                 <label>Name:</label>
//                 <input type="text" value={name} onChange={(e) => setName(e.target.value)} required /><br />
//                 <label>Email:</label>
//                 <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required /><br />
//                 <label>Mobile No:</label>
//                 <input type="text" value={mobileNo} onChange={(e) => setMobileNo(e.target.value)} required /><br />
//                 <label>Designation:</label>
//                 <input type="text" value={designation} onChange={(e) => setDesignation(e.target.value)} required /><br />
//                 <label>Gender:</label>
//                 <select value={gender} onChange={(e) => setGender(e.target.value)} required>
//                     <option value="">Select Gender</option>
//                     <option value="Male">Male</option>
//                     <option value="Female">Female</option>
//                     <option value="Other">Other</option>
//                 </select><br />
//                 <label>Course:</label>
//                 <input type="text" value={course} onChange={(e) => setCourse(e.target.value)} required /><br />
//                 <label>Image URL:</label>
//                 <input type="text" value={imageUpload} onChange={(e) => setImageUpload(e.target.value)} required /><br />
//                 <button type="submit">Add Employee</button>
                
//             </form>
//         </div>
//     );
// };

// export default EmployeeList;
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from '@mui/material';
import './style.css'

const EmployeeList = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [mobileNo, setMobileNo] = useState('');
    const [designation, setDesignation] = useState('');
    const [gender, setGender] = useState('');
    const [course, setCourse] = useState('');
    const [imageUpload, setImageUpload] = useState('');

    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await axios.post('http://localhost:8000/addemployees', { 
                name,
                email,
                mobileNo,
                designation,
                gender,
                course,
                imageUpload
            });

            navigate('/getemployee'); // Navigate to EmployeeTable page
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="bottom-container rounded">
            <div className="employee-details rounded mt-2 py-2">
                <h3 className="mb-0">EMPLOYEE DETAILS</h3>
            </div>
            <form onSubmit={(e) => handleSubmit(e)}>                            
            <div className="d-flex gap-3 ms-3 my-4 justify-content-center">
                <div className="d-flex flex-column label-flex ms-3">
                    <label htmlFor="text" className="label_text">
                        Name
                    </label>
                    <label htmlFor="text" className="label_text">
                        Email
                    </label>
                    <label htmlFor="text" className="label_text">
                        Mobile No
                    </label>
                    <label htmlFor="text" className="label_text">
                        Designation
                    </label>
                    <label htmlFor="text" className="label_text">
                        Gender
                    </label>
                    <label htmlFor="text" className="label_text">
                        Course
                    </label>
                    <label htmlFor="text" className="label_text">
                        Image URL
                    </label>
                </div>
                <div className="d-flex flex-column input-flex">
                    <input
                        type="text"
                        className="form-control"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                    <input
                        type="email"
                        className="form-control"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <input
                        type="text"
                        className="form-control"
                        value={mobileNo}
                        onChange={(e) => setMobileNo(e.target.value)}
                        required
                    />
                    <input
                        type="text"
                        className="form-control"
                        value={designation}
                        onChange={(e) => setDesignation(e.target.value)}
                        required
                    />
                    <select
                        className="form-select"
                        value={gender}
                        onChange={(e) => setGender(e.target.value)}
                        required
                    >
                        <option value="">Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                    </select>
                    <input
                        type="text"
                        className="form-control"
                        value={course}
                        onChange={(e) => setCourse(e.target.value)}
                        required
                    />
                    <input
                        type="text"
                        className="form-control"
                        value={imageUpload}
                        onChange={(e) => setImageUpload(e.target.value)}
                        required
                    />
                </div>
            </div>
            <div className="d-flex justify-content-center">
                <Button type="submit" variant="contained" color="primary">
                    Add Employee
                </Button>
            </div>
            </form>
        </div>
    );
};

export default EmployeeList;

//with use of bootdstrap and MUI for Styling purposes with external style as style.css
