export default function Home({productos}) {
    return (
        <>
            <h1 className="title">Hola</h1>

            <div>
                {productos.map(producto => (
                    <div key={producto.id} className="p-4 border-b">
                        <div className="text-sm text-gray-500">
                            <span>Creado el: </span>
                            <span>{ new Date(producto.created_at).toLocaleString() }</span>
                        </div>
                        <p className="font-medium">{producto.nombre}</p>
                    </div>
                ))}
            </div>
        </>
    )
}

