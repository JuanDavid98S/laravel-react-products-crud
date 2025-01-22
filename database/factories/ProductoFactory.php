<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Producto>
 */
class ProductoFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'nombre' => fake()->text(30),
            'descripcion' => fake()->text(150),
            'precio' => fake()->randomFloat(2, 10000, 600000),
            'cantidad' => fake()->numberBetween(0, 100)
        ];
    }
}
