import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-scroll';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

const Footer = () => {
  return (
    <footer className="footer navbar-static-bottom">
      <Container>
        <span className="back-to-top">
          <Link to="hero" smooth duration={1000}>
            <KeyboardArrowUpIcon style={{ fontSize: '80' }} />
          </Link>
        </span>
      </Container>
    </footer>
  );
};

export default Footer;
