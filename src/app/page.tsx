export default function Home() {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">Sobre o Projeto</h1>

            <div className="bg-white shadow-md rounded-lg p-6">
                <p className="text-gray-700 mb-4">
                    Esta é uma aplicação de adoção de animais (gatos e cachorros) feita para meus estudos de pós-graduação em Engenharia de Software na PUC-RJ.
                </p>

                <p className="text-gray-700 mb-4">
                    O projeto permite que os usuários naveguem por imagens de gatos e cachorros disponíveis para adoção,
                    fornecidas por APIs externas (TheCatAPI e TheDogAPI), e "adotem" virtualmente os animais que desejarem.
                </p>

                <div className="mt-8 flex justify-center space-x-8">
                    <a
                        href="/cats"
                        className="px-6 py-3 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600 transition-colors"
                    >
                        Ver Gatos
                    </a>
                    <a
                        href="/dogs"
                        className="px-6 py-3 bg-amber-500 text-white font-bold rounded-lg hover:bg-amber-600 transition-colors"
                    >
                        Ver Cachorros
                    </a>
                </div>

                <h2 className="text-xl font-bold text-gray-800 mt-12 mb-3">Tecnologias Utilizadas</h2>
                <ul className="list-disc list-inside text-gray-700 mb-4">
                    <li>Frontend: Next.js, React, TypeScript, Tailwind CSS</li>
                    <li>Backend: FastAPI, SQLModel, Uvicorn</li>
                    <li>Containerização: Docker</li>
                    <li>APIs Externas: TheCatAPI, TheDogAPI</li>
                </ul>

                <h2 className="text-xl font-bold text-gray-800 mt-6 mb-3">Funcionalidades</h2>
                <ul className="list-disc list-inside text-gray-700">
                    <li>Visualização de gatos e cachorros de APIs externas</li>
                    <li>Adoção virtual de animais</li>
                    <li>Gerenciamento de animais adotados (edição de nomes, exclusão)</li>
                    <li>Interface responsiva e amigável</li>
                </ul>
            </div>
        </div>
    );
}