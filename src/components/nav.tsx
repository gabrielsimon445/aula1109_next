import Link from "next/link";
// import { useState } from "react";

const navLinks = [
    {href:"/home", label: "Home"},
    {href:"/empresa", label: "Empresa"},
    {href:"/servicos", label: "Serviços"},
]

export default function Nav () {
    // const [isOpen, setIsOpen] = useState(false);
    
    return (
        <nav>
            <div className="hidden md:flex md:space-x-8 items-center">
                {navLinks.map((link)=>(
                    <Link key={link.href} href={link.href} className="text-white hover:text-indigo-400">
                        {link.label}
                    </Link>
                ))}
            <Link href="/contato" className="bg-slate-600 text-white px-4 py-2 rounded hover:bg-slate-500">Contato</Link>
            </div>
        </nav>

    )
}