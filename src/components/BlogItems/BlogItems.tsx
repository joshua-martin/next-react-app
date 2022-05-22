import { FC } from 'react';
import { gql, useQuery } from '@apollo/client';

import { BlogItem } from './BlogItem';
import * as S from './styles';

export const getBlogItems = gql`
    query getBlogItems {
        blogPostCollection(order: title_ASC, limit: 10) {
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

export const BlogItems: FC = () => {

    const { data, loading, error } = useQuery(getBlogItems);
    
    if (loading) return <p>Loading</p>;
    if (error) return <p>Error</p>;
    if (!data) return <p>No blog items found</p>;

    const blogPosts = data.blogPostCollection.items;
    return (
        <>
            <S.Title>From the blog</S.Title>
            <S.CardWrapper>
                {
                    blogPosts.map((post, i) => {
                        return (<BlogItem key={ i } index={ i } id={ post.sys.id } title={ post.title } description={ post.body } />) 
                    })
                }
            </S.CardWrapper>
        </>
    )
};