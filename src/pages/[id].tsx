import { FC } from 'react';
import { gql, useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Head from 'next/head';

const getBlogItem = gql`
    query getBlogItem($filter:BlogPostFilter) {
        blogPostCollection(where:$filter) {
            items {
                sys {
                    id
                }
                title
                body
            }
        }
    }
`;

const BlogItems: FC = () => {
    const { query } = useRouter();

    const { data, loading, error } = useQuery(getBlogItem, {
        variables: {
            "filter": {
                "sys": {
                    "id": query.id
                }
            }
        }
    });

    if (loading) return <p>Loading</p>;
    if (error) return <p>Error</p>;
    if (!data) return <p>Failed to load article</p>;

    const blogPosts = data.blogPostCollection.items[0];
    return (
        <>
            <Head>
                <title>{ blogPosts.title }</title>
                <meta name="description" content={ blogPosts.body } />
            </Head>
            <h1>{ blogPosts.title }</h1>
            <p>{ blogPosts.body }</p>
            <Link href="/">Go back</Link>
        </>
    );
};

export default BlogItems;