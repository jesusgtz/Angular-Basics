import { Component } from '@angular/core';

@Component({
	selector: 'videojuegos',
	templateUrl: './videojuego.component.html'
})

export class VideojuegosComponent{
	nombre:string;
	mejor_juego:string;
	mejor_juego_retro:string;
	mostrar_retro:boolean;
	//year:number = 2019

	videojuegos:Array<String>;

	constructor() {
		this.nombre = 'Videojuegos';
		this.mejor_juego = 'FIFA';
		this.mejor_juego_retro = 'SuperMario 64';
		this.mostrar_retro = true;
		this.videojuegos  = [
			'Los Simpson',
			'Halo',
			'GTA',
			'Call of Duty',
			'Galaga'
		];
	}
}
