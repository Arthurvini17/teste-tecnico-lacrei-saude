"use client"

import React, { useState } from "react";
import { HeartHandshake, Menu, X } from "lucide-react";
import Link from "next/link";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="w-full bg-transparent]">
            <nav className="flex items-center justify-between h-16 px-6 md:px-12 relative">
                <div className="inline-flex items-center gap-2 font-semibold text-[#018762] text-lg">
                    <HeartHandshake />
                    <p>Lacrei Saúde</p>
                </div>

                {/* Desktop */}
                <ul className="hidden md:flex   font-bold items-center gap-8 text-sm  text-[#000000]">
                    <li>
                        <a href="#" className="hover:text-[#00A884] transition-colors ">
                            Início
                        </a>
                    </li>
                    <li>
                        <a href="#OurMission" className="hover:text-[#00A884] transition-colors">
                            Nossa missão
                        </a>
                    </li>
                    <li>
                        <a href="#Acessbilidade" className="hover:text-[#00A884] transition-colors">
                            Acessbilidade
                        </a>
                    </li>
                </ul>


                <div className="hidden md:flex items-center gap-3">
                    <Link
                        href="/login"
                        className="px-4 py-1 border shadow-sm border-[#018762] text-[#018762] font-semibold rounded-md hover:bg-[#018762] hover:text-white transition-colors"
                    >
                        Entrar
                    </Link>

                    <Link
                        href="/login"
                        className="px-4 py-1 border shadow-sm border-[#018762] text-[#018762] font-semibold rounded-md hover:bg-[#018762] hover:text-white transition-colors"
                    >
                        Registrar
                    </Link>
                </div>

                {/* botão do mobile */}
                <button
                    className="md:hidden text-[#018762]"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
                    aria-expanded={menuOpen}
                >
                    {menuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </nav>

            {/* menu mobile */}
            {
                menuOpen && (
                    <div className="md:hidden flex flex-col items-center gap-6 py-8 bg-white shadow-2xl border-t border-[#018762]/20 animate-fadeIn">
                        <ul className="flex flex-col items-center w-full gap-4 pt-4 border-t border-[#018762]/10">
                            <li>
                                <a
                                    href="#"
                                    className="text-[#018762] text-base font-medium hover:text-[#00A884] transition-colors">
                                    Início
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-[#018762] text-base font-medium hover:text-[#00A884] transition-colors">
                                    Sobre
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-[#018762] text-base font-medium hover:text-[#00A884] transition-colors" >
                                    Contato
                                </a>
                            </li>
                        </ul>

                        <div className="flex flex-col w-full items-center gap-4">
                            <button className="w-10/12 py-2 border shadow-md text-[#018762] font-semibold rounded-md hover:bg-[#018762] hover:text-white transition-colors">
                                Entrar
                            </button>

                            <button className="w-10/12 py-2 border bg-[#018762] text-white font-semibold rounded-md hover:bg-[#018762] hover:text-white transition-colors">
                                Cadastrar
                            </button>
                        </div>
                    </div>
                )
            }
        </header >
    );
}
