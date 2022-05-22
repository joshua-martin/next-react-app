import { FC } from 'react';
import Link from 'next/link';

import * as S from './styles';

interface ItemProps {
    index: number;
    id: string;
    title: string;
    description: string;
};
  
export const BlogItem: FC<ItemProps> = ({ index, id, title, description }) => {
    return (
        <Link href="/[id]" as={`/${id}`} passHref>
            <S.Card largeItem={index % 5 == 0} title={`Read Article - ${title}`}>
                <S.CardTitle largeItem={index % 5 == 0}>{title}</S.CardTitle>
                <S.CardContent largeItem={index % 5 == 0}>{description}</S.CardContent>
                <S.Arrow aria-hidden="true">&#8594;</S.Arrow>
            </S.Card>
        </Link>
    );
};