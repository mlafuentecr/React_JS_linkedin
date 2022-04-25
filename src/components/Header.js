import React from 'react';
import { Container, Col, Navbar, Form } from 'react-bootstrap';
import { FaSearch, FaLinkedinIn, FaCommentDots, FaHome, FaUsers, FaBriefcase, FaBell } from 'react-icons/fa';
import '../styles/header.css';
import HeaderIcon from './HeaderIcon';
import HeaderAvatar from './HeaderAvatar';
const Header = () => {
	return (
		<Navbar className='nav__top bg-dark' sticky='top'>
			<Container className=' d-flex flex-wrap justify-content-center align-content-center  align-items-center '>
				<Col xs={12} md={6} className='nav__left d-flex flex-wrap justify-content-start align-content-center  align-items-center'>
					<Navbar.Brand className='bg-primary  rounded text-center text-white' href='#home' style={{ minWidth: '40px' }}>
						<FaLinkedinIn />
					</Navbar.Brand>
					<Form.Group className='nav__search ps-4 d-flex justify-content-center align-content-center  align-items-center '>
						<FaSearch className='me-3 nav__search-icon' />
						<Form.Control className='nav__search-input border-0 ' placeholder='Search' />
					</Form.Group>
				</Col>

				<Col className='nav__right d-flex gap-4 ' xs={12} md={6}>
					<HeaderIcon className='m-auto' icon={<FaHome size='25' color={'white'} />} txtColor='white' iconTitle='Home' />
					<HeaderIcon className='m-auto' icon={<FaUsers size='25' color={'white'} />} alertNumer='' txtColor='white' iconTitle='My Network' />
					<HeaderIcon className='m-auto' icon={<FaBriefcase size='25' color={'white'} />} alertNumer='' txtColor='white' iconTitle='Jobs' />
					<HeaderIcon className='m-auto' icon={<FaCommentDots size='25' color={'white'} />} alertNumer='0' txtColor='white' iconTitle='Messaging' />
					<HeaderIcon className='m-auto' icon={<FaBell size='25' color={'white'} />} alertNumer='3' txtColor='white' iconTitle='Notifications' />
					<HeaderAvatar txtColor='white' />
				</Col>
			</Container>
		</Navbar>
	);
};

export default Header;
