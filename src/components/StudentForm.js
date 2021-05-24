import React from 'react';

const StudentForm = ({ student, setStudent, handleSubmit }) => {
    const handleChange = (event) => {
        const { name, value } = event.target;
        setStudent({ ...student, [name]: value });
    };

    const handleCheckbox = (event) => {
        const { name, checked } = event.target;
        setStudent({ ...student, [name]: checked });
    };

    const btnText = student.name ? 'Update' : 'Add';

    return (
        <form className='border' onSubmit={handleSubmit}>
            <div className='form-group'>
                <label htmlFor='name'>Student Name</label>
                <input
                    type='text'
                    value={student.name}
                    onChange={handleChange}
                    className='form-control'
                    name='name'
                    placeholder='Your name'
                />
            </div>
            <div className='form-group'>
                <label htmlFor='class'>Class</label>
                <select
                    value={student.class}
                    onChange={handleChange}
                    className='form-control'
                    name='class'
                >
                    <option value='8'>8</option>
                    <option value='9'>9</option>
                    <option value='10'>10</option>
                </select>
            </div>
            <div className='form-group'>
                <label htmlFor='gender'>Gender: </label>
                <div className='form-check form-check-inline ml-2' id='gender'>
                    <input
                        onChange={handleChange}
                        className='form-check-input'
                        type='radio'
                        name='gender'
                        value='Male'
                        checked={student.gender === 'Male'}
                    />
                    <label className='form-check-label' htmlFor='Male'>
                        Male
                    </label>
                </div>
                <div className='form-check form-check-inline'>
                    <input
                        onChange={handleChange}
                        className='form-check-input'
                        type='radio'
                        name='gender'
                        value='Female'
                        checked={student.gender === 'Female'}
                    />
                    <label className='form-check-label' htmlFor='female'>
                        Female
                    </label>
                </div>
            </div>
            <div className='form-check'>
                <input
                    className='form-check-input'
                    name='studying'
                    type='checkbox'
                    checked={student.studying}
                    onChange={handleCheckbox}
                />
                <label className='form-check-label'>Current Student</label>
            </div>
            <button type='submit' className='btn btn-primary'>
                {btnText + ' Student'}
            </button>
        </form>
    );
};

export default StudentForm;
