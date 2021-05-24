import axios from 'axios';

const apiURL = 'http://localhost:5000';

// Get a specific student info
const getStudentInfo = (id) => {
    const res = axios.get(`${apiURL}/student/${id}`);
    return res;
};

// Get all students
const getStudents = async () => {
    const students = await axios.get(`${apiURL}/students/`);
    return students;
};

// Add a student
const addSudent = (student) => {
    axios.post(`${apiURL}/addStudent`, student);
};

// Update Student
const updateStudent = (student, id) => {
    axios.patch(`${apiURL}/update/${id}`, {
        ...student,
        id,
    });
};

// Delete a student
const deleteStudent = (id) => {
    axios.delete(`${apiURL}/deleteStudent/${id}`);
};

export { addSudent, getStudentInfo, getStudents, updateStudent, deleteStudent };
