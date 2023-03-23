import { GetStaticProps, GetStaticPaths } from 'next';
import { CommonContainer } from '@/components';
import { getFormattedPath } from '@/utilities';
import { getCompositionProps } from '@/utilities/canvas';
import { AppPages, DepthOfNavigationLinks, InternalCompositionPaths } from '@/constants';
import { enhancerCustomExtenderFactory, getArticles } from '@/utilities/enhancers/article';

export const getStaticProps: GetStaticProps<{ preview?: boolean }> = async context => {
  const { preview, params } = context;
  const { slug: initialSlug } = params || {};

  const path = getFormattedPath(AppPages.Articles, initialSlug);
  const articlesSlug = String(initialSlug);
  const articles = await getMemorizedData({ preview });

  if (!articles || !path) return { notFound: true };

  const selectedArticle = articles?.[articlesSlug];

  return getCompositionProps({
    path, // Request for custom page
    defaultPath: InternalCompositionPaths.ArticleTemplate, // Request a default template page for articles in case there is no custom page
    context,
    navigationLinkOptions: { depth: DepthOfNavigationLinks },
    extendEnhancer: selectedArticle ? enhancerCustomExtenderFactory(selectedArticle) : undefined,
  })
    .then(compositionProps => ({
      props: {
        ...compositionProps,
        preview: Boolean(preview),
      },
    }))
    .catch(() => ({ notFound: true }));
};

const getMemorizedData = (() => {
  let memo: { [name: string]: Type.Article } | null = null;
  return async ({ preview = false }) => {
    if (memo && !preview) return memo;
    memo = await getArticles(preview, AppPages.Articles, ['contentfulMultiEntry', 'contentfulQuery']);
    return memo;
  };
})();

export const getStaticPaths: GetStaticPaths = async () => {
  const articles = await getMemorizedData({ preview: false });
  const paths = Object.keys(articles || {}).map(articleSlug => `${AppPages.Articles}/${articleSlug}`);
  return { paths, fallback: false };
};

export default CommonContainer;
