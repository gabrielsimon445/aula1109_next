export async function apicep(cep: string) {
    const cepclean = cep.replace(/\D/g, '');
    if (cepclean.length !== 8) {
        throw new Error('CEP inválido. Deve conter 8 dígitos.');
    }
    try {
        const response = await fetch(`https://viacep.com.br/ws/${cepclean}/json/`);
        const addressData = await response.json();
        if (addressData.erro) {
            throw new Error('CEP não encontrado.');
        }

        return {
            rua: addressData.logradouro,
            bairro: addressData.bairro,
            cidade: addressData.localidade,
            estado: addressData.uf
        }
    } catch (error) {
        console.error('Erro ao buscar o CEP:', error);
        throw new Error('Erro ao buscar o CEP.');
    }
}