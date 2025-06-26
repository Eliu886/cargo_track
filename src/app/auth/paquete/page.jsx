"use client"
import { useForm } from 'react-hook-form'
import Navbar from '../../menu/navbar'
function RegisterPaquete() {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = handleSubmit(async (data) => {
        const res = await fetch('/api/auth/registrar', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (res.error) {
            alert(res.error);
        } else {
            alert("Paquete Regitrado");
        }
        console.log(res);
    });

    return (
        <>
            <Navbar />
            <div className='h-screen w-screen flex justify-center items-center bg-white-900 bg-indigo-600'>
                <form onSubmit={onSubmit} className="p-10 rounded-xl bg-black w-full max-w-5xl shadow-2xl">
                    <h1 className="text-slate-200 font-bold text-4xl mb-4">
                        Registrar paquete
                    </h1>
                    <div className="grid grid-cols-3 gap-4">
                        <div className="flex flex-col">
                            <label htmlFor="almacen" className="text-slate-500 mb-2 text-sm">
                                Codigo del Almacen:
                            </label>
                            <input type="number"
                                {...register("almacen", {
                                    required: {
                                        value: true,
                                        message: "El Almacen es requerido",
                                    },
                                })}
                                className="w-full p-3 rounded mb-2 bg-slate-900 text-slate-300"
                            />
                            {errors.almacen && (
                                <span className="text-red-500 text-sm">{errors.almacen.message}</span>
                            )}
                        </div>

                        <div className="flex flex-col">
                            <label htmlFor="tracking" className="text-slate-500 mb-2 text-sm">
                                Numero de Tracking:
                            </label>
                            <input type="number"
                                {...register("tracking", {
                                    required: {
                                        value: true,
                                        message: "El Numero de Tracking es requerido",
                                    },
                                })}
                                className="w-full p-3 rounded mb-2 bg-slate-900 text-slate-300"
                            />
                            {errors.tracking && (
                                <span className="text-red-500 text-sm">{errors.tracking.message}</span>
                            )}
                        </div>

                        <div className="flex flex-col">
                            <label htmlFor="largo" className="text-slate-500 mb-2 text-sm">
                                Largo del paquete:
                            </label>
                            <input type="number"
                                {...register("largo", {
                                    required: {
                                        value: true,
                                        message: "El Largo del paquete es requerido",
                                    },
                                })}
                                className="w-full p-3 rounded mb-2 bg-slate-900 text-slate-300"
                            />
                            {errors.largo && (
                                <span className="text-red-500 text-sm">{errors.largo.message}</span>
                            )}
                        </div>

                        <div className="flex flex-col">
                            <label htmlFor="ancho" className="text-slate-500 mb-2 text-sm">
                                Ancho del Paquete:
                            </label>
                            <input type="number"
                                {...register("ancho", {
                                    required: {
                                        value: true,
                                        message: "El Ancho del Paquete es requerido",
                                    },
                                })}
                                className="w-full p-3 rounded mb-2 bg-slate-900 text-slate-300"
                            />
                            {errors.ancho && (
                                <span className="text-red-500 text-sm">{errors.ancho.message}</span>
                            )}
                        </div>

                        <div className="flex flex-col">
                            <label htmlFor="alto" className="text-slate-500 mb-2 text-sm">
                                Alto del Paquete:
                            </label>
                            <input type="number"
                                {...register("alto", {
                                    required: {
                                        value: true,
                                        message: "El Alto del Paquete es requerido",
                                    },
                                })}
                                className="w-full p-3 rounded mb-2 bg-slate-900 text-slate-300"
                                placeholder="En pulgadas"
                            />
                            {errors.alto && (
                                <span className="text-red-500 text-sm">{errors.alto.message}</span>
                            )}
                        </div>


                        <div className="flex flex-col">
                            <label htmlFor="libra" className="text-slate-500 mb-2 text-sm">
                                Peso en Libras del paquete:
                            </label>
                            <input type="number"
                                {...register("libra", {
                                    required: {
                                        value: true,
                                        message: "El Peso es requerido",
                                    },
                                })}
                                className="w-full p-3 rounded mb-2 bg-slate-900 text-slate-300"
                                placeholder="En Libras"
                            />
                            {errors.libra && (
                                <span className="text-red-500 text-sm">{errors.libra.message}</span>
                            )}
                        </div>


                        <div className="flex flex-col">
                            <label htmlFor="descrpcion" className="text-slate-500 mb-2 text-sm">
                                Descripción:
                            </label>
                            <input type="text"
                                {...register("descrpcion", {
                                    required: {
                                        value: true,
                                        message: "La Descripción es requerida",
                                    },
                                })}
                                className="w-full p-3 rounded mb-2 bg-slate-900 text-slate-300"
                            />
                            {errors.descrpcion && (
                                <span className="text-red-500 text-sm">{errors.descrpcion.message}</span>
                            )}
                        </div>

                        <div className="flex flex-col">
                            <label htmlFor="estado" className="text-slate-500 mb-2 text-sm">
                                Estado del Paquete:
                            </label>

                            <select
                                {...register("estado", {
                                    required: {
                                        value: true,
                                        message: "El Estado del Paquete es requerido",
                                    },
                                })}
                                className="w-full p-3 rounded mb-2 bg-slate-900 text-slate-300"
                                id="estado"
                            >
                                <option value="">Selecciona un Estado</option>
                                <option value="Recibido en Almacen">Recibido en Almacen</option>
                                <option value="En Transito">En Transito</option>
                                <option value="Disponible para despacho">Disponible para despacho</option>
                                <option value="Despachado">Despachado</option>
                            </select>
                            {errors.estado && (
                                <span className="text-red-500 text-sm">{errors.estado.message}</span>
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
export default RegisterPaquete