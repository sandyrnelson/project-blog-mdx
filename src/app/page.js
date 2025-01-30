import React from 'react';

import BlogSummaryCard from '../components/BlogSummaryCard';
import Spinner from '../components/Spinner';

import styles from './homepage.module.css';
import { getBlogPostList } from '../helpers/file-helpers';

function Home() {
	return (
		<div className={styles.wrapper}>
			<h1 className={styles.mainHeading}>Latest Content:</h1>
			<React.Suspense fallback={<Spinner />}>
				<Blogs />
			</React.Suspense>
		</div>
	);
}

async function Blogs() {
	const blogs = await getBlogPostList();
	console.log(blogs);

	return blogs.map((blog) => (
		<BlogSummaryCard
			key={blog.slug}
			slug={blog.slug}
			title={blog.title}
			abstract={blog.abstract}
			publishedOn={blog.publishedOn}
		/>
	));
}

export default Home;
