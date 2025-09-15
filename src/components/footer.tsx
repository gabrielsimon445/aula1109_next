import Link from "next/link";

export default function Footer() {

  return (
    <footer className="bg-slate-800 w-full py-8">
      <div className="container mx-auto px-4 text-center text-white">
        <div className=" flex justify-center items-center flex-wrap gap-4 mb-4">
          <Link href="/home" className="text-gray-200 hover:text-blue-900">Home</Link>
          <Link href="/empresa" className="text-gray-200 hover:text-blue-900">Empresa</Link>
          <Link href="/servicos" className="text-gray-200 hover:text-blue-900">Serviços</Link>
          <Link href="/contato" className="text-gray-200 hover:text-blue-900">Contato</Link>
        </div>
          <p className="text-slate-600 text-sm mt-5 border-t-2">
            &copy; { new Date().getFullYear() } Desenvolvido por UniSenai, Inc. Todos os direitos reservados.
          </p>
      </div>
    </footer>
  );
}
