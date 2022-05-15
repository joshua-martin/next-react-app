import { FC } from 'react';
import Link from 'next/link';

import * as S from './styles';

type PostProps = {
    index: number;
    id: string;
    title: string;
    description: string;
};
  
const BlogItem: FC = (props: PostProps) => {
    return (
        <Link href="/[id]" as={`/${props.id}`} passHref>
            <S.Card largeItem={props.index % 5 == 0} title={`Read Article - ${props.title}`}>
                <S.CardTitle>{props.title}</S.CardTitle>
                <S.CardContent>{props.description}</S.CardContent>
                <S.Arrow aria-hidden="true">&#8594;</S.Arrow>
            </S.Card>
        </Link>
    );
};

export default BlogItem;