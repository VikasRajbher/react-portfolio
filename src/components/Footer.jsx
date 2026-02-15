import logo from "../assets/images/logo.png";

const Footer = () => {
  return (
    <div>
      <div className="text-center">
<<<<<<< HEAD
        <img src={logo} alt="" className="w-36 mx-auto rounded-2xl" />
=======
        <img src={logo} alt="" className="w-36 mx-auto" />
>>>>>>> 422b2442096a076fe7470582c3ada4135fe7da95
        <i className="ri-mail-line w-max mx-auto"> vikasrajbher@gmail.com</i>
      </div>
      <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6">
        <p>© 2026 Vikas Rajbher. All rights reserved.</p>
        <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
          <li>Instagram</li>
          <li>Github</li>
          <li>LinkedIn</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
