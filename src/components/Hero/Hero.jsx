import React, { useContext, useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-scroll';
import GitHubIcon from '@material-ui/icons/GitHub';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import PortfolioContext from '../../context/context';

const Header = () => {
  const { hero } = useContext(PortfolioContext);
  const { title, name, subtitle, cta } = hero;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="hero" className="hero">
      <Container>
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
          <h1 className="hero-title">
            {title}
            <span className="text-color-main">{name}</span>
            <br />
            {subtitle}
          </h1>
        </Fade>
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
          <p className="hero-cta">
            <span className="cta-btn cta-btn--hero">
              <div>
                <a href="https://github.com/oslabs-beta/KubraKai">
                  <GitHubIcon style={{ fontSize: '20', color: 'Black' }} /> {cta}
                </a>
              </div>
            </span>
          </p>
        </Fade>
        <Link to="about" smooth duration={1000}>
          <KeyboardArrowDownIcon style={{ fontSize: '80', position: 'absolute', bottom: '50' }} />
        </Link>
      </Container>
    </section>
  );
};

export default Header;
