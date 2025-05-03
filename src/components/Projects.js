import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/travesuras amor.png";
import projImg2 from "../assets/img/onlystar.png";
import projImg3 from "../assets/img/portfolio_sebas.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { Link } from "react-router-dom";

export const Projects = () => {

  const projects = [
    {
      title: "Plataforma Educativa",
      description: "Diseño y Desarrollo",
      imgUrl: projImg1,
      Link: "https://travesurasconamor.com/login",
    },
    {
      title: "E-commerce",
      description: "Diseño y Desarrollo",
      imgUrl: projImg2,
      Link: "https://onlystardenim.com/",
    },
    {
      title: "Pagina Web",
      description: "Diseñor y Desarrollo",
      imgUrl: projImg3,
      Link: "https://portafolio-sebas-seven.vercel.app/",
    },
    
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Proyectos</h2>
                <p>
                Creamos soluciones digitales únicas que impulsan tu negocio. 
                Desde páginas web impactantes hasta plataformas a la medida, 
                diseñamos cada proyecto pensando en tus objetivos. 
                Nuestro trabajo combina diseño atractivo, funcionalidad y una experiencia <strong>AMAZING!</strong>
                </p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
    <Tab.Pane eventKey="first">
    <Row>
      {projects.map((project, index) => {
        return (
          <Col key={index} sm={6} md={4}>
            <ProjectCard {...project} />
          </Col>
        );
      })}
    </Row>

    </Tab.Pane>
  </Tab.Content>
</Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
