import { useState } from "react";
import { Row, Col } from "react-bootstrap";
import PageLayout from "components/PageLayout";
import AuthorIntro from "components/AuthorIntro";
import CardListItem from "components/CardListItem";
import CardItem from "components/CardItem";

import { getAllBlogs } from "lib/api";
import GetTimeAgo from "components/GetTimeAgo";
import GetFullTime from "components/GetFullTime";
import FilteringMenu from "components/FilteringMenu";

export default function Home({ blogs }) {
  const [filter, setFilter] = useState({
    view: { list: 1 },
  });

  return (
    <PageLayout>
      <div className="blog-detail-page">
        <AuthorIntro />
        <div className="d-flex justify-content-end">
          <FilteringMenu
            filter={filter}
            onChange={(option, value) => {
              setFilter({ ...filter, [option]: value });
            }}
          />
        </div>

        <Row className="mb-5">
          {blogs.map((blog) =>
            filter.view.list ? (
              <Col key={`${blog.slug}-list`} md="12">
                <CardListItem
                  author={blog.author}
                  title={blog.title}
                  subtitle={blog.subtitle}
                  fulltime={<GetFullTime date={blog.date} />}
                  timeago={<GetTimeAgo date={blog.date} />}
                  image={blog.coverImage}
                  link={{
                    href: "/blogs/[slug]",
                    as: `/blogs/${blog.slug}`,
                  }}
                />
              </Col>
            ) : (
              <Col key={blog.slug} md="4">
                <CardItem
                  author={blog.author}
                  title={blog.title}
                  subtitle={blog.subtitle}
                  fulltime={<GetFullTime date={blog.date} />}
                  timeago={<GetTimeAgo date={blog.date} />}
                  image={blog.coverImage}
                  link={{
                    href: "/blogs/[slug]",
                    as: `/blogs/${blog.slug}`,
                  }}
                />
              </Col>
            )
          )}
        </Row>
      </div>
    </PageLayout>
  );
}

export async function getStaticProps() {
  const blogs = await getAllBlogs();
  return {
    props: {
      blogs,
    },
  };
}
