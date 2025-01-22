import { Head, Link, usePage } from "@inertiajs/react";
import { useRoute } from "../../../vendor/tightenco/ziggy"
import { useState } from "react";

export default function Home({productos}) {
    const route = useRoute();
    const {component} = usePage();
    const { flash } = usePage().props;

    //Hacer que el mensaje flash desaparezca despues de un tiempo
    const [flashMsg, setFlashMsg] = useState(flash.mensaje);
    setTimeout(() => {
        setFlashMsg(null);
    }, 1500);

    return (
        <>
        <Head title={component} />
            <h1 className="title">Lista de productos</h1>
            {flashMsg && (
                <div className="absolute top-24 right-6 bg-rose-500 p-2 rounded-md shadow-lg text-sm text-white">
                    {flashMsg}
                </div>
            )}
            <table>
                <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Descripción</th>
                    <th>Precio</th>
                    <th>Cantidad</th>
                    <th>Acciones</th>
                </tr>
                </thead>
                <tbody>
                    {productos.data.map(producto => (
                        <tr key={producto.id}>
                            <td>{producto.nombre}</td>
                            <td>{producto.descripcion}</td>
                            <td>COP {producto.precio}</td>
                            <td>{producto.cantidad}</td>
                            <td>
                                <Link 
                                    className="primary-btn"
                                    href={route('productos.show', producto.id)}
                                >Ver
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <div className="py-10 px-4 ">
                {productos.links.map(link => (
                    link.url ? 
                    <Link 
                        href={link.url} 
                        key={link.label} 
                        dangerouslySetInnerHTML={{ __html: link.label }}
                        className={`p-1 mx-1 ${ 
                            link.active ? "text-blue-500 font-bold" : "" 
                        }`}
                    />
                    :
                    <span 
                        href={link.url} 
                        dangerouslySetInnerHTML={{ __html: link.label }}
                        className="p-1 mx-1 text-gray-400"></span>
                ))}
            </div>
        </>
    )
}

