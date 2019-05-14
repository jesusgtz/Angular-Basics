import { Component } from '@angular/core';

@Component({
	selector: 'videojuegos',
	templateUrl: './videojuego.component.html'
})

export class VideojuegosComponent{
	nombre = 'Videojuegos';
	mejor_juego = 'FIFA';
	mejor_juego_retro = 'SuperMario 64';
	mostrar_retro = true;

	videojuegos = [
		'Los Simpson',
		'Halo',
		'GTA',
		'Call of Duty',
		'Galaga'
	];
}
