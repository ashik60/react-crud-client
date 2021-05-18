import axios from 'axios';
import React, { useState } from 'react';
import StudentForm from './StudentForm';

const AddStudent = () => {
    const [student, setStudent] = useState({
        name: '',
        gender: '',
        class: '',
        studying: false,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(student);
        addStudent();
    };

    const addStudent = () => {
        axios.post('http://localhost:5000/addStudent', student).then((res) => console.log(res));
    };

    return (
        <div>
            <StudentForm handleSubmit={handleSubmit} student={student} setStudent={setStudent} />
        </div>
    );
};

export default AddStudent;
