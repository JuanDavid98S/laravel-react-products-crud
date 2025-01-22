import { useForm } from "@inertiajs/react"

export default function Create() {

    const { data, setData, post, errors, processing } = useForm({
        nombre: "",
        descripcion: "",
        precio: 0,
        cantidad: 0
    });

    function submit(e) {
        e.preventDefault();
        post("/productos");
    }

    return (
        <>
            <h1 className="title">Crear un producto</h1>

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
                    >Crear Producto</button>
                </form>
            </div>
        </>
    )
}