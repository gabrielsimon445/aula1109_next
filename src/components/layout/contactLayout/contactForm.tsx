"use client";

import { User, IdCard, Mail, PhoneCall } from "lucide-react";
import { CPF_MASK, PHONE_MASK } from "@/lib/mask/formMask";
import { Controller } from "react-hook-form";
import { IMaskInput } from "react-imask";
import { handleValidCPF } from "@/lib/service/api/apicpf";
import type { FormComponentProps } from "./contactSection"; // Importe o tipo

export default function ContactForm({ control, formState, setError }: FormComponentProps) {
  const { errors } = formState;

  return (
    <>
      <div>
        <label className="block text-gray-700 font-bold" htmlFor="name">Nome</label>
        <div className="relative mt-1">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <User className="h-5 w-5 text-gray-400" />
          </div>
          <Controller
            name="name"
            control={control}
            render={({ field }) => (
              <input
                type="text"
                id="name"
                {...field}
                className="block w-full rounded-md border-0 py-1.5 pl-10 pr-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                placeholder="Seu nome completo"
              />
            )}
          />
        </div>
        {errors.name && (<p className="mt-2 text-sm text-red-500">{errors.name.message}</p>)}
      </div>

      <div className="mt-3">
        <label className="block text-gray-700 font-bold" htmlFor="cpf">CPF</label>
        <div className="relative mt-1">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <IdCard className="h-5 w-5 text-gray-400" />
          </div>
          <Controller
            name="cpf"
            control={control}
            render={({ field }) => (
              <IMaskInput
                mask={CPF_MASK}
                type="text"
                id="cpf"
                {...field}
                className="block w-full rounded-md border-0 py-1.5 pl-10 pr-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                placeholder="000.000.000-00"
                onBlur={async (e) => {
                  const message = await handleValidCPF(e.currentTarget.value);
                  if (message) {
                    setError("cpf", { type: "manual", message });
                  }
                }}
              />
            )}
          />
        </div>
        {errors.cpf && (<p className="mt-2 text-sm text-red-500">{errors.cpf.message}</p>)}
      </div>

      {/* Repita para os outros campos: Email e Telefone */}
      <div className="mt-3">
        <label className="block text-gray-700 font-bold" htmlFor="email">E-mail</label>
        <div className="relative mt-1">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <Mail className="h-5 w-5 text-gray-400" />
          </div>
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <input
                type="text"
                id="email"
                {...field}
                className="block w-full rounded-md border-0 py-1.5 pl-10 pr-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                placeholder="Digite seu E-mail"
              />
            )}
          />
        </div>
        {errors.email && (<p className="mt-2 text-sm text-red-500">{errors.email.message}</p>)}
      </div>

      <div className="mt-3">
        <label className="block text-gray-700 font-bold" htmlFor="phone">Telefone</label>
        <div className="relative mt-1">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <PhoneCall className="h-5 w-5 text-gray-400" />
          </div>
          <Controller
            name="phone"
            control={control}
            render={({ field }) => (
              <IMaskInput
                mask={PHONE_MASK}
                type="text"
                id="phone"
                {...field}
                className="block w-full rounded-md border-0 py-1.5 pl-10 pr-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                placeholder="(00) 00000-0000"
              />
            )}
          />
        </div>
        {errors.phone && (<p className="mt-2 text-sm text-red-500">{errors.phone.message}</p>)}
      </div>
    </>
  );
}