import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-transparent text-white py-6 sticky top-0 z-50">
      <nav className="container px-20">
        <div className="flex justify-between items-center relative">
          <Link href="/" className="text-2xl font-bold hover:text-gray-300 transition-colors">
            Gustavos Web
          </Link>

          <ul className="absolute left-1/2 -translate-x-1/2 flex space-x-8 items-center">
            <li>
              <Link href="/" className="text-white font-bold hover:text-gray-300 transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link href="/portofolio" className="text-white font-bold hover:text-gray-300 transition-colors">
                Portfolio
              </Link>
            </li>
            <li>
              <Link href="/blog" className="text-white font-bold hover:text-gray-300 transition-colors">
                Hire Me
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;