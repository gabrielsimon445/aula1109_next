import Link from "next/link";
import Nav from "./nav";


export default function Header () {
    return (
        <header className="sticky top-0 z-50 bg-slate-800 p-4 text-white">
            <div className="container mx-auto flex justify-between items-center">
                <Link href="/" className="text-2xl font-bold text-indigo-400">
                    Minha <span className="text-white">Empresa</span>
                </Link>
                <Nav/>
            </div>
        </header>
    )
}