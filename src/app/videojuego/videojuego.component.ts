import { Component } from '@angular/core';

@Component({
	selector: 'videojuegos',
	template: `
	<h2>Componente videojuego</h2>
	<h3 *ngIf="mostrar_retro != true">El mejor juego es: {{ mejor_juego }}</h3>
	<h3 [style.background]="'red'" *ngIf="mostrar_retro">El mejor juego es: {{ mejor_juego_retro }}</h3>
	`
})
export class VideojuegosComponent{
	nombre = 'Videojuegos';
	mejor_juego = 'FIFA';
	mejor_juego_retro = 'SuperMario 64';
	mostrar_retro = true;
}
