import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function HeroSection() {
    return (
        <section className="w-full bg-slate-600 text-black py-12 md:py-20">
            <div className="container grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-4">
                <div className="text-center md:text-left">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Bem-vindo ao Nosso Site</h1>
                    <p className="text-lg mb-6">
                        Descubra soluções inovadoras para suas necessidades. 
                        Explore nossos serviços e saiba como podemos ajudar você a alcançar seus objetivos.
                    </p>
                    <Link href="#features" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
                        Saiba Mais
                    </Link>
                    <Link href="/contato" className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition ml-4">
                       Entre em contato agora mesmo <ArrowRight/>
                    </Link>
                </div>
                <div className="hidden md:block">
                    <Image 
                        src="/hero-image.png"
                        alt="Hero Image"
                        width={500}
                        height={300}
                        className="mx-auto" />
                </div>
            </div>
        </section>
    )
}