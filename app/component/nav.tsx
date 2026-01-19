import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-black/50 backdrop-blur-md text-white py-6 sticky top-0 z-50">
      <nav className="container mx-auto px-2">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold hover:text-gray-300 transition-colors">
            Gustavo
          </Link>
          
          <ul className="flex space-x-16 items-center">
            <li>
              <Link href="/" className="text-white font-bold hover:text-gray-300 transition-colors">
                HOME
              </Link>
            </li>
            <li>
              <Link href="/portofolio" className="text-white font-bold hover:text-gray-300 transition-colors">
                PORTOFOLIO
              </Link>
            </li>
            <li>
              <Link href="/blog" className="text-white font-bold hover:text-gray-300 transition-colors">
                 BLOG
              </Link>
            </li>
          </ul>
          
          <div className="w-20"></div>
        </div>
      </nav>
    </header>
  );
};

export default Header;