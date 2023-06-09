export enum BaseAddPages {
  Home = '/',
}

export enum ProductPagesPrefixes {
  ProductListPage = '/shop',
  ProductDetailsPage = '/products',
}

export enum ArticlePagesPrefixes {
  ArticlesPage = '/articles',
}

export const AppPages = {
  ...BaseAddPages,
  Articles: '/articles',
};

export const InternalCompositionPaths = {
  ArticleTemplate: `${AppPages.Articles}/article-slug`,
};

export const DepthOfNavigationLinks = 1;
