import Link from 'next/link';

const Navbar = () => {
    return (
        <nav className="bg-blue-600 text-white shadow-md">
            <div className="container mx-auto px-4 py-3">
                <div className="flex justify-between items-center">
                    <Link href="/" className="text-xl font-bold">
                       Ache o seu amigo Felino
                    </Link>
                    <div className="space-x-4">
                        <Link href="/" className="hover:text-blue-200">
                            Home
                        </Link>
                        <Link href="/favorites" className="hover:text-blue-200">
                            Adotados
                        </Link>
                        <Link href="/about" className="hover:text-blue-200">
                            Sobre
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;