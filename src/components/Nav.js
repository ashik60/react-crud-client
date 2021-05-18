import React from 'react';
import { Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Nav = () => {
    return (
        <Navbar expand='lg'>
            <div className='container'>
                <Navbar.Brand>
                    <NavLink  className='nav-link' to='/'>
                       Student Management
                    </NavLink>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls='responsive-navbar-nav' />

                <Navbar.Collapse id='responsive-navbar-nav'>
                    <div className='mr-auto navbar-nav'>
                        <li className='nav-item ml-2'>
                            <NavLink exact className='nav-link' to='/'>
                                Home
                            </NavLink>
                        </li>
                        <li className='nav-item  ml-2'>
                            <NavLink  className='nav-link' to='/add-student'>
                                Add Student
                            </NavLink>
                        </li>
                    </div>
                </Navbar.Collapse>
            </div>
        </Navbar>
    );
};

export default Nav;
