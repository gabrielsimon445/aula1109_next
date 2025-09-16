"use client";

import { MapPin, MapIcon } from "lucide-react";
import { CEP_MASK } from "@/lib/mask/formMask";
import { Controller } from "react-hook-form";
import { IMaskInput } from "react-imask";
import { apicep } from "@/lib/service/api/apicep";
import type { FormComponentProps } from "./contactSection"; // Importe o tipo

export default function AddressForm({
  control,
  formState,
  setValue,
  setError,
}: FormComponentProps) {
  const { errors } = formState;

  const handleCepBlur = async (cep: string) => {
    // Remove caracteres não numéricos para a validação
    const cleanCep = cep.replace(/\D/g, "");
    if (cleanCep.length !== 8) {
      // Opcional: não fazer nada se o CEP não estiver completo
      return;
    }

    try {
      const address = await apicep(cep);
      setValue("logradouro", address.rua, { shouldValidate: true });
      setValue("bairro", address.bairro, { shouldValidate: true });
      setValue("localidade", address.cidade, { shouldValidate: true });
      setValue("estado", address.estado, { shouldValidate: true });
      setError("cep", {}); // Limpa o erro caso a busca seja bem-sucedida
    } catch (error) {
      setError("cep", { type: "manual", message: (error as Error).message });
    }
  };

  return (
    <>
      <div className="mt-3">
        {" "}
        {/* Adicionado mt-3 para espaçamento */}
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
                value={field.value}
                onChange={field.onChange}
                onBlur={() => {
                  field.onBlur();
                  handleCepBlur(field.value);
                }}
                className="block w-full rounded-md border-0 py-1.5 pl-10 pr-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                placeholder="00000-000"
              />
            )}
          />
        </div>
        {errors.cep && (
          <p className="mt-2 text-sm text-red-500">{errors.cep.message}</p>
        )}
      </div>

      {/* Repita para os outros campos, corrigindo a exibição do erro */}
      <div className="mt-3">
        <label className="block text-gray-700 font-bold" htmlFor="logradouro">
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
              <input /* Pode ser input normal se não precisar de máscara */
                type="text"
                id="logradouro"
                {...field}
                className="block w-full rounded-md border-0 py-1.5 pl-10 pr-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                placeholder="Digite sua rua"
              />
            )}
          />
        </div>
        {errors.logradouro && (
          <p className="mt-2 text-sm text-red-500">
            {errors.logradouro.message}
          </p>
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
              <input
                type="text"
                id="bairro"
                {...field}
                className="block w-full rounded-md border-0 py-1.5 pl-10 pr-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                placeholder="Digite seu bairro"
              />
            )}
          />
        </div>
        {errors.bairro && (
          <p className="mt-2 text-sm text-red-500">{errors.bairro.message}</p>
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
              <input
                type="text"
                id="localidade"
                {...field}
                className="block w-full rounded-md border-0 py-1.5 pl-10 pr-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                placeholder="Digite sua cidade"
              />
            )}
          />
        </div>
        {errors.localidade && (
          <p className="mt-2 text-sm text-red-500">
            {errors.localidade.message}
          </p>
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
              <input
                type="text"
                id="estado"
                {...field}
                className="block w-full rounded-md border-0 py-1.5 pl-10 pr-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                placeholder="Digite seu estado"
              />
            )}
          />
        </div>
        {errors.estado && (
          <p className="mt-2 text-sm text-red-500">{errors.estado.message}</p>
        )}
      </div>
    </>
  );
}
