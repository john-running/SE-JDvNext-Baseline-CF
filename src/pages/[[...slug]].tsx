import { GetStaticPaths, GetStaticProps } from 'next';
import { getFormattedPath } from '@/utilities';
import { getPathsFromProjectMap, getCompositionProps } from '@/utilities/canvas';
import { AppPages, DepthOfNavigationLinks } from '@/constants';
import { CommonContainer } from '@/components';

export const getStaticProps: GetStaticProps<{ preview?: boolean }> = async context => {
  const { preview, params } = context;
  const { slug: initialSlug } = params || {};

  const path = getFormattedPath(AppPages.Home, initialSlug);

  return getCompositionProps({ path, context, navigationLinkOptions: { depth: DepthOfNavigationLinks } })
    .then(compositionProps => ({
      props: {
        ...compositionProps,
        preview: Boolean(preview),
        revalidate: Number.MAX_SAFE_INTEGER,
      },
    }))
    .catch(() => ({ notFound: true }));
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await getPathsFromProjectMap({ depth: 1 }); // depth: 1 - The main dynamic route will support only first level (root) paths
  return { paths, fallback: false };
};

export default CommonContainer;
