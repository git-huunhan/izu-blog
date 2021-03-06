import { useState } from "react";
import { Row, Col, Button } from "react-bootstrap";

import { useGetBlogsPages } from "actions/pagination";
import { getPaginatedBlogs, categoriesQuery } from "lib/api";

import PageLayout from "components/PageLayout";
import CardListItem from "components/CardListItem";
import CardItem from "components/CardItem";
import GetTimeAgo from "components/GetTimeAgo";
import GetFullTime from "components/GetFullTime";
import FilteringMenu from "components/FilteringMenu";
import PreviewAlert from "components/PreviewAlert";
import BlogCategory from "components/BlogCategory";

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
            categories={blog.categories.title}
          />
        </Col>
      ) : (
        <Col key={blog.slug} xl="3" lg="4" md="6">
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
            categories={blog.categories.title}
          />
        </Col>
      )
    )
  );
};

export default function Home({ blogs, categories, preview }) {
  const [filter, setFilter] = useState({
    view: { list: 0 },
    date: { asc: 0 },
    category: { item: 0 },
  });

  const { data, size, setSize, hitEnd } = useGetBlogsPages({ filter });

  return (
    <PageLayout>
      {preview && <PreviewAlert />}
      <div className="blog-detail-page">
        <div className="d-flex justify-content-end">
          <FilteringMenu
            filter={filter}
            onChange={(option, value) =>
              setFilter({ ...filter, [option]: value })
            }
          />
        </div>

        {filter.category.item ? (
          <Row className="mb-5">
            <BlogCategory data={data || [blogs]} categories={categories} filter={filter}/>
          </Row>
        ) : (
          <>
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
          </>
        )}
      </div>
    </PageLayout>
  );
}

export async function getStaticProps({ preview = false }) {
  const blogs = await getPaginatedBlogs({ offset: 0, date: "desc" });
  const categories = await categoriesQuery();
  return {
    props: {
      blogs,
      categories,
      preview,
    },
    revalidate: 1,
  };
}
