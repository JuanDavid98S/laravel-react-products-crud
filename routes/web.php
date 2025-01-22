<?php

use App\Http\Controllers\ProductoController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', [ProductoController::class, 'index']);

Route::resource('productos', ProductoController::class)->except('index');
