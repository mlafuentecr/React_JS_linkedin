import React from 'react';
const HeaderIcons = ({ icon, iconTitle, txtColor, alertNumer }) => {
	const alertDiv = alertNumer => {
		if (alertNumer && alertNumer !== 0 && alertNumer !== '0')
			return (
				<span className='top-20 start-100 translate-middle badge rounded-pill bg-danger position-absolute'>
					{alertNumer}
					<span className='visually-hidden'>unread {iconTitle}</span>
				</span>
			);
	};

	return (
		<div className='nav__icon my-1  d-flex flex-column  justify-content-center align-items-stretch '>
			<div className='m-auto'>
				<div className='nav__icon-svg position-relative m-auto' style={{ maxWidth: '40px' }}>
					{icon}
					{alertDiv(alertNumer)}
				</div>
			</div>

			<h3 className='m-0 p-0' style={{ color: `${txtColor}` }}>
				{iconTitle}
			</h3>
		</div>
	);
};

export default HeaderIcons;
