import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Students = ({ handleEdit }) => {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/students/').then((res) => setStudents(res.data));
    }, [students]);

    const handleDelete = (id) => {
        axios.delete('http://localhost:5000/deleteStudent/' + id).then((res) => {
            console.log(res.data);
        });
    };

    return (
        <div>
            <table class='table table-bordered'>
                <thead>
                    <tr>
                        <th scope='col'>#</th>
                        <th scope='col'>Name</th>
                        <th scope='col'>Class</th>
                        <th scope='col'>Gender</th>
                        <th scope='col'>Studying</th>
                        <th scope='col'>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map((student, index) => (
                        <tr key={student._id}>
                            <th scope='row'>{index + 1}</th>
                            <td>{student.name}</td>
                            <td>{student.class}</td>
                            <td>{student.gender}</td>
                            <td>{student.studying ? 'Yes' : 'No'}</td>
                            <td>
                                <div className='btn-group'>
                                    <Link to={'update-student/' + student._id} class='btn btn-primary' onClick={handleEdit}>
                                        Edit
                                    </Link>
                                    <button class='btn btn-danger' onClick={() => handleDelete(student._id)}>
                                        Delete
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Students;
