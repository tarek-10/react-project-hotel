import React from "react";
import CountTo from "react-count-to";

import theStyle from "../Gallery/Gallery.module.css";
import theImage1 from "../../images/img-3-1.jpg";
import theImage2 from "../../images/img-6-1-150x150.jpg";
import theImage3 from "../../images/img-7.jpg";
import theImage4 from "../../images/img-6-1-150x150.jpg";
import theImage5 from "../../images/img-7.jpg";
import theImage6 from "../../images/img-6-1-150x150.jpg";
import theImage7 from "../../images/img-3-1.jpg";
import theImage8 from "../../images/img-7.jpg";
function Gallery() {
  return (
    <>
      <section className={theStyle.gallery}>
        <div className={theStyle.content}>
          <div className={theStyle.overlay}>
            <h2 className={theStyle.content_title}>Gallery</h2>

            {/* images */}
            <div className="container">
              <div className={theStyle.imageSection}>
                <div className={theStyle.firstImages}>
                  <div className={theStyle.firstImages_content}>
                    <img src={theImage1} alt="" />
                  </div>
                  {/* second Image */}
                  <div className={theStyle.firstImages_content}>
                    <img src={theImage2} alt="" />
                  </div>
                  {/* third Image */}

                  <div className={theStyle.firstImages_content}>
                    <img src={theImage3} alt="" />
                  </div>

                  {/* fourth image */}

                  <div className={theStyle.firstImages_content}>
                    <img src={theImage4} alt="" />
                  </div>
                </div>

                {/* second row */}

                <div className={theStyle.firstImages}>
                  <div className={theStyle.firstImages_content}>
                    <img src={theImage5} alt="" />
                  </div>
                  {/* second Image */}
                  <div className={theStyle.firstImages_content}>
                    <img src={theImage6} alt="" />
                  </div>
                  {/* third Image */}

                  <div className={theStyle.firstImages_content}>
                    <img src={theImage7} alt="" />
                  </div>

                  {/* fourth image */}

                  <div className={theStyle.firstImages_content}>
                    <img src={theImage8} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* gallery count */}
      <section className={theStyle.gall_count}>
        <div className={theStyle.overlay}>
          <div className={theStyle.counterContainer}>
            <div className={theStyle.countDivOne}>
              <h3>
                <CountTo from={0} to={123} speed={1234}></CountTo>
              </h3>
              <p>Rooms</p>
            </div>

            {/* second */}

            <div className={theStyle.countDivOne}>
              <h3>
                <CountTo from={0} to={45} speed={1234}></CountTo>
              </h3>
              <p>staff</p>
            </div>

            {/* third */}

            <div className={theStyle.countDivOne}>
              <h3>
                <CountTo from={0} to={21} speed={1234}></CountTo>
              </h3>
              <p>BRANCHES</p>
            </div>
            {/* fourth */}
            <div className={theStyle.countDivOne}>
              <h3>
                <CountTo from={0} to={94} speed={1234}></CountTo>
              </h3>
              <p>LOCATIONS</p>
            </div>
          </div>
        </div>
      </section>

      {/* promotions section */}
      <section className={theStyle.promotions}>
        <div className={theStyle.promotions_header}>
          <p>CHECK ALL </p>
          <h2>Promotions</h2>
        </div>

        <div className="container">
          <div className={theStyle.promotions_counter}>
            <div className={theStyle.promotions_counter_row}>
              <div className={theStyle.row_item}>
                <div className={theStyle.row_item_content}>
                  <div className={theStyle.items_content_desc}>
                    <img src={theImage6} />
                    <h2>Single Rooms</h2>
                    <span>Lorem ipsum dolor sit amet, consectetur</span>
                  </div>
                  <div className={theStyle.items_content_price}>
                    <p>$ 90</p>
                    <button className="btn btn-info w-100">CHECK</button>
                  </div>
                  {/* second element */}
                  <div className={theStyle.items_content_desc}>
                    <img src={theImage4} />
                    <h2>Single Rooms</h2>
                    <span>Lorem ipsum dolor sit amet, consectetur</span>
                  </div>
                  <div className={theStyle.items_content_price}>
                    <p>$ 90</p>
                    <button className="btn btn-info w-100">CHECK</button>
                  </div>
                </div>
              </div>
            </div>

            {/* second row */}

            <div className={theStyle.promotions_counter_row}>
              <div className={theStyle.row_item}>
                <div className={theStyle.row_item_content}>
                  <div className={theStyle.items_content_desc}>
                    <img src={theImage1} />
                    <h2>Single Rooms</h2>
                    <span>Lorem ipsum dolor sit amet, consectetur</span>
                  </div>
                  <div className={theStyle.items_content_price}>
                    <p>$ 90</p>
                    <button className="btn btn-info w-100">CHECK</button>
                  </div>
                  {/* second element */}
                  <div className={theStyle.items_content_desc}>
                    <img src={theImage1} />
                    <h2>Single Rooms</h2>
                    <span>Lorem ipsum dolor sit amet, consectetur</span>
                  </div>
                  <div className={theStyle.items_content_price}>
                    <p>$ 90</p>
                    <button className="btn btn-info w-100">CHECK</button>
                  </div>
                </div>
              </div>
            </div>

            {/* third row */}

            <div className={theStyle.promotions_counter_row}>
              <div className={theStyle.row_item}>
                <div className={theStyle.row_item_content}>
                  <div className={theStyle.items_content_desc}>
                    <img src={theImage5} />
                    <h2>Single Rooms</h2>
                    <span>Lorem ipsum dolor sit amet, consectetur</span>
                  </div>
                  <div className={theStyle.items_content_price}>
                    <p>$ 90</p>
                    <button className="btn btn-info w-100">CHECK</button>
                  </div>
                  {/* second element */}
                  <div className={theStyle.items_content_desc}>
                    <img src={theImage2} />
                    <h2>Single Rooms</h2>
                    <span>Lorem ipsum dolor sit amet, consectetur</span>
                  </div>
                  <div className={theStyle.items_content_price}>
                    <p>$ 90</p>
                    <button className="btn btn-info w-100">CHECK</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* footer */}
      <div className="container-footer">
        <section className={theStyle.footer}>
          <div className={theStyle.footerItem}>
            <h2 className={theStyle.footerTitle}>Phone Support</h2>
            <p className={theStyle.footerDesc}>24 HOURS A DAY</p>
            <span className={theStyle.footerSpan}>+ 01 345 647 745</span>
          </div>

          <div className={theStyle.footerItem}>
            <h2 className={theStyle.footerTitle}>Connect With Us</h2>
            <p className={theStyle.footerDesc}>SOCIAL MEDIA CHANNELS</p>
            <i className="fab fa-facebook fa-lg"></i>
            <i className="fab fa-twitter-square fa-lg"></i>
            <i className="fab fa-instagram-square fa-lg"></i>
            <i className="fab fa-linkedin fa-lg"></i>
            <i className="fab fa-youtube-square fa-lg"></i>
          </div>

          <div className={theStyle.footerItem}>
            <h2 className={theStyle.footerTitle}>Email Support</h2>
            <p className={theStyle.footerDesc}>GET IN TOUCH</p>
            <span className={theStyle.footerSpan}>in 16/18 out 10/11</span>
          </div>
        </section>
      </div>
    </>
  );
}

export default Gallery;
