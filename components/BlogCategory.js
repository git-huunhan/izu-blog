import { Row, Col } from "react-bootstrap";

import GetFullTime from "components/GetFullTime";
import GetTimeAgo from "components/GetTimeAgo";
import CardItem from "components/CardItem";
import CardListItem from "components/CardListItem";

const BlogCategory = ({ data = [], categories, filter }) => {
  return (
    <Row className="fix-padding">
      <Col md="10" className="fix-padding">
        {categories.map((c) => (
          <div key={c._id}>
            <div className="d-flex title-category">
              <div className="anchor" id={c.title.toLowerCase()} />
              <div>{c.title}</div>
              <a href={`#${c.title.toLowerCase()}`} className="ms-2">
                #
              </a>
            </div>

            <Row>
              {data.map((page) =>
                page
                  .filter((item) => item.categories.title === c.title)
                  .map((blog) =>
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
              )}
            </Row>
          </div>
        ))}
      </Col>
      <Col md="2" className="fix-padding">
        <div className="menu-category">
          {categories.map((c) => (
            <div key={c._id}>
              <a href={`#${c.title.toLowerCase()}`}>{c.title}</a>
            </div>
          ))}
        </div>
      </Col>
    </Row>
  );
};

export default BlogCategory;
