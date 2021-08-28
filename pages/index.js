import { useState } from "react";
import { Row, Col, Button } from "react-bootstrap";

import { useGetBlogsPages } from "actions/pagination";
import { getPaginatedBlogs } from "lib/api";

import PageLayout from "components/PageLayout";
import CardListItem from "components/CardListItem";
import CardItem from "components/CardItem";
import GetTimeAgo from "components/GetTimeAgo";
import GetFullTime from "components/GetFullTime";
import FilteringMenu from "components/FilteringMenu";

export const BlogList = ({ data = [], filter }) => {
  return data.map((page) =>
    page.map((blog) =>
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
        <Col key={blog.slug} lg="4" md="6">
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
    )
  );
};

export default function Home({ blogs }) {
  const [filter, setFilter] = useState({
    view: { list: 0 },
    date: { asc: 0 },
  });

  const { data, size, setSize, hitEnd } = useGetBlogsPages({ filter });

  return (
    <PageLayout>
      <div className="blog-detail-page">
        <div className="d-flex justify-content-end">
          <FilteringMenu
            filter={filter}
            onChange={(option, value) =>
              setFilter({ ...filter, [option]: value })
            }
          />
        </div>

        <Row className="mb-5">
          <BlogList data={data || [blogs]} filter={filter} />
        </Row>

        <div style={{ textAlign: "center" }}>
          <Button
            onClick={() => setSize(size + 1)}
            disabled={hitEnd}
            size="lg"
            variant="outline-secondary"
          >
            {/* {isLoadingMore ? '...' : isReachingEnd ? 'No more blogs' : 'More Blogs'} */}
            Load More
          </Button>
        </div>
      </div>
    </PageLayout>
  );
}

export async function getStaticProps() {
  const blogs = await getPaginatedBlogs({ offset: 0, date: "desc" });
  return {
    props: {
      blogs,
    },
  };
}
