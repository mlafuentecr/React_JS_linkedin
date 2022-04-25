import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Posts from './Posts';
import Widgets from './Widgets';
import '../styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
	return (
		<div className='app' style={{ background: 'black' }}>
			{/* HEADER */}
			<Header />
			<section className='app_body container mt-3  ' style={{ minHeight: '1500px' }}>
				<div className='d-flex flex-column flex-lg-row gap-3'>
					<Sidebar />
					<Posts />
					<Widgets />
				</div>
			</section>
		</div>
	);
}

export default App;
