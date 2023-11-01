import { Component } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  // Otras propiedades y métodos...

  // Propiedad para mantener un índice de la imagen actual
  currentImageIndex: number = 0;

  // Array con las rutas de las imágenes
  imageSources: string[] = [
    '../../../../assets/images/home1.png',
    '../../../../assets/images/home2.png',
    // Agrega más rutas de imágenes aquí
  ];

  // Función para mostrar la imagen anterior
  previousImage() {
    if (this.currentImageIndex > 0) {
      this.currentImageIndex--;
    } else {
      // Si estamos en la primera imagen, retroceder al final del array
      this.currentImageIndex = this.imageSources.length - 1;
    }
  }

  nextImage() {
    if (this.currentImageIndex < this.imageSources.length - 1) {
      this.currentImageIndex++;
    } else {
      // Si estamos en la última imagen, avanzar al principio del array
      this.currentImageIndex = 0;
    }
  }

}
