import React from 'react';
export default function FeedIcon({ feedIcon, feedIconTxt }) {
	return (
		<div className='nav__icon my-1  d-flex flex-row  justify-content-center align-items-stretch '>
			<div className='m-auto d-flex '>
				<div className=' position-relative m-auto d-flex justify-content-center align-content-center align-items-center'>
					{feedIcon}
					<div className='txt ms-2'>{feedIconTxt}</div>
				</div>
			</div>
		</div>
	);
}
