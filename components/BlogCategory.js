import { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";

import GetFullTime from "components/GetFullTime";
import GetTimeAgo from "components/GetTimeAgo";
import CardItem from "components/CardItem";
import CardListItem from "components/CardListItem";

const BlogCategory = ({ data = [], categories, filter }) => {
  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 768;

  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, []);

  return width < breakpoint ? (
    <Row className="fix-padding">
      <Col md="2" className="fix-padding">
        <div className="menu-category">
          <div className="title-category">Contents</div>
          {categories.map((c) => (
            <div key={c._id}>
              <a href={`#${c.title.toLowerCase()}`}>{c.title}</a>
            </div>
          ))}
        </div>
      </Col>
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
                      <Col key={blog.slug} md="12">
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
    </Row>
  ) : (
    <Row className="fix-padding">
      <Col md="8" lg="9" xl="10" className="fix-padding">
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
                      <Col key={blog.slug}   md="12" lg="6" xl="4">
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
      <Col md="4" lg="3" xl="2" className="fix-padding">
        <div className="menu-category">
          <div className="title-category">Contents</div>
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
