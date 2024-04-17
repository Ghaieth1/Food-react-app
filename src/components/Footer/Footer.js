import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import classes from './Footer.module.css';
import Logo from '../../assets/Logo/Logo.png';
import { Link } from 'react-scroll';

import twitter from '../../assets/Icon/twitter.ico';
import linkedin from '../../assets/Icon/linkedin.ico';
import github from '../../assets/Icon/github.ico';

const Footer = () => {
  //Structure & layout of the footer
  return (
    <div className={classes.footer_bg}>
      <Container>
        <Row className={classes.row}>
          <Col lg={6}>
            <div className={classes.info}>
              <div className={classes.image_div}>
                <Link
                  to='hero'
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={500}
                >
                  <img
                    className={classes.navbar_brand}
                    src={Logo}
                    alt='logo'
                  ></img>
                </Link>
              </div>
              <div className={classes.content_div}>
                <p>
                  Solution for easy and flexible getting meals for the
                  household. You can trust us anywhere through this platform
                </p>
                <p>
                  &copy;2024 Made by&nbsp;
                  <a
                    href='https://github.com/Ghaieth1'
                    target='_blank'
                    rel='noreferrer'
                    className={classes.ghaieth_grami}
                  >
                    Ghaieth Grami
                  </a>
                </p>
              </div>
            </div>
          </Col>

          <Col lg={3}>
            <div className={classes.about}>
              <h3>Menu </h3>
              <Link to='hero'>
                <p>Home</p>
              </Link>
              <Link to='dishes'>
                <p>Offers</p>
              </Link>

              <p>Contact</p>
              <p>About Us</p>
            </div>
          </Col>

          <Col lg={3}>
            <div className={classes.social}>
              <h3>Social</h3>

              <a href target='_blank' rel='noreferrer'>
                <p>
                  <img
                    src={twitter}
                    alt='twitter'
                    className={classes.social_icon}
                  ></img>
                </p>
              </a>
              <a
                href='https://www.linkedin.com/in/ghaieth-grami-727773174/'
                target='_blank'
                rel='noreferrer'
              >
                <p>
                  <img
                    src={linkedin}
                    alt='linkedin'
                    className={classes.social_icon}
                  ></img>
                </p>
              </a>
              <a
                href='https://github.com/Ghaieth1'
                target='_blank'
                rel='noreferrer'
              >
                <p>
                  <img
                    src={github}
                    alt='github'
                    className={classes.social_icon}
                  ></img>
                </p>
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
  //END
};

export default Footer;
