import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-historial',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.css']
})
export class HistorialComponent {
  filtroMatricula: string = '';
  filtroFolio: string = '';

  historial = [
    { fecha: '2025-04-30', usuario: 'A001', operador: '1234567', folio: 'F123' },
    { fecha: '2025-04-29', usuario: 'S001', operador: '9878789', folio: 'F456' },
    { fecha: '2025-04-28', usuario: 'U001', operador: '8972347', folio: 'F789' }
  ];

  historialFiltrado() {
    return this.historial.filter(item =>
      item.usuario.toLowerCase().includes(this.filtroMatricula.toLowerCase()) &&
      item.folio.toLowerCase().includes(this.filtroFolio.toLowerCase())
    );
  }
}


