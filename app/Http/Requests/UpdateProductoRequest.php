<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateProductoRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'nombre' => 'required|string|max:100',
            'descripcion' => 'required|string|max:600',
            'precio' => 'required|numeric|min:1.00|max:1000000.00',
            'cantidad' => 'required|integer|min:1|max:150'
        ];
    }

    public function messages()
    {
        return [
            'nombre.required' => 'El nombre del producto es requerido',
            'descripcion.required' => 'La descripción del producto es requerida',
            'precio.min' => 'El precio minimo del producto es 1.00',
            'precio.max' => 'El precio máximo del producto es de 1000000.00',
            'cantidad.required' => 'Se debe ingresar la cantidad en inventario',
            'cantidad.min' => 'La cantidad mínima es de 1 ítem',
            'cantidad.max' => 'La máxima capacidad en almacenamiento es de 150 ítems'
        ];
    }
}
