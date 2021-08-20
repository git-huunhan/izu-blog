import { Row, Col } from "react-bootstrap";
import PageLayout from "components/PageLayout";
import AuthorIntro from "components/AuthorIntro";
import CardListItem from "components/CardListItem";
import CardItem from "components/CardItem";

import { getAllBlogs } from "lib/api";

export default function Home({ blogs }) {
  return (
    <PageLayout>
      <div className="blog-detail-page">
        <AuthorIntro />

        <Row className="mb-5">
          {/* <Col md="8">
            <CardListItem />
          </Col> */}

          {blogs.map((blog) => (
            <Col key={blog.slug} md="4">
              <CardItem title={blog.title} subtitle={blog.subtitle} />
            </Col>
          ))}
        </Row>
      </div>
    </PageLayout>
  );
}

// This function is called during the build (build time)
// Provides props to your page
// It will create static page
export async function getStaticProps() {
  const blogs = await getAllBlogs();
  return {
    props: {
      blogs,
    },
  };
}

// export async function getServerSideProps() {
//   const blogs = await getAllBlogs();
//   return {
//     props: {
//       blogs,
//     },
//   };
// }