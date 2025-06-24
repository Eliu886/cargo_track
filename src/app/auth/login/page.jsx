"use client";
import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react";
import { useRouter } from 'next/navigation'
//import { useState } from 'react'

function LoginPage() {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const router = useRouter()

const onSubmit = handleSubmit(async (data) =>{
    console.log(data);
    const res = await signIn('credentials', {
        username: data.username,
        password: data.contrasena,
        redirect: false,
    });
    if(res.error){
        alert(res.error);
    }else{
        router.push('/dasborad')
    }
    console.log(res);
});

    return (
        <div className="h-screen w-screen flex justify-center items-center bg-[url('/barco.jpg')] bg-cover bg-center">
            <form onSubmit={onSubmit} className="py-5 px-10 w-1/4 rounded-xl bg-black/70 shadow-2xl">
                <h1 className="text-slate-200 font-bold text-4xl mb-4">
                    Login
                </h1>
                <label htmlFor="username" className="text-slate-200 mb-2 text-sm">
                    Username:
                </label>
                <input type="text"
                    {...register("username", {
                        required: {
                            value: true,
                            message: "El Username es requerido",
                        },
                    })}
                    className="w-full p-3 rounded-xl mb-2 bg-slate-900 text-slate-300"
                />
                {errors.username && (
                    <span className="text-red-500 text-sm">{errors.username.message}</span>
                )}

                <label htmlFor="contrasena" className="text-slate-200 mb-2 text-sm">
                    Contraseña:
                </label>
                <input type="password"
                    {...register("contrasena", {
                        required: {
                            value: true,
                            message: "La Contraseña es requerido",
                        },
                    })}
                    className="w-full p-3 rounded-xl mb-2 bg-slate-900 text-slate-300"
                />
                {errors.contrasena && (
                    <span className="text-red-500 text-sm">{errors.contrasena.message}</span>
                )}
                <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white text-lg p-3 rounded-xl mt-2 cursor-pointer transition-colors duration-300">
                    Ingresar
                </button>
            </form>
        </div>
    )
}

export default LoginPage