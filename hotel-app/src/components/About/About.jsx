import React from "react";
import theDesign from "../About/About.module.css";
import CountTo from "react-count-to";
import theFirstImage from "../../images/img-7.jpg";
import theSecondImage from "../../images/img-6-1-150x150.jpg";
import img1 from "../../images/img-3-1.jpg";
import img2 from "../../images/andrew-neel-B4rEJ09-Puo-unsplash.jpg";
function About() {
  return (
    <>
      <section className={theDesign.about}>
        <h1>About us</h1>
      </section>
      <div className="container">
        <section className={theDesign.description}>
          <div className={theDesign.title}>
            <p>
              Hello ! Our hotel has been present for over 20 years. We make the
              best for all ! Check our rooms !
            </p>
          </div>
          <div className={theDesign.decsImage}>
            <div className={theDesign.firstImage}>
              <img src={theFirstImage} alt="firstImage" />
            </div>
            <div className={theDesign.secondImage}>
              <img src={theSecondImage} alt="firstImage" />
            </div>
          </div>
        </section>
      </div>

      <div className="container">
        <section className={theDesign.detials}>
          <div className={theDesign.firstDetails}>
            <div className={theDesign.firstDetailsDiv}>
              <div className={theDesign.firstDetailsDivImage}>
                <img src={img1} />
              </div>
              <div className={theDesign.firstDetailsDivDesc}>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aenean egestas magna at porttitor vehicula nullam.
                </p>
                <span>Read More</span>
              </div>
            </div>

            {/* second element */}

            <div className={theDesign.firstDetailsDiv}>
              <div className={theDesign.firstDetailsDivImage}>
                <img src={img2} />
              </div>
              <div className={theDesign.firstDetailsDivDesc}>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aenean egestas magna at porttitor vehicula nullam.
                </p>
                <span>Read More</span>
              </div>
            </div>
          </div>

          {/* second row */}

          <div className={theDesign.firstDetails}>
            <div className={theDesign.firstDetailsDiv}>
              <div className={theDesign.firstDetailsDivImage}>
                <img src={img1} />
              </div>
              <div className={theDesign.firstDetailsDivDesc}>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aenean egestas magna at porttitor vehicula nullam.
                </p>
                <span>Read More</span>
              </div>
            </div>

            {/* second element */}

            <div className={theDesign.firstDetailsDiv}>
              <div className={theDesign.firstDetailsDivImage}>
                <img src={img2} />
              </div>
              <div className={theDesign.firstDetailsDivDesc}>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aenean egestas magna at porttitor vehicula nullam.
                </p>
                <span>Read More</span>
              </div>
            </div>
          </div>

          <button className={theDesign.btn}>check all services</button>
        </section>
      </div>

      <section className={theDesign.count}>
        <div className={theDesign.counterContainer}>
          <div className={theDesign.countDivOne}>
            <h3>
              <CountTo from={0} to={123} speed={1234}></CountTo>
            </h3>
            <p>Rooms</p>
          </div>

          {/* second */}

          <div className={theDesign.countDivOne}>
            <h3>
              <CountTo from={0} to={45} speed={1234}></CountTo>
            </h3>
            <p>staff</p>
          </div>

          {/* third */}

          <div className={theDesign.countDivOne}>
            <h3>
              <CountTo from={0} to={21} speed={1234}></CountTo>
            </h3>
            <p>BRANCHES</p>
          </div>
          {/* fourth */}
          <div className={theDesign.countDivOne}>
            <h3>
              <CountTo from={0} to={94} speed={1234}></CountTo>
            </h3>
            <p>LOCATIONS</p>
          </div>
        </div>
      </section>
      <div className="container">
        <section className={theDesign.info}>
          <div className={theDesign.firstInfo}>
            <div className={theDesign.firstInfoDecs}>
              <i className="fas fa-umbrella-beach fa-3x"></i>
              <h2 className={theDesign.firstInfoDecsTitle}>beach</h2>
              <p className={theDesign.firstInfoDecsriptiom}>
                Phasellus enim libero, blandit vel sapien vitae, condime ntumal
                tre ultricies magna et quisque.
              </p>
              <span className={theDesign.firstInfoDecsBtn}> read more</span>
            </div>

            {/* two */}

            <div className={theDesign.firstInfoDecs}>
              <i className="fas fa-umbrella-beach fa-3x"></i>
              <h2 className={theDesign.firstInfoDecsTitle}>beach</h2>
              <p className={theDesign.firstInfoDecsriptiom}>
                Phasellus enim libero, blandit vel sapien vitae, condime ntumal
                tre ultricies magna et quisque.
              </p>
              <span className={theDesign.firstInfoDecsBtn}> read more</span>
            </div>

            {/* three */}

            <div className={theDesign.firstInfoDecs}>
              <i className="fas fa-umbrella-beach fa-3x"></i>
              <h2 className={theDesign.firstInfoDecsTitle}>beach</h2>
              <p className={theDesign.firstInfoDecsriptiom}>
                Phasellus enim libero, blandit vel sapien vitae, condime ntumal
                tre ultricies magna et quisque.
              </p>
              <span className={theDesign.firstInfoDecsBtn}> read more</span>
            </div>
          </div>

          {/* second row */}

          <div className={theDesign.firstInfo}>
            <div className={theDesign.firstInfoDecs}>
              <i className="fas fa-umbrella-beach fa-3x"></i>
              <h2 className={theDesign.firstInfoDecsTitle}>beach</h2>
              <p className={theDesign.firstInfoDecsriptiom}>
                Phasellus enim libero, blandit vel sapien vitae, condime ntumal
                tre ultricies magna et quisque.
              </p>
              <span className={theDesign.firstInfoDecsBtn}> read more</span>
            </div>

            {/* two */}

            <div className={theDesign.firstInfoDecs}>
              <i className="fas fa-umbrella-beach fa-3x"></i>
              <h2 className={theDesign.firstInfoDecsTitle}>beach</h2>
              <p className={theDesign.firstInfoDecsriptiom}>
                Phasellus enim libero, blandit vel sapien vitae, condime ntumal
                tre ultricies magna et quisque.
              </p>
              <span className={theDesign.firstInfoDecsBtn}> read more</span>
            </div>

            {/* three */}

            <div className={theDesign.firstInfoDecs}>
              <i className="fas fa-umbrella-beach fa-3x"></i>
              <h2 className={theDesign.firstInfoDecsTitle}>beach</h2>
              <p className={theDesign.firstInfoDecsriptiom}>
                Phasellus enim libero, blandit vel sapien vitae, condime ntumal
                tre ultricies magna et quisque.
              </p>
              <span className={theDesign.firstInfoDecsBtn}> read more</span>
            </div>
          </div>
        </section>
      </div>

      {/* footer */}
      <div className="container-footer">
        <section className={theDesign.footer}>
          <div className={theDesign.footerItem}>
            <h2 className={theDesign.footerTitle}>Phone Support</h2>
            <p className={theDesign.footerDesc}>24 HOURS A DAY</p>
            <span className={theDesign.footerSpan}>+ 01 345 647 745</span>
          </div>

          <div className={theDesign.footerItem}>
            <h2 className={theDesign.footerTitle}>Connect With Us</h2>
            <p className={theDesign.footerDesc}>SOCIAL MEDIA CHANNELS</p>
            <i className="fab fa-facebook fa-lg"></i>
            <i className="fab fa-twitter-square fa-lg"></i>
            <i className="fab fa-instagram-square fa-lg"></i>
            <i className="fab fa-linkedin fa-lg"></i>
            <i className="fab fa-youtube-square fa-lg"></i>
          </div>

          <div className={theDesign.footerItem}>
            <h2 className={theDesign.footerTitle}>Email Support</h2>
            <p className={theDesign.footerDesc}>GET IN TOUCH</p>
            <span className={theDesign.footerSpan}>in 16/18 out 10/11</span>
          </div>
        </section>
      </div>
    </>
  );
}

export default About;
