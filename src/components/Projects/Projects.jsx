import React, { useContext, useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';
import Tilt from 'react-tilt';
import { Container /* , Row, Col */ } from 'react-bootstrap';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';
import ProjectImg from '../Image/ProjectImg';

const Projects = () => {
  const { projects } = useContext(PortfolioContext);

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  // setProjects(['personA', 'personB', 'personC', 'personD', 'personE'])

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
    <section id="projects">
      <Container>
        <div className="project-wrapper">
          <Title title="Team members" />
          <Container style={{ display: 'flex' }}>
            {projects.map((project) => {
              const { title, url, /* repo, */ img /* , id */ } = project;

              return (
                // <Row key={id}>
                //   <Col lg={4} sm={12}>
                <Fade
                  left={isDesktop}
                  bottom={isMobile}
                  duration={1000}
                  delay={500}
                  distance="30px"
                >
                  <div className="project-wrapper__text" style={{ margin: '3%', width: '23%' }}>
                    <h3 className="project-wrapper__text-title">{title || 'Project Title'}</h3>
                    <div>
                      <Fade
                        right={isDesktop}
                        bottom={isMobile}
                        duration={1000}
                        delay={1000}
                        distance="30px"
                      >
                        <div className="project-wrapper__image">
                          <a
                            href={url || '#!'}
                            target="_blank"
                            aria-label="Project Link"
                            rel="noopener noreferrer"
                          >
                            <Tilt
                              options={{
                                reverse: false,
                                max: 8,
                                perspective: 1000,
                                scale: 1,
                                speed: 300,
                                transition: true,
                                axis: null,
                                reset: true,
                                easing: 'cubic-bezier(.03,.98,.52,.99)',
                              }}
                            >
                              <div data-tilt className="thumbnail rounded">
                                <ProjectImg alt={title} filename={img} />
                              </div>
                            </Tilt>
                          </a>
                        </div>
                      </Fade>
                    </div>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cta-btn cta-btn--hero"
                      href={url || '#!'}
                    >
                      <LinkedInIcon style={{ fontSize: 'Large', color: 'Black' }} />
                      {'  '}
                      LinkedIn
                    </a>
                  </div>
                </Fade>
                //   </Col>
                //   <Col lg={8} sm={12} />
                // </Row>
              );
            })}
          </Container>
        </div>
      </Container>
    </section>
  );
};

export default Projects;
