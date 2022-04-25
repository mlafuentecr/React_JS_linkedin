import React from 'react';
import { FaThumbsUp, FaCommentDots, FaShare, FaRegPaperPlane } from 'react-icons/fa';
import FeedIcon from './FeedIcon';
export default function PostItem({ data }) {
	console.log(data);

	return (
		<article className='app_feed-main-articles rounded bg-dark text-white '>
			<div className='card my-2 border-0'>
				<div className='card-body bg-dark '>
					<label className='list-group-item mb-3 bg-dark text-white m-0 p-0  d-flex justify-content-start'>
						<div className='col-12'>
							<div className='card__description d-flex flex-wrap  justify-content-between'>
								<img className='rounded-circle me-2' src='https://i.pravatar.cc/150?img=3' style={{ width: '45px', height: '45px' }} alt='' />
								<div className='card__content '>
									<span>{data.name}</span>
									<br />
									<small className='text-muted col-12 col-md-8 '>Company • Information Technology and Services</small>
								</div>
								<button type='button' className='btn btn-outline-light rounded-pill p-0 m-0 my-2 ' style={{ width: '95px', height: '35px' }}>
									+ Follow
								</button>
								<span className='col-12 my-2'>{data.message}</span>
							</div>
						</div>
					</label>

					<div className='card-text border-bottom'>
						<img className='img-fluid' width={'100%'} src={data.photoUrl} alt={data.name} />
						<div className='card-text-likes my-2  m-auto d-flex  justify-content-between  col-12 d-flex justify-content-between align-items-center'>
							<small className='col-6 text-muted d-flex  justify-content-center align-items-center  '>
								<FeedIcon feedIcon={<FaThumbsUp />} feedIconTxt='Like' /> <span className='mx-2'>mario and 10 others</span>
							</small>
							<small className='col-6 text-muted'>10 comments 1 share</small>
						</div>
					</div>

					<footer>
						<div className='card-text-likes my-2  m-auto d-flex  justify-content-between  col-12'>
							<FeedIcon feedIcon={<FaThumbsUp />} feedIconTxt='Like' className='me-2' />
							<FeedIcon feedIcon={<FaCommentDots />} feedIconTxt='Comment' className='me-2' />
							<FeedIcon feedIcon={<FaShare />} feedIconTxt='Share' className='me-2' />
							<FeedIcon feedIcon={<FaRegPaperPlane />} feedIconTxt='Send' className='me-2' />
						</div>
					</footer>
				</div>
			</div>
		</article>
	);
}
