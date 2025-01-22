import { Head, Link, useForm, usePage } from "@inertiajs/react";
import { useRoute } from "../../../vendor/tightenco/ziggy"


export default function Show({producto}) {

    const { delete: destroy } = useForm();
    const route = useRoute();
    const {component} = usePage();

    function submit(e) {
        e.preventDefault();

        destroy(route('productos.destroy', producto));
    }

    return (
        <>
        <Head title={component}/>
            <h1 className="title">Vista de producto</h1>

            <div className="flex items-center justify-center py-4 bg-gray-200">
                <div className="max-w-md w-full rounded-lg shadow-lg bg-white p-6">
                    <h2 className="text-xl font-bold text-gray-900 mb-2">{producto.nombre}</h2>
                    <p className="text-gray-700 mb-4">{producto.descripcion}</p>
                    <div className="flex items-center justify-between mb-4">
                        <span className="text-lg font-semibold text-blue-400">Precio: COP {producto.precio}</span>
                        <span className="text-sm text-gray-500">Cantidad: {producto.cantidad}</span>
                    </div>
                    <div className="flex items-center justify-between mb-4">
                        <Link className="primary-btn" href="/">Regresar al listado</Link>
                        <form onSubmit={submit}>
                            <button className="danger-btn mx-4">Borrar</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}