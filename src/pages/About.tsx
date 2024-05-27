import React from "react";
import LinkButton from "../components/LinkButton";
import "../css/About.css";

const teamMembers = [
    {
        name: "Matheus Zuvanov",
        imgSrc: "src/assets/matheus.jpg",
        description: "Descrição Mateus",
        githubUrl: "https://github.com/",
        linkedinUrl: "https://www.linkedin.com/in/",
    },
    {
        name: "Miguel Araujo",
        imgSrc: "src/assets/miguel.jpg",
        description:
            "Aluno na Faeterj Petrópolis e residente no Serratec/Senac, estagiário na Orange Business Services, tenho 20 anos e busco desenvolver e aprimorar minhas habilidades no âmbito da tecnologia, contribuindo e dando o suporte necessário em quaisquer áreas ou projetos que estiver, além disso um homem muito esbelto.",
        githubUrl: "https://github.com/Mig2445465",
        linkedinUrl: "https://www.linkedin.com/in/miguel-araujo-7a37b8247/",
    },
    {
        name: "Miguel Milagres",
        imgSrc: "src/assets/miguelm.jpg",
        description: "Descrição Miguel",
        githubUrl: "https://github.com/miguelmilagres",
        linkedinUrl: "https://www.linkedin.com/in/",
    },
    {
        name: "Pedro Henrique",
        imgSrc: "src/assets/pedro.jpg",
        description:
            "Aluno de Engenharia de Computação no CEFET Petrópolis e residente no Serratec/Senac. Atualmente procurando desenvolver minhas habilidades em desenvolvimento de softwares.",
        githubUrl: "https://github.com/PedroHenriqueBRibeiro",
        linkedinUrl: "https://www.linkedin.com/in/pedro-henrique-39aab8282/",
    },
    {
        name: "Flávio Lourenço",
        imgSrc: "src/assets/flavio.jpg",
        description:
            "Flávio Lourenço, apaixonado por tecnologia desde a infância, atualmente migrando para uma carreira em desenvolvimento de software Full Stack. No Senac, estou aprimorando minhas habilidades técnicas e comportamentais, construindo seu futuro com determinação e entusiasmo.",
        githubUrl: "https://github.com/LourencoFilho-Dev/",
        linkedinUrl: "https://www.linkedin.com/in/lourencofilho-dev/",
    },
];

const AboutScreen: React.FC = () => {
    return (
        <div className="conteiner">
            <h1 className="title">EQUIPE DE DESENVOLVEDORES</h1>
            {teamMembers.map((member, index) => (
                <div key={index} className="member-container">
                    <img
                        className="profile-image"
                        src={member.imgSrc}
                        alt={member.name}
                    />
                    <h2 className="name">{member.name}</h2>
                    <p className="description">{member.description}</p>
                    <div className="links-container">
                        <LinkButton
                            url={member.githubUrl}
                            iconClass="fab fa-github"
                        />
                        <LinkButton
                            url={member.linkedinUrl}
                            iconClass="fab fa-linkedin"
                        />
                    </div>
                    {index < teamMembers.length - 1 && (
                        <hr className="divisor" />
                    )}
                </div>
            ))}
            <div className="about-site">
                <h2 className="title1">Sobre o Site</h2>
                <p className="description">
                    Aplicativo criado com React-Vite para demonstrar habilidades
                    de desenvolvimento React Web através de um projeto de
                    Ecommerce.
                </p>
            </div>
        </div>
    );
};

export default AboutScreen;
