const Footer = () => {
    return (
      <footer className="bg-black text-white py-10 px-5 sm:px-20">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center sm:items-start text-center sm:text-left">
          {/* Left Section */}
          <div className="mb-6 sm:mb-0">
            <h1 className="text-2xl font-semibold">MirroSoft Design</h1>
            <p className="text-gray-400 mt-2 text-sm sm:w-[70%]">
              Elevating your digital experience with creative and strategic solutions.
            </p>
          </div>
  
          {/* Middle Section - Links */}
          <div className="flex flex-wrap justify-center sm:justify-start gap-6 text-gray-400 text-sm">
            <a href="#" className="hover:text-white transition">Home</a>
            <a href="#" className="hover:text-white transition">Services</a>
            <a href="#" className="hover:text-white transition">Portfolio</a>
            <a href="#" className="hover:text-white transition">Contact</a>
          </div>
  
          {/* Right Section - Social Media */}
          <div className="mt-6 sm:mt-0">
            <h2 className="text-lg font-semibold">Follow Us</h2>
            <div className="flex gap-4 mt-2">
              <a href="#" className="hover:text-gray-300 transition">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="hover:text-gray-300 transition">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="hover:text-gray-300 transition">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="hover:text-gray-300 transition">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>
  
        {/* Bottom Section */}
        <div className="mt-8 border-t border-gray-700 pt-4 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} MirroSoft Design. All Rights Reserved.
        </div>
      </footer>
    );
  };
  
  export default Footer;
  