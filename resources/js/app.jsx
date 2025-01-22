import './bootstrap';
import '../css/app.css';

import { createInertiaApp } from '@inertiajs/react'
import { createRoot } from 'react-dom/client'
import Layout from '@/Layouts/Layout';

createInertiaApp({
  resolve: name => {
    const pages = import.meta.glob('./Pages/**/*.jsx', { eager: true })
    //No se tiene que llamar a la ruta completa al usar el estatico de Inertia::render gracias a esta configuracion
    //Ademas, se define el layout para la consistencia de los estilos de la app
    let page = pages[`./Pages/${name}.jsx`];
    page.default.layout = page.default.layout || ((page) => <Layout children={page} />);

    return page;
  },
  //Crear la aplicacion react con la funcion createRoot
  setup({ el, App, props }) {
    createRoot(el).render(<App {...props} />)
  },
  progress: {
    color: 'white',
    delay: 100,
  }
})