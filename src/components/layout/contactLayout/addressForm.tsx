"use client";

import { MapPin, MapIcon } from "lucide-react";
import { contactFormSchema, type ContactFormData } from "@/lib/validator/formValidator";
import { CEP_MASK } from "@/lib/mask/formMask";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { IMaskInput } from "react-imask";
import { handleValidCPF } from "@/lib/service/api/apicpf";


export default function AddressForm() {
  const {
    handleSubmit,
    setError,
    control,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: { cep: "", logradouro: "", bairro: "", localidade: "", estado: "" },
  });

  const handleSubmitContact = (data: ContactFormData) => {
    console.log("Dados enviados com sucesso", data);
    return new Promise((resolve) => setTimeout(resolve, 2000));
  };

  return (
    <form
      className="bg-white p-8 rounded-lg shadow-md max-w-lg mx-auto text-center"
      onSubmit={handleSubmit(handleSubmitContact)}
    >
      <div>
        <label className="block text-gray-700 font-bold" htmlFor="cep">
          CEP
        </label>
        <div className="relative mt-1">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <MapPin className="h-5 w-5 text-gray-400" />
          </div>
          <Controller
            name="cep"
            control={control}
            render={({ field }) => (
              <IMaskInput
                mask={CEP_MASK}
                type="text"
                id="cep"
                {...field}
                className="block w-full rounded-md border-0 py-1.5 pl-10 pr-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                placeholder="000.000.000-00"
                onBlur={async (e) => {
                  const message = await handleValidCPF(e.currentTarget.value);
                  setError("cpf", {type: "manual", message})
                }}
              />
            )}
          />
        </div>
        {errors.name && (
          <p className="mt-2 text-sm text-red-500">{errors.name.message}</p>
        )}
      </div>
      <div className="mt-3">
        <label className="block text-gray-700 font-bold" htmlFor="rua">
          Rua
        </label>
        <div className="relative mt-1">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <MapIcon className="h-5 w-5 text-gray-400" />
          </div>
          <Controller
            name="logradouro"
            control={control}
            render={({ field }) => (
              <IMaskInput
                type="text"
                id="rua"
                {...field}
                className="block w-full rounded-md border-0 py-1.5 pl-10 pr-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                placeholder="Digite sua rua"
              />
            )}
          />
        </div>
        {errors.cpf && (
          <p className="mt-2 text-sm text-red-500">{errors.cpf.message}</p>
        )}
      </div>
      <div className="mt-3">
        <label className="block text-gray-700 font-bold" htmlFor="bairro">
          Bairro
        </label>
        <div className="relative mt-1">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <MapIcon className="h-5 w-5 text-gray-400" />
          </div>
          <Controller
            name="bairro"
            control={control}
            render={({ field }) => (
              <IMaskInput
                type="text"
                id="bairro"
                {...field}
                className="block w-full rounded-md border-0 py-1.5 pl-10 pr-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                placeholder="Digite seu bairro"
              />
            )}
          />
        </div>
        {errors.cpf && (
          <p className="mt-2 text-sm text-red-500">{errors.cpf.message}</p>
        )}
      </div>
      <div className="mt-3">
        <label className="block text-gray-700 font-bold" htmlFor="localidade">
          Cidade
        </label>
        <div className="relative mt-1">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <MapIcon className="h-5 w-5 text-gray-400" />
          </div>
          <Controller
            name="localidade"
            control={control}
            render={({ field }) => (
              <IMaskInput
                type="text"
                id="localidade"
                {...field}
                className="block w-full rounded-md border-0 py-1.5 pl-10 pr-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                placeholder="Digite sua cidade"
              />
            )}
          />
        </div>
        {errors.cpf && (
          <p className="mt-2 text-sm text-red-500">{errors.cpf.message}</p>
        )}
      </div>
      <div className="mt-3">
        <label className="block text-gray-700 font-bold" htmlFor="estado">
          Estado
        </label>
        <div className="relative mt-1">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <MapIcon className="h-5 w-5 text-gray-400" />
          </div>
          <Controller
            name="estado"
            control={control}
            render={({ field }) => (
              <IMaskInput
                type="text"
                id="estado"
                {...field}
                className="block w-full rounded-md border-0 py-1.5 pl-10 pr-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                placeholder="Digite seu estado"
              />
            )}
          />
        </div>
        {errors.cpf && (
          <p className="mt-2 text-sm text-red-500">{errors.cpf.message}</p>
        )}
      </div>
      <button className="w-full bg-indigo-500 rounded-lg p-1 mt-5">
        Enviar
      </button>
    </form>
  );
}
