import React from 'react';
import { NavDropdown } from 'react-bootstrap';
import Avatar from './Avatar';

const HeaderAvatar = () => {
	return (
		<div className='nav__icon my-1 nav__avatar  d-flex flex-column justify-content-center align-content-between '>
			<div className='m-auto text-center justify-content-end'>
				<Avatar avatarSize='24px' withInfo='false' />
				<NavDropdown title='Me' id='nav-dropdown'>
					<NavDropdown.Item eventKey='4.1'>Action</NavDropdown.Item>
					<NavDropdown.Item eventKey='4.2'>Another action</NavDropdown.Item>
					<NavDropdown.Item eventKey='4.3'>Something else here</NavDropdown.Item>
					<NavDropdown.Divider />
					<NavDropdown.Item eventKey='4.4'>Separated link</NavDropdown.Item>
				</NavDropdown>
			</div>
		</div>
	);
};

export default HeaderAvatar;
