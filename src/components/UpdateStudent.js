import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import StudentForm from './StudentForm';

const UpdateStudent = () => {
    const [student, setStudent] = useState({
        name: '',
        gender: '',
        class: '',
        studying: '',
    });

    const { id } = useParams();
    const history = useHistory();

    useEffect(() => {
        axios
            .get('http://localhost:5000/student/' + id)
            .then((res) => {
                setStudent(res.data[0]);
                console.log(res.data[0]);
                console.log(student);
            })
            .catch((err) => console.log(err));
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .patch(`http://localhost:5000/update/${id}`, {
                ...student,
                id,
            })
            .then((res) => console.log(res));
        history.push('/');

        // fetch(`http://localhost:5000/update/${id}`, {
        //     method: 'PATCH',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify({ ...student, id }),
        // })
        //     .then((res) => res.json())
        //     .then((data) => {
        //         if (data) {
        //             alert('Status updated successfully.');
        //         }
        //     })
        //     .catch((err) => console.log(err));
    };

    console.log(student);

    return (
        <div>
            <StudentForm student={student} setStudent={setStudent} handleSubmit={handleSubmit} />
        </div>
    );
};

export default UpdateStudent;
