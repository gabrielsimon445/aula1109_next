"use client";

import { useForm, type UseFormReturn } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormSchema, type ContactFormData } from "@/lib/validator/formValidator";
import ContactFom from "./contactForm";
import AddressForm from "./addressForm";
import { submitContactForm } from "@/lib/actions/formactions";
import { toast, Toaster } from "react-hot-toast";

// Exportar o tipo para os componentes filhos usarem
export type FormComponentProps = Pick<UseFormReturn<ContactFormData>, 'control' | 'formState' | 'setValue' | 'setError'>;

export default function ContactSection() {
    const { 
        handleSubmit, 
        control, 
        formState, 
        setValue, 
        setError 
    } = useForm<ContactFormData>({
        resolver: zodResolver(contactFormSchema),
        defaultValues: {
            name: "", email: "", cpf: "", phone: "",
            cep: "", logradouro: "", bairro: "", localidade: "", estado: "",
        },
    });

    const { isSubmitting, errors } = formState;

    const onSubmit = async (data: ContactFormData) => {
        try {
            const result = await submitContactForm(data);
            if (result) {
                toast.success('Formulário enviado com sucesso!');
            } else {
                toast.error('Erro ao enviar o formulário. Tente novamente mais tarde.');
            }
        } catch (error) {
            toast.error('Erro ao enviar o formulário. Tente novamente mais tarde.');
        }
    };

    return (
        <section className="w-full bg-slate-600 py-10">
            <Toaster position="top-right" reverseOrder={false} />
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold mb-4">Fale conosco</h2>
                <p className="mb-2 max-w-2xl mx-auto">
                    Estamos aqui para ajudar! 
                    Se você tiver alguma dúvida, sugestão ou precisar de suporte, não hesite em entrar em contato conosco. 
                    Nossa equipe está pronta para atender você.
                </p>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} 
                  className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
                
                {/* Passando props para os componentes filhos */}
                <ContactFom control={control} formState={formState} setError={setError} setValue={setValue} />
                <AddressForm control={control} formState={formState} setValue={setValue} setError={setError} />

                <button type="submit"
                        disabled={isSubmitting}
                        className="mt-6 w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 
                                   transition-colors disabled:opacity-50">
                    {isSubmitting ? 'Enviando...' : 'Enviar'}
                </button>
            </form>  
        </section>
    );
}