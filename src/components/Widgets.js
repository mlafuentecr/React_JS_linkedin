import React from 'react';
import Avatar from './Avatar';
import adImg from '../images/ad.jpg';
//style={{ minWidth: '300px' }}
export default function Widgets() {
	return (
		<section className='widgets d-none d-lg-block col-lg-2 ' style={{ minWidth: '300px' }}>
			<section className='widgets__contacts bg-dark text-white rounded p-3'>
				<h2 className='fs-5 m-auto mb-4'>Add to your feed</h2>

				<label className='list-group-item mb-3 bg-dark text-white m-0 p-0  d-flex justify-content-start'>
					<img className='rounded-circle me-2' src='https://i.pravatar.cc/150?img=3' style={{ width: '45px', height: '45px' }} alt='' />
					<div className='description'>
						<span>First checkbox</span>
						<br />
						<small className='text-muted'>Company • Information Technology and Services</small>
						<br />
						<button type='button' className='btn btn-outline-light rounded-pill p-0 m-0 my-2' style={{ width: '95px', height: '35px' }}>
							+ Follow
						</button>
					</div>
				</label>
				<label className='list-group-item mb-3 bg-dark text-white m-0 p-0  d-flex justify-content-start'>
					<img className='rounded-circle me-2' src='https://i.pravatar.cc/150?img=3' style={{ width: '45px', height: '45px' }} alt='' />
					<div className='description'>
						<span>First checkbox</span>
						<br />
						<small className='text-muted'>Company • Information Technology and Services</small>
						<br />
						<button type='button' className='btn btn-outline-light rounded-pill p-0 m-0 my-2' style={{ width: '95px', height: '35px' }}>
							+ Follow
						</button>
					</div>
				</label>
				<label className='list-group-item mb-3 bg-dark text-white m-0 p-0  d-flex justify-content-start'>
					<img className='rounded-circle me-2' src='https://i.pravatar.cc/150?img=3' style={{ width: '45px', height: '45px' }} alt='' />
					<div className='description'>
						<span>First checkbox</span>
						<br />
						<small className='text-muted'>Company • Information Technology and Services</small>
						<br />
						<button type='button' className='btn btn-outline-light rounded-pill p-0 m-0 my-2' style={{ width: '95px', height: '35px' }}>
							+ Follow
						</button>
					</div>
				</label>
			</section>

			<section className='widgets__ad  bg-dark text-white rounded p-3 mt-3'>
				<p className='fs-6 text-center'>Get the latest jobs and industry news</p>
				<div className='images d-flex gap-3 justify-content-center my-3'>
					<Avatar avatarSize='54px' withInfo='false' />
					<img src={adImg} className=' rounded' style={{ width: '45px' }} alt='' />
				</div>
				<p>Mario, explore relevant opportunities with Kareo</p>
				<br />
				<button type='button' className='btn btn-outline-primary rounded-pill p-0  m-auto' style={{ width: '95px', height: '35px' }}>
					+ Follow
				</button>
			</section>
		</section>
	);
}
