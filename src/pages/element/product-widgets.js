import Link from "next/link";
import { connect } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import { getProducts } from "../../lib/product";
import { LayoutTwo } from "../../components/Layout";
import { BreadcrumbOne } from "../../components/Breadcrumb";
import { SectionTitleThree } from "../../components/SectionTitle";
import { ProductWidgetWrapper } from "../../components/ProductThumb";

const ProductWidgets = ({ newProducts, popularProducts, saleProducts }) => {
  return (
    <LayoutTwo>
      {/* breadcrumb */}
      <BreadcrumbOne
        pageTitle="Products"
        backgroundImage="/assets/images/backgrounds/breadcrumb-bg-2.jpg"
      >
        <ul className="breadcrumb__list">
          <li>
            <Link href="/" as={process.env.PUBLIC_URL + "/"}>
              <a>Home</a>
            </Link>
          </li>

          <li>Products</li>
        </ul>
      </BreadcrumbOne>
      <div className="element-wrapper space-mt--r130 space-mb--r130">
        <SectionTitleThree
          title="Products"
          subtitle="Available to control your site’s products."
        />
        <Container>
          <Row>
          <Col lg={2} md={6}> </Col>
            <Col lg={4} md={6} className="space-mb-mobile-only--50">
              <div className="single-product-widget-slider-container">
                <h3 className="widget-slider-title">New Products</h3>
                <div className="product-widget-container">
                  <ProductWidgetWrapper products={newProducts} />
                </div>
              </div>
            </Col>
            <Col lg={4} md={6} className="space-mb-mobile-only--50">
              <div className="single-product-widget-slider-container">
                <h3 className="widget-slider-title">Popular Products</h3>
                <div className="product-widget-container">
                  <ProductWidgetWrapper products={popularProducts} />
                </div>
              </div>
            </Col>
            {/* <Col lg={4} md={6}>
              <div className="single-product-widget-slider-container">
                <h3 className="widget-slider-title">Sale Products</h3>
                <div className="product-widget-container">
                  <ProductWidgetWrapper products={saleProducts} />
                </div>
              </div>
            </Col> */}
          </Row>
        </Container>
      </div>
    </LayoutTwo>
  );
};

const mapStateToProps = (state) => {
  const products = state.productData;
  return {
    newProducts: getProducts(products, "decor", "new", 1),
    popularProducts: getProducts(products, "decor", "new", 1),
    // saleProducts: getProducts(products, "decor", "new", 4)
  };
};

export default connect(mapStateToProps)(ProductWidgets);
