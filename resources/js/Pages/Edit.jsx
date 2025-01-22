import { Head, useForm } from "@inertiajs/react";
import { useRoute } from "../../../vendor/tightenco/ziggy";


export default function Edit({producto}) {
    const route = useRoute();

    const { data, setData, put, errors, processing } = useForm({
        nombre: producto.nombre,
        descripcion: producto.descripcion,
        precio: producto.precio,
        cantidad: producto.cantidad
    });

    function submit(e) {
        e.preventDefault();
        put(route('productos.update', producto));
    }

    return (
        <>
            <Head title="Actualizar un producto" />

            <h1 className="title">Actualizar el producto</h1>

            <div className="w-1/2 mx-auto">
                <form onSubmit={submit}>
                    <label>Nombre</label>
                    <input type="text" 
                        value={data.nombre}
                        onChange={(e) => setData('nombre', e.target.value)}
                        className={errors.nombre && '!ring-red-500'}
                    />
                    {errors.nombre && <p className="error my-2">{errors.nombre}</p>}

                    <label>Descripcion</label>
                    <textarea rows="6" 
                        value={data.descripcion}
                        onChange={(e) => setData('descripcion', e.target.value)}
                        className={errors.descripcion && '!ring-red-500'}
                    ></textarea>
                    {errors.descripcion && <p className="error my-2">{errors.descripcion}</p>}

                    <label>Precio</label>
                    <input type="number" 
                        value={data.precio}
                        onChange={(e) => setData('precio', e.target.value)} 
                    />
                    {errors.precio && <p className="error my-2">{errors.precio}</p>}

                    <label>Cantidad</label>
                    <input type="number" 
                        value={data.cantidad}
                        onChange={(e) => setData('cantidad', e.target.value)} 
                    />
                    {errors.cantidad && <p className="error my-2">{errors.cantidad}</p>}

                    <button 
                        className="primary-btn mt-4"
                        disabled={processing}
                    >Actualizar Producto</button>
                </form>
            </div>
        </>
    )
}