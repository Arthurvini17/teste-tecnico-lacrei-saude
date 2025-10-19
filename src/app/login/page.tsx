import { Facebook } from "lucide-react";

export default function Login() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen px-4 bg-gray-50">
            <div className="text-center mb-8">
                <h1 className="text-2xl font-bold text-gray-800">Bem vindo de volta</h1>
                <p className="text-gray-600">Entre na sua conta Lacrei Saúde</p>
            </div>

            <div className="bg-white shadow-xl rounded-xl flex flex-col items-center w-full max-w-md p-6 sm:p-10">
                <h1 className="text-xl font-semibold text-gray-800 mb-2">Login</h1>
                <p className="text-gray-500 mb-6 text-sm text-center">
                    Acesse sua conta para continuar
                </p>

                <div className="flex flex-col gap-4 w-full">
                    <div className="flex flex-col gap-1">
                        <label htmlFor="email" className="text-sm text-gray-700">
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            placeholder="seu@email.com"
                            className="w-full bg-white border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#018762]"
                        />
                    </div>

                    <div className="flex flex-col gap-1">
                        <label htmlFor="password" className="text-sm text-gray-700">
                            Senha
                        </label>
                        <input
                            type="password"
                            name="password"
                            placeholder="suaSenha"
                            className="w-full bg-white border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#018762]"
                        />
                    </div>

                    <button className="w-full bg-[#018762] rounded-md px-4 py-2 text-white font-semibold hover:bg-[#016e54] transition-colors">
                        Entrar
                    </button>
                </div>

                <div className="w-full flex justify-center mt-6">
                    <Facebook className="text-blue-600 w-6 h-6 cursor-pointer hover:opacity-80" />
                </div>

                <div className="mt-6 text-center text-sm text-gray-600">
                    <p>
                        Não tem uma conta?{" "}
                        <span className="underline text-[#018762] cursor-pointer hover:text-[#016e54]">
                            Cadastre-se
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
}
