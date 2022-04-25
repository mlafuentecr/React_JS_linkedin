import React from 'react';
import Avatar from './Avatar';
import '../styles/sidebar.css';

export default function Sidebar() {
	const recentItem = topic => {
		return (
			<span className='sideBar__recenItem mb-2'>
				<span className='text-primary'>#</span> {topic}
			</span>
		);
	};

	return (
		<aside className='app_sidebar  col-12 col-lg-2'>
			<div className='app_sidebar-imgHeadline ' style={{ overflow: 'hidden' }}>
				<img width={'100%'} src='https://picsum.photos/600/100?grayscale' alt='' />
			</div>

			<section className='app_sidebar-avatar bg-dark text-white rounded pb-3'>
				<div className='container'>
					<Avatar avatarSize='74px' />
					<div className='avar__info my-3 py-3 border-bottom border-top'>
						<small className='text-muted fs-6 d-flex justify-content-between'>
							Who viewed your profile <span className='avatar__info-viewProfile text-primary'>44</span>
						</small>
						<div className='text-muted fs-6 d-flex justify-content-between'>
							Views of your post <span className='avatar__info-viewPost text-primary'>44</span>
						</div>
					</div>
					<small className='avatar__ad text-muted'>
						<small> Access exclusive tools & insights</small>
						<small>Get Hired Faster, Try Premium Free</small>
					</small>
				</div>
			</section>

			<section className='app_sidebar-recent mt-4 bg-dark text-white rounded p-3'>
				<h2 className='app_sidebar__title fs-5 mb-3'>Recent</h2>

				{recentItem('WordPress')}
				<br />
				{recentItem('Expert')}

				<br />
				{recentItem('webdesign')}

				<br />
				{recentItem('react')}

				<br />
				{recentItem('webdevelopment')}

				<br />
			</section>
		</aside>
	);
}
