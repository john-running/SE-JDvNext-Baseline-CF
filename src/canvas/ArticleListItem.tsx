import { FC } from 'react';
import { ComponentProps, registerUniformComponent } from '@uniformdev/canvas-react';
import { getFormattedLink } from '../utilities';
import BaseArticleListItem from '../components/ArticleListItem';

const ArticleListItem: FC<ComponentProps<Type.Article>> = ({ slug, title, description, thumbnail = '' }) => {
  const thumbnailUrl = getFormattedLink(thumbnail.slice(2));
  return <BaseArticleListItem title={title} description={description} slug={slug} thumbnail={thumbnailUrl} />;
};

registerUniformComponent({
  type: 'articleListItem',
  component: ArticleListItem,
});
export default ArticleListItem;
