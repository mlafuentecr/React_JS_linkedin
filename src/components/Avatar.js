import React from 'react';
import avatarImg from '../images/1602627133095.jpg';
export default function Avatar({ avatarSize, withInfo }) {
	const info = withInfo => {
		if (!withInfo) {
			return (
				<div className='avatar__info'>
					<h2 className='avatar__title fs-4'>Mario Lafuente</h2>
					<p className='avatar__description'>WordPress developer | Front end developer</p>
				</div>
			);
		}
	};

	return (
		<div className='avatar d-flex flex-column'>
			<img className='avatar__img rounded-circle m-auto' src={avatarImg} style={{ width: `${avatarSize}` }} alt='mario' />
			{info(withInfo)}
		</div>
	);
}
