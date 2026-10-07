import { ChangeDetectorRef, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommerceService } from '../commerce-service';
import { finalize } from 'rxjs';


@Component({
  imports: [CommonModule ],
  selector: 'app-formulario-commerce',
  styleUrl: './formulario-commerce.css',
  templateUrl: './formulario-commerce.html',
})
export class FormularioCommerce {

 archivoSeleccionado: File | null = null;

  mensaje = '';

  cargando = false;

  constructor(
    private commerceService: CommerceService,
    private changeDetector: ChangeDetectorRef
  ) {}

  seleccionarArchivo(event: Event): void {

    const input = event.target as HTMLInputElement;

    if (input.files && input.files.length > 0) {
      this.archivoSeleccionado = input.files[0];
      this.mensaje = '';
    }
  }

 subirArchivo(): void {

  if (!this.archivoSeleccionado) {
    this.mensaje = 'Debe seleccionar un archivo CSV.';
    return;
  }

  console.log('1. ENVIANDO ARCHIVO');

  this.cargando = true;
  this.mensaje = 'Subiendo...';

  this.commerceService.subirArchivo(this.archivoSeleccionado)
    .pipe(finalize(() => {
      this.cargando = false;
      this.changeDetector.markForCheck();
    }))
    .subscribe({
      next: (respuesta) => {

        console.log('2. RESPUESTA RECIBIDA');
        console.log(respuesta);

        this.mensaje = 'Archivo procesado correctamente';
        this.changeDetector.markForCheck();
      },

      error: (error) => {

        console.log('3. ERROR');
        console.error(error);

        this.mensaje = 'Error al procesar el archivo';
        this.changeDetector.markForCheck();
      }
    });
}
}
