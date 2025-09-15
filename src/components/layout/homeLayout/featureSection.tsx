

export default function FeatureSection () {
    return (
        <section className="w-full bg-slate-600 text-black py-12 md:py-20">
            <h2 className="text-3xl font-bold text-center mb-8">Conheça nossas funcionalidades.</h2>
            <p className="text-center max-w-2xl mx-auto mb-12 px-4">
                Oferecemos uma variedade de funcionaliades para atender suas necessidades. 
                Explore nossas soluções inovadoras e descubra como podemos ajudar você a alcançar seus objetivos com eficiência e facilidade.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-8">
                <div className="flex flex-col items-center text-center py-6 bg-white/60 rounded-lg shadow-md">
                    <div className="bg-blue-500 w-full mb-4">
                        <h3 className="text-xl font-semibold m-4">UI/UX Design</h3>
                    </div>
                    <h3>Interface moderna e intuitiva</h3>
                    <p>Experiência do usuário, navegação simple e rápida</p>
                </div>
                <div className="flex flex-col items-center text-center py-6 bg-white/60 rounded-lg shadow-md">
                    <div className="bg-blue-400 w-full mb-4">
                        <h3 className="text-xl font-semibold m-4">Roteamento</h3>
                    </div>            
                    <h3>Roteamento simples</h3>
                    <p>Segurança de rotas, links protegidos, url amigáveis</p>
                </div>
                <div className="flex flex-col items-center text-center py-6 bg-white/60 rounded-lg shadow-md">
                    <div className="bg-blue-500 w-full mb-4">
                        <h3 className="text-xl font-semibold m-4">Segurança</h3>
                    </div>                    
                    <h3>Segurança avançada</h3>
                    <p>Uso de chaves para APIs e tokens da autenticação</p>
                </div>
            </div>
        </section>
    )
}