import logo from "@icons/logoBlanco.svg";
function Footer() {
  return (
    <>
      <div className="flex items-center justify-between w-64 ml-auto py-4 mr-10">
        <p>© 2025</p>
        <img src={logo} alt="Icono blanco de AntiAlejandria" className="w-9" />
        <p>por Diblik Mendizábal</p>
      </div>
    </>
  );
}

export default Footer;
