'use client';

import Link from 'next/link';

export default function Home() {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Adote seu Pet</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                <Link href="/cats" className="block">
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full">
                        <div className="h-64 bg-gradient-to-r from-blue-400 to-blue-600 flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-32 w-32 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2 1m2-1l-2-1m2 1v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 7l2-1M4 7l2 1M4 7v2.5M12 21v-2.5" />
                            </svg>
                        </div>
                        <div className="p-6">
                            <h2 className="text-2xl font-bold text-gray-800 mb-2">Adote um Gato</h2>
                            <p className="text-gray-600">
                                Navegue por nossa seleção de gatos adoráveis que estão à espera de um lar virtual.
                            </p>
                            <div className="mt-4">
                                <span className="inline-block bg-blue-500 text-white py-2 px-4 rounded font-semibold">
                                    Ver Gatos
                                </span>
                            </div>
                        </div>
                    </div>
                </Link>

                {/* Card para Cachorros */}
                <Link href="/dogs" className="block">
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full">
                        <div className="h-64 bg-gradient-to-r from-amber-400 to-amber-600 flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-32 w-32 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
                            </svg>
                        </div>
                        <div className="p-6">
                            <h2 className="text-2xl font-bold text-gray-800 mb-2">Adote um Cachorro</h2>
                            <p className="text-gray-600">
                                Encontre o companheiro canino perfeito em nossa coleção de cachorros disponíveis para adoção.
                            </p>
                            <div className="mt-4">
                                <span className="inline-block bg-amber-500 text-white py-2 px-4 rounded font-semibold">
                                    Ver Cachorros
                                </span>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>

            <div className="mt-12 text-center">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Seus Pets Adotados</h2>
                <div className="flex justify-center space-x-6">
                    <Link href="/favorites" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded">
                        Meus Gatos
                    </Link>
                    <Link href="/dog-favorites" className="bg-amber-500 hover:bg-amber-700 text-white font-bold py-2 px-6 rounded">
                        Meus Cachorros
                    </Link>
                </div>
            </div>
        </div>
    );
}