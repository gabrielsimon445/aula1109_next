
export async function handleValidCPF (cpf: string) {
    
    const cpfClean = cpf.replace(/\D/g, "");
    if (cpfClean.length === 11){
        try{
            const response = await fetch(`https://api-cpf.vercel.app/cpf/valid/${cpfClean}`)
            const data = await response.json();
            if (data.Valid){
                return "";
            }else{
                return "CPF Inválido";
            }
        }catch(error: unknown){
            if(error instanceof Error){
                console.log("Erro ao consumir a API", error.message)
                return "Erro ao consumir a API"
            }else {
                return "Erro desconhecido"
            }
        }
    }else {
        return "Quantidade de dígitos inválidos"
    }

}