import { FC } from 'react';
import { ComponentProps, registerUniformComponent, UniformSlot } from '@uniformdev/canvas-react';
import Container, { PaddingSize } from '../components/Container';
import ArticleListItem from '../components/ArticleListItem';

type ArticlesListProps = ComponentProps<{
  title: string;
  content?: Type.Article[];
}>;

const ArticlesList: FC<ArticlesListProps> = ({ title, content = [] }) => (
  <Container paddingTop={PaddingSize.Large} paddingBottom={PaddingSize.Large}>
    <p className="text-5xl font-bold">{title}</p>
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 justify-items-center gap-6 pt-12 mt-12 border-t border-gray-50">
      {content.map(item => (
        <ArticleListItem key={item.slug} {...item} />
      ))}
      <UniformSlot name="items" />
    </div>
  </Container>
);

registerUniformComponent({
  type: 'articlesList',
  component: ArticlesList,
});

export default ArticlesList;
