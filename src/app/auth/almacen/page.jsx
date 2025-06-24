"use client"
import { useForm } from 'react-hook-form'
import Navbar from '../../menu/navbar'

function AlmacenPage() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = handleSubmit(async (data) => {
        const res = await fetch('/api/auth/registrar', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },

        });
    });
    return (
        <>
            <Navbar />
            <div className='h-screen w-screen flex justify-center items-center mt-5 bg-white-900 bg-indigo-600'>
                <form onSubmit={onSubmit} className="p-10 rounded-xl bg-black w-full max-w-5xl shadow-2xl">
                    <h1 className="text-slate-200 font-bold text-4xl mb-4">
                        Registrar Almacen
                    </h1>
                    <div className="grid grid-cols-3 gap-4">
                        <div className="flex flex-col">
                            <label htmlFor="codigo" className="text-slate-500 mb-2 text-sm">
                                Codigo:
                            </label>
                            <input type="text"
                                {...register("codigo", {
                                    required: {
                                        value: true,
                                        message: "El Codigo es requerido",
                                    },
                                })}
                                className="w-full p-3 rounded mb-2 bg-slate-900 text-slate-300"
                            />
                            {errors.codigo && (
                                <span className="text-red-500 text-sm">{errors.codigo.message}</span>
                            )}
                        </div>

                        <div className="flex flex-col">
                            <label htmlFor="codigop" className="text-slate-500 mb-2 text-sm">
                                Codigo Postal:
                            </label>
                            <input type="text"
                                {...register("codigop", {
                                    required: {
                                        value: true,
                                        message: "El Codigo Postal es requerido",
                                    },
                                })}
                                className="w-full p-3 rounded mb-2 bg-slate-900 text-slate-300"
                                placeholder="12345"
                            />
                            {errors.codigop && (
                                <span className="text-red-500 text-sm">{errors.codigop.message}</span>
                            )}
                        </div>

                        <div className="flex flex-col">
                            <label htmlFor="telefono" className="text-slate-500 mb-2 text-sm">
                                Numero de Telefono:
                            </label>
                            <input type="text"
                                {...register("telefono", {
                                    required: {
                                        value: true,
                                        message: "El Codigo Postal es requerido",
                                    },
                                })}
                                className="w-full p-3 rounded mb-2 bg-slate-900 text-slate-300"
                            />
                            {errors.telefono && (
                                <span className="text-red-500 text-sm">{errors.telefono.message}</span>
                            )}
                        </div>

                        <h1 className="col-span-3 text-slate-200 font-bold text-xl">
                            Direccion del Almacen
                        </h1>
                        <h1 className="col-span-3 text-slate-200 font-bold text-x">
                            Linea 1
                        </h1>

                        <div className="flex flex-col">
                            <label htmlFor="pais" className="text-slate-500 mb-2 text-sm">
                                Pais:
                            </label>
                            <input type="text"
                                {...register("pais", {
                                    required: {
                                        value: true,
                                        message: "El Pais es requerido",
                                    },
                                })}
                                className="w-full p-3 rounded mb-2 bg-slate-900 text-slate-300"
                            />
                            {errors.pais && (
                                <span className="text-red-500 text-sm">{errors.pais.message}</span>
                            )}
                        </div>

                        <div className="flex flex-col">
                            <label htmlFor="estado" className="text-slate-500 mb-2 text-sm">
                                Estado:
                            </label>
                            <input type="text"
                                {...register("estado", {
                                    required: {
                                        value: true,
                                        message: "El Estado es requerido",
                                    },
                                })}
                                className="w-full p-3 rounded mb-2 bg-slate-900 text-slate-300"
                            />
                            {errors.estado && (
                                <span className="text-red-500 text-sm">{errors.estado.message}</span>
                            )}
                        </div>

                        <div className="flex flex-col">
                            <label htmlFor="ciudad" className="text-slate-500 mb-2 text-sm">
                                Ciudad:
                            </label>
                            <input type="text"
                                {...register("ciudad", {
                                    required: {
                                        value: true,
                                        message: "La Ciudad es requerido",
                                    },
                                })}
                                className="w-full p-3 rounded mb-2 bg-slate-900 text-slate-300"
                            />
                            {errors.ciudad && (
                                <span className="text-red-500 text-sm">{errors.ciudad.message}</span>
                            )}
                        </div>

                        <h1 className="col-span-3 text-slate-200 font-bold text-x">
                            Linea 2
                        </h1>
                        <div className="flex flex-col">
                            <label htmlFor="pais2" className="text-slate-500 mb-2 text-sm">
                                Pais:
                            </label>
                            <input type="text"
                                {...register("pais2", {
                                    required: {
                                        value: false,
                                    },
                                })}
                                className="w-full p-3 rounded mb-2 bg-slate-900 text-slate-300"
                            />
                            {errors.pais2 && (
                                <span className="text-red-500 text-sm">{errors.pais2.message}</span>
                            )}
                        </div>

                        <div className="flex flex-col">
                            <label htmlFor="estado2" className="text-slate-500 mb-2 text-sm">
                                Estado:
                            </label>
                            <input type="text"
                                {...register("estado2", {
                                    required: {
                                        value: false,
                                    },
                                })}
                                className="w-full p-3 rounded mb-2 bg-slate-900 text-slate-300"
                            />
                            {errors.estado2 && (
                                <span className="text-red-500 text-sm">{errors.estado2.message}</span>
                            )}
                        </div>

                        <div className="flex flex-col">
                            <label htmlFor="ciudad2" className="text-slate-500 mb-2 text-sm">
                                Ciudad:
                            </label>
                            <input type="text"
                                {...register("ciudad2", {
                                    required: {
                                        value: false,
                                    },
                                })}
                                className="w-full p-3 rounded mb-2 bg-slate-900 text-slate-300"
                            />
                            {errors.ciudad2 && (
                                <span className="text-red-500 text-sm">{errors.ciudad2.message}</span>
                            )}
                        </div>

                    </div>

                    <button className="w-1/4 bg-indigo-600 hover:bg-indigo-700 text-white p-3 rounded-lg mb-4 mt-2 cursor-pointer transition-colors duration-300">
                        Registrar
                    </button>
                </form>
            </div>
        </>
    )
}

export default AlmacenPage;