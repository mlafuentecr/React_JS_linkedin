import React from 'react';
import { Form } from 'react-bootstrap';
import Avatar from './Avatar';
import PostItem from './PostItem';
import { FaEdit, FaImage, FaYoutube, FaCalendar, FaSquare } from 'react-icons/fa';
import FeedIcon from './FeedIcon';
import { useEffect, useState } from 'react';
import { db } from '../firebase-config';
import { collection, onSnapshot, addDoc, query, orderBy, serverTimestamp, getFirestore } from 'firebase/firestore';

export default function Posts() {
	const [feedPost, setFeedPost] = useState([]);
	const [feedField, setfeedField] = useState('');

	//get firebase post
	useEffect(() => {
		///GET SNAPSHOT FROM DB
		const db = getFirestore();
		const queryPost = query(collection(db, 'posts'), orderBy('timestamp', 'desc'));

		const posts = onSnapshot(
			queryPost,
			snapshot => {
				console.log(snapshot.docs, 'snapshot');
				///IF there any info
				if (snapshot.docs.length > 0) {
					console.log('Document data:', posts);
					//FILL FeedPost with each doc inside
					setFeedPost(
						snapshot.docs.map(doc => ({
							id: doc.id,
							data: doc.data(),
						}))
					);
				} else {
					// doc.data() will be undefined in this case
					console.log('No such document!');
				}
			},
			error => {
				// ...
				console.error('Error');
			}
		);
	}, []);

	// postFeed
	const sendPost = e => {
		if (e.key === 'Enter') {
			console.log('posting', feedField);

			addDoc(collection(db, 'posts'), {
				name: 'Mario test',
				description: 'this is a test',
				message: feedField,
				photoUrl: `https://picsum.photos/550/540?random=${Math.random()}`,
				timestamp: serverTimestamp(),
			});

			//clear field
			setfeedField('');
		}
	};

	return (
		<section className='app_feed-main   flex-md-grow-1  '>
			{/* FEED SEARCH */}
			<section className='app_feed-post rounded bg-dark text-white d-flex flex-column rounded p-3'>
				<div className='avatar_search col-12 d-flex'>
					<Avatar avatarSize='48px' withInfo='false' />
					<Form.Group className='nav__search border border-white  border-1 d-flex rounded w-100 ms-3 ps-4 d-flex justify-content-start align-content-center  align-items-center rounded my-2 '>
						<FaEdit className='me-3 nav__search-icon' />
						<input
							className='nav__search-input border-0 text-white'
							placeholder='Search'
							value={feedField}
							onChange={e => {
								setfeedField(e.target.value);
							}}
							onKeyPress={sendPost}
						/>
					</Form.Group>
				</div>

				<div className='app_feed-actions d-flex col-12  mt-3'>
					<div className='nav__icon my-1  d-flex flex-row   col-12 '>
						<div className='m-auto d-flex  col-12'>
							<div className=' position-relative m-auto d-flex  justify-content-between  col-12'>
								<FeedIcon feedIcon={<FaImage />} feedIconTxt='Picture' className='me-2' />
								<FeedIcon feedIcon={<FaYoutube />} feedIconTxt='Picture' className='me-2' />
								<FeedIcon feedIcon={<FaCalendar />} feedIconTxt='Event' className='me-2' />
								<FeedIcon feedIcon={<FaSquare />} feedIconTxt='Write Article' className='me-2' />
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* FEED POst */}
			{feedPost.map(post => (
				<PostItem data={post.data} key={post.id} />
			))}
		</section>
	);
}
