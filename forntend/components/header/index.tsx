import Image from "next/image";

export default function Header() {
  return (
    <section id="header" className="header">
      <div className="container">
        <div className="flex justify-between items-center">
          <div className="my-20">
            <div className=" flex flex-col gap-y-5">
              <h1 className="font-outfit font-[700] text-[48px] text-azul leading-[56px]">
                Encuentra a los <br /> docentes <br /> adecuados
              </h1>
              <p className="font-outfit font-[400] text-[20px]">
                Te brindamos la herramienta perfecta para conectar <br /> con
                expertos y líderes en la industria que te ayuden a <br />{" "}
                contribuir en el éxito de tu próximo programa de <br />{" "}
                formación.
              </p>
              <button className="font-ibm font-[500] text-[16px] text-white bg-azul w-[200px] h-[43px] rounded-[40px]">
                Entrar a Syllaboard
              </button>
            </div>
          </div>
          <div>
            <Image
              src={"/images/imgHeader.svg"}
              alt="imgHeader"
              width={733}
              height={405}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
