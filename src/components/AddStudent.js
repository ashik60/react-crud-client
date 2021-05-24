import React, { useState } from 'react';
import { addSudent } from '../api/api';
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
        addSudent(student);
    };

    return (
        <div>
            <StudentForm
                handleSubmit={handleSubmit}
                student={student}
                setStudent={setStudent}
            />
        </div>
    );
};

export default AddStudent;
