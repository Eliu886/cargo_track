"use client"
import { useForm } from 'react-hook-form'
import Navbar from '../../menu/navbar'
function RegisterEnvio() {

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
            alert("Envio Regitrado");
        }
        console.log(res);
    });
    console.log(errors);

    return (
        <>
            <Navbar />
            <div className='h-screen w-screen flex justify-center items-center bg-white-900 bg-indigo-600'>
                <form onSubmit={onSubmit} className="p-10 rounded-xl bg-black w-full max-w-5xl shadow-2xl">
                    <h1 className="text-slate-200 font-bold text-4xl mb-4">
                        Agendar Envio
                    </h1>
                    <div className="grid grid-cols-3 gap-4">
                        <div className="flex flex-col">
                            <label htmlFor="origen" className="text-slate-500 mb-2 text-sm">
                                Almacen de Origen:
                            </label>
                            <input type="number"
                                {...register("origen", {
                                    required: {
                                        value: true,
                                        message: "El Almacen es requerido",
                                    },
                                })}
                                className="w-full p-3 rounded mb-2 bg-slate-900 text-slate-300"
                            />
                            {errors.almacenorigen && (
                                <span className="text-red-500 text-sm">{errors.almacenorigen.message}</span>
                            )}
                        </div>

                        <div className="flex flex-col">
                            <label htmlFor="destino" className="text-slate-500 mb-2 text-sm">
                                Almacen de Destino:
                            </label>
                            <input type="number"
                                {...register("destino", {
                                    required: {
                                        value: true,
                                        message: "El Almacen es requerido",
                                    },
                                })}
                                className="w-full p-3 rounded mb-2 bg-slate-900 text-slate-300"
                            />
                            {errors.destino && (
                                <span className="text-red-500 text-sm">{errors.destino.message}</span>
                            )}
                        </div>

                        <div className="flex flex-col">
                            <label htmlFor="fsalida" className="text-slate-500 mb-2 text-sm">
                                Fecha de Salida:
                            </label>
                            <input type="date"
                                {...register("fsalida", {
                                    required: {
                                        value: true,
                                        message: "La Fecha es requerida",
                                    },
                                })}
                                className="w-full p-3 rounded mb-2 bg-slate-900 text-slate-300"
                            />
                            {errors.fsalida && (
                                <span className="text-red-500 text-sm">{errors.fsalida.message}</span>
                            )}
                        </div>

                        <div className="flex flex-col">
                            <label htmlFor="fllegada" className="text-slate-500 mb-2 text-sm">
                                Fecha de Llegada:
                            </label>
                            <input type="date"
                                {...register("fllegada", {
                                    required: {
                                        value: true,
                                        message: "La Fecha es requerida",
                                    },
                                })}
                                className="w-full p-3 rounded mb-2 bg-slate-900 text-slate-300"
                            />
                            {errors.fllegada && (
                                <span className="text-red-500 text-sm">{errors.fllegada.message}</span>
                            )}
                        </div>

                        <div className="flex flex-col">
                            <label htmlFor="estado" className="text-slate-500 mb-2 text-sm">
                                Estado del Envio:
                            </label>

                            <select
                                {...register("estado", {
                                    required: {
                                        value: true,
                                        message: "El Estado del Envio es requerido",
                                    },
                                })}
                                className="w-full p-3 rounded mb-2 bg-slate-900 text-slate-300"
                                id="estado"
                            >
                                <option value="">Selecciona un Estado</option>
                                <option value="En Puerto de salida">En Puerto de salida</option>
                                <option value="En Transito">En Transito</option>
                                <option value="En Destino">En Destino</option>
                            </select>
                            {errors.estado && (
                                <span className="text-red-500 text-sm">{errors.estado.message}</span>
                            )}
                        </div>

                        <div className="flex flex-col">
                            <label htmlFor="metodo" className="text-slate-500 mb-2 text-sm">
                                Metodo de Envio:
                            </label>
                            <select
                                {...register("metodo", {
                                    required: {
                                        value: true,
                                        message: "El Metodo es requerido",
                                    },
                                })}
                                className="w-full p-3 rounded mb-2 bg-slate-900 text-slate-300"
                                id="metodo"
                            >
                                <option value="">Selecciona un Metodo</option>
                                <option value="Avión">Avión</option>
                                <option value="Barco">Barco</option>
                            </select>
                            {errors.metodo && (
                                <span className="text-red-500 text-sm">{errors.metodo.message}</span>
                            )}
                        </div>

                    </div>

                    <button className="w-1/4 bg-indigo-600 hover:bg-indigo-700 text-white p-3 rounded-lg mb-4 mt-2 cursor-pointer transition-colors duration-300">
                        Agendar
                    </button>
                </form>
            </div>

        </>
    );
}

export default RegisterEnvio