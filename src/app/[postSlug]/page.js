import React from 'react';
import { MDXRemote } from 'next-mdx-remote/rsc';
import BlogHero from '@/components/BlogHero';
import { BLOG_TITLE } from '@/constants';

import styles from './postSlug.module.css';
import { loadBlogPost } from '@/helpers/file-helpers';

export async function generateMetadata({ params }) {
	const { postSlug } = await params;
	const { frontmatter } = await loadBlogPost(postSlug);

	return {
		title: `${frontmatter.title} • ${BLOG_TITLE}`,
		description: frontmatter.abstract,
	};
}

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
