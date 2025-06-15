import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-green-700 text-white p-4 sticky top-0 z-50 shadow-md">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        <Link href="/" className="text-2xl font-bold">
          Mims Convention Centre
        </Link>
        
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="hover:text-green-200 transition-colors">
            Home
          </Link>
          <Link href="#about" className="hover:text-green-200 transition-colors">
            About
          </Link>
          <Link href="#facilities" className="hover:text-green-200 transition-colors">
            Facilities
          </Link>
          <Link href="/gallery" className="hover:text-green-200 transition-colors">
            Gallery
          </Link>
          <Link href="#contact" className="hover:text-green-200 transition-colors">
            Contact
          </Link>
        </div>
        
        <div className="md:hidden">
          <button className="flex items-center p-2">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;