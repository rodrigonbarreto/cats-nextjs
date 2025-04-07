import Link from 'next/link';

const Navbar = () => {
    return (
        <nav className="bg-blue-600 text-white shadow-md">
            <div className="container mx-auto px-4 py-3">
                <div className="flex justify-between items-center">
                    <Link href="/" className="text-xl font-bold">
                        Adote seu Pet
                    </Link>
                    <div className="space-x-4">
                        <Link href="/home" className="hover:text-blue-200">
                            Home
                        </Link>
                        <Link href="/cats" className="hover:text-blue-200">
                            Gatos
                        </Link>
                        <Link href="/dogs" className="hover:text-blue-200">
                            Cachorros
                        </Link>
                        <Link href="/favorites" className="hover:text-blue-200">
                            Gatos Adotados
                        </Link>
                        <Link href="/dog-favorites" className="hover:text-blue-200">
                            Cachorros Adotados
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;