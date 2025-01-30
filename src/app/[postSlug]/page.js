import React from 'react';
import { MDXRemote } from 'next-mdx-remote/rsc';
import BlogHero from '@/components/BlogHero';

import styles from './postSlug.module.css';
import { loadBlogPost } from '@/helpers/file-helpers';


async function BlogPost({ params }) {
	const { postSlug } = await params;
	const blog = await loadBlogPost(postSlug);

	return (
		<article className={styles.wrapper}>
			<BlogHero
				title={blog.frontmatter.title}
				publishedOn={blog.frontmatter.publishedOn}
			/>
			<div className={styles.page}>
				<MDXRemote source={blog.content} />
			</div>
		</article>
	);
}

export default BlogPost;
