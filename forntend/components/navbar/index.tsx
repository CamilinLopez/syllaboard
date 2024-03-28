export default function Navbar() {
  return (
    <section id="navbar" className="bg-abano">
      <div className="container">
        <div className="flex justify-between items-center">
          <h1 className="font-outfit font-[700] text-[40px] text-azul">
            syllaboard
          </h1>
          <div className="flex gap-x-8">
            <button className="font-ibm font-[500] text-[16px] text-oscuro">
              Iniciar Sesión
            </button>
            <button className="font-ibm font-[500] text-[16px] text-white bg-azul w-[145px] h-[43px] rounded-full">
              Registrarse
            </button>
          </div>
        </div>
      </div>
      <div className="division"></div>
    </section>
  );
}
