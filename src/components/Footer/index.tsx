import { Facebook, Heart, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className=" bg-background">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    <div className="lg:col-span-1">
                        <Link href="/" className="flex items-center gap-2 mb-4">
                            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                                <Heart className="h-6 w-6 text-primary-foreground" fill="currentColor" />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-lg font-bold leading-none text-foreground">Lacrei Saúde</span>
                                <span className="text-xs text-muted-foreground">Saúde inclusiva</span>
                            </div>
                        </Link>
                        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                            Conectando você com profissionais de saúde comprometidos com o atendimento inclusivo à comunidade
                            LGBTQIA+.
                        </p>
                        <div className="flex gap-3">
                            <a
                                href="#"
                                className="flex h-9 w-9 items-center justify-center rounded-lg bg-secondary text-secondary-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                                aria-label="Instagram"
                            >
                                <Instagram />
                            </a>
                            <a
                                href="#"
                                className="flex h-9 w-9 items-center justify-center rounded-lg bg-secondary text-secondary-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                                aria-label="Facebook"
                            >
                                <Facebook />
                            </a>
                            <a
                                href="#"
                                className="flex h-9 w-9 items-center justify-center rounded-lg bg-secondary text-secondary-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                                aria-label="LinkedIn"
                            >
                                <Linkedin />
                            </a>
                        </div>
                    </div>

                    <div className="md:text-base md:text-start text-center">
                        <h3 className="mb-4 text-sm font-semibold text-foreground ">Para pacientes</h3>
                        <ul className="space-y-3">
                            <li>
                                <Link href="#" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                                    Encontrar profissional
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                                    Como funciona
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                                    Especialidades
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                                    Perguntas frequentes
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="md:text-base md:text-start text-center">
                        <h3 className="mb-4 text-sm font-semibold text-foreground">Para profissionais</h3>
                        <ul className="space-y-3">
                            <li>
                                <Link href="#" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                                    Cadastre-se
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                                    Capacitação
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                                    Recursos
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                                    Comunidade
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="md:text-base md:text-start text-center flex flex-col items-center md:items-start">
                        <h3 className="mb-4 text-sm font-semibold text-foreground ">Contato</h3>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-2">
                                <Mail className="mt-0.5 h-4 w-4 text-primary flex-shrink-0" />
                                <a
                                    href="mailto:contato@lacreisaude.com.br"
                                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                                >
                                    contato@lacreisaude.com.br
                                </a>
                            </li>
                            <li className="flex items-start gap-2">
                                <Phone className="mt-0.5 h-4 w-4 text-primary flex-shrink-0" />
                                <a
                                    href="tel:+551140028922"
                                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                                >
                                    (11) 4002-8922
                                </a>
                            </li>
                            <li className="flex items-start gap-2">
                                <MapPin className="mt-0.5 h-4 w-4 text-primary flex-shrink-0" />
                                <span className="text-sm text-muted-foreground">São Paulo, SP - Brasil</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 border-t border-border pt-8">
                    <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
                        <p className="text-sm text-muted-foreground">
                            © {new Date().getFullYear()} Lacrei Saúde. Todos os direitos reservados.
                        </p>
                        <div className="flex gap-6">
                            <Link href="#" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                                Privacidade
                            </Link>
                            <Link href="#" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                                Termos de uso
                            </Link>
                            <Link href="#" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                                Acessibilidade
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}