<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreProductoRequest;
use App\Http\Requests\UpdateProductoRequest;
use App\Models\Producto;
use Illuminate\Http\Request;

class ProductoController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $productos = Producto::latest()->paginate(6);

        return inertia('Home', ['productos' => $productos]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return inertia('Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreProductoRequest $request)
    {
        Producto::create($request->all());

        return redirect('/')->with(
            'mensaje', 
            'Producto creado de forma exitosa'
        );
    }

    /**
     * Display the specified resource.
     */
    public function show(Producto $producto)
    {
        return inertia('Show', ['producto' => $producto]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Producto $producto)
    {
        return inertia('Edit', ['producto' => $producto]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateProductoRequest $request, Producto $producto)
    {
        $producto->update($request->all());

        return redirect('/')->with(
            'mensaje', 
            'Producto actualizado de forma exitosa'
        );
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Producto $producto)
    {
        $producto->delete();

        return redirect("/")->with(
            'mensaje', 
            'Producto eliminado de forma exitosa'
        );
    }
}
