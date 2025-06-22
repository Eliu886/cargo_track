"use client"
import { useForm } from 'react-hook-form'
import Navbar from '../../menu/navbar'
function RegisterPage() {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = handleSubmit(async (data) => {
        const res = await fetch('/api/auth/registrar', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        /*const result = await res.json();

        if (res.ok) {
            alert(result.message);
        } else {
            alert("Error: " + result.message);
        }*/
        console.log(res);
    });

    return (
        <>
            <Navbar />
            //bg-neutral-900 text-white
            <div className='h-screen w-screen flex justify-center items-center bg-white-900 bg-indigo-600'>
                <form onSubmit={onSubmit} className="p-10 rounded-xl bg-black w-full max-w-5xl shadow-2xl">
                    <h1 className="text-slate-200 font-bold text-4xl mb-4">
                        Registrar usuario
                    </h1>
                    <div className="grid grid-cols-3 gap-4">
                        <div className="flex flex-col">
                            <label htmlFor="nombre" className="text-slate-500 mb-2 text-sm">
                                Nombre:
                            </label>
                            <input type="text"
                                {...register("nombre", {
                                    required: {
                                        value: true,
                                        message: "El Nombre es requerido",
                                    },
                                })}
                                className="w-full p-3 rounded mb-2 bg-slate-900 text-slate-300"
                            />
                            {errors.nombre && (
                                <span className="text-red-500 text-sm">{errors.nombre.message}</span>
                            )}
                        </div>

                        <div className="flex flex-col">
                            <label htmlFor="apellido" className="text-slate-500 mb-2 text-sm">
                                Apellido:
                            </label>
                            <input type="text"
                                {...register("apellido", {
                                    required: {
                                        value: true,
                                        message: "El Apellido es requerido",
                                    },
                                })}
                                className="w-full p-3 rounded mb-2 bg-slate-900 text-slate-300"
                            />
                            {errors.apellido && (
                                <span className="text-red-500 text-sm">{errors.apellido.message}</span>
                            )}
                        </div>

                        <div className="flex flex-col">
                            <label htmlFor="username" className="text-slate-500 mb-2 text-sm">
                                Username:
                            </label>
                            <input type="text"
                                {...register("username", {
                                    required: {
                                        value: true,
                                        message: "El Username es requerido",
                                    },
                                })}
                                className="w-full p-3 rounded mb-2 bg-slate-900 text-slate-300"
                            />
                            {errors.username && (
                                <span className="text-red-500 text-sm">{errors.username.message}</span>
                            )}
                        </div>

                        <div className="flex flex-col">
                            <label htmlFor="contrasena" className="text-slate-500 mb-2 text-sm">
                                Contraseña:
                            </label>
                            <input type="password"
                                {...register("contrasena", {
                                    required: {
                                        value: true,
                                        message: "La Contraseña es requerido",
                                    },
                                })}
                                className="w-full p-3 rounded mb-2 bg-slate-900 text-slate-300"
                            />
                            {errors.contrasena && (
                                <span className="text-red-500 text-sm">{errors.contrasena.message}</span>
                            )}
                        </div>

                        <div className="flex flex-col">
                            <label htmlFor="email" className="text-slate-500 mb-2 text-sm">
                                Correo electronico:
                            </label>
                            <input type="email"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: "El Email es requerido",
                                    },
                                })}
                                className="w-full p-3 rounded mb-2 bg-slate-900 text-slate-300"
                                placeholder="ejemplo@gmail.com"
                            />
                            {errors.email && (
                                <span className="text-red-500 text-sm">{errors.email.message}</span>
                            )}
                        </div>

                        <div className="flex flex-col">
                            <label htmlFor="rol" className="text-slate-500 mb-2 text-sm">
                                Rol del usuario:
                            </label>

                            <select
                                {...register("rol", {
                                    required: {
                                        value: true,
                                        message: "El Rol es requerido",
                                    },
                                })}
                                className="w-full p-3 rounded mb-2 bg-slate-900 text-slate-300"
                                id="rol"
                            >
                                <option value="">Selecciona un Rol</option>
                                <option value="admin">Administrador</option>
                                <option value="user">Empleado</option>
                                <option value="guest">Cliente</option>
                            </select>
                            {errors.rol && (
                                <span className="text-red-500 text-sm">{errors.rol.message}</span>
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

export default RegisterPage