import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { getStudentInfo, updateStudent } from '../api/api';
import StudentForm from './StudentForm';

const UpdateStudent = () => {
    const [student, setStudent] = useState({
        _id: null,
        name: '',
        gender: '',
        class: '',
        studying: '',
    });

    const { id } = useParams();
    const history = useHistory();

    useEffect(() => {
        getStudentInfo(id).then((res) => setStudent(res.data[0]));
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault();
        updateStudent(student, id);
        history.push('/');
    };

    return (
        <div>
            <StudentForm
                student={student}
                setStudent={setStudent}
                handleSubmit={handleSubmit}
            />
        </div>
    );
};

export default UpdateStudent;
