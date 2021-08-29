import { Row, Col } from "react-bootstrap";
import { getAllBlogs, getBlogBySlug, urlFor } from "lib/api";
import ErrorPage from "next/error";
import { useRouter } from "next/router";
import Head from "next/head";

import PageLayout from "components/PageLayout";
import BlogHeader from "components/BlogHeader";
import BlogContent from "components/BlogContent";
import PreviewAlert from "components/PreviewAlert";

const BlogDetail = ({ blog, preview }) => {
  const router = useRouter();

  if (!router.isFallback && !blog?.slug) {
    return <ErrorPage statusCode="404" />;
  }

  if (router.isFallback) {
    return <PageLayout className="blog-detail-page">Loading...</PageLayout>;
  }

  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/static/favicon.ico" />
        <title>{blog.title} | Izu Blog</title>
        <meta property="og:title" content="Izu Blog" key="title" />
      </Head>
      <PageLayout className="blog-detail-page">
        <Row>
          <Col md={{ span: 10, offset: 1 }}>
            {preview && <PreviewAlert />}
            <BlogHeader
              title={blog.title}
              subtitle={blog.subtitle}
              coverImage={urlFor(blog.coverImage).height(400).url()}
              author={blog.author}
              date={blog.date}
            />
            <hr />
            <BlogContent content={blog.content} />
          </Col>
        </Row>
      </PageLayout>
    </>
  );
};

export async function getStaticProps({ params, preview = false, previewData }) {
  const blog = await getBlogBySlug(params.slug, preview);
  return {
    props: { blog, preview },
    unstable_revalidate: 1,
  };
}

export async function getStaticPaths() {
  const blogs = await getAllBlogs();
  const paths = blogs?.map((b) => ({ params: { slug: b.slug } }));
  return {
    paths,
    fallback: true,
  };
}

export default BlogDetail;
