import { Head, Link } from "@inertiajs/react";

export default function Layout({ children }) {
    return (
        <>
            <header>
                <nav>
                    <Link className="nav-link" href="/">Inicio</Link>
                    <Link className="nav-link" href="/productos/create">Crear Producto</Link>
                </nav>
            </header>

            <main>
                {children}
            </main>
        </>
    )
}