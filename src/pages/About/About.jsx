import React from "react";
import Header from "../../components/Header/Header";
import Banner from "../../components/Banner/banner";
import Collapse from "../../components/Collapse/Collapse";
import Footer from "../../components/Footer/Footer";

const aboutDatas = [
  {
    id: "0",
    title: "Fiabilité",
    texte:
      "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.",
  },
  {
    id: "1",
    title: "Respect",
    texte:
      "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme..",
  },
  {
    id: "2",
    title: "Service",
    texte:
      "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question..",
  },
  {
    id: "3",
    title: "Sécurité",
    texte:
      "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
  },
];

const About = () => {
  return (
    <div>
      <Header />
      <Banner />
      {aboutDatas.map((data) => {
        return (
          <div key={data.id} className="about_collapse">
            <Collapse title={data.title} content={data.texte} />
          </div>
        );
      })}
      <Footer />
    </div>
  );
};

export default About;
