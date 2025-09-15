import {z} from 'zod';

export const contactFormSchema = z.object({
    name: z.string().min(2, {message: 'Nome deve ter no mínimo 2 caracteres'}),
    email: z.email({message: 'E-mail inválido'}),
    phone: z.string().min(10, {message: 'Fone deve ter no mínimo 10 dígitos'}),
    cpf: z.string().min(11, {message: 'CPF inválido'}),
    cep: z.string().min(8, {message: 'CEP inválido'}),
    logradouro: z.string().min(8, {message: 'Logradouro inválido'}),
    bairro: z.string().min(8, {message: 'Bairro inválido'}),
    localidade: z.string().min(8, {message: 'Localidade inválido'}),
    estado: z.string().min(8, {message: 'Estado inválido'}),
})

export type ContactFormData = z.infer<typeof contactFormSchema>;