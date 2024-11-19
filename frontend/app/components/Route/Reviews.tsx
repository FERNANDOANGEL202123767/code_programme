import { styles } from "@/app/styles/style";
import Image from "next/image";
import React from "react";
import ReviewCard from "../Review/ReviewCard";

type Props = {};

export const reviews = [
  {
    name: "Mora Ivan",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    profession: "Estudiante | TESJI",
    comment:
      "Tuve el placer de explorar CODE PROGRAMME, un sitio web que ofrece una amplia gama de cursos sobre diversos temas relacionados con la tecnología. Me impresionó muchísimo mi experiencia, ya que el sitio web ofrece una selección completa de cursos que se adaptan a diferentes niveles de habilidades e intereses. Si buscas mejorar tus conocimientos y habilidades en la industria tecnológica, te recomiendo que consultes CODE PROGRAMME!",
  },
  {
    name: "Anita",
    avatar: "https://randomuser.me/api/portraits/women/4.jpg",
    profession: "Desarrollador web full stack | Mexico",
    comment:
      "¡Únete a CODE PROGRAMME! CODE PROGRAMME se centra en aplicaciones prácticas en lugar de simplemente enseñar la teoría detrás de los lenguajes o marcos de programación. Tomé una lección sobre cómo crear un mercado web usando React JS y me resultó muy útil para aprender las diferentes etapas involucradas en la creación de un proyecto de principio a fin. En general, recomiendo encarecidamente CODE PROGRAMME a cualquiera que busque mejorar sus habilidades de programación y crear proyectos prácticos. CODE PROGRAMME es un gran recurso que te ayudará a llevar tus habilidades al siguiente nivel..",
  },
];

const Reviews = (props: Props) => {
  return (
    <div className="w-[90%] 800px:w-[85%] m-auto">
      <h3 className={`${styles.title} 800px:!text-[40px]`}>
        Nuestros Estudiantes Son<span className="text-gradient">Nuestra Fortaleza</span>{" "}
        <br /> Mira Lo Que Dicen Nosotros
      </h3>
      <br />
      <br />
      <div className="grid grid-cols-1 gap-[25px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-2 lg:gap-[25px] xl:grid-cols-2 xl:gap-[35px] mb-12 border-0 md:[&>*:nth-child(3)]:!mt-[-60px] md:[&>*:nth-child(6)]:!mt-[-20px]">
        {reviews &&
          reviews.map((i, index) => <ReviewCard item={i} key={index} />)}
      </div>
    </div>
  );
};

export default Reviews;
