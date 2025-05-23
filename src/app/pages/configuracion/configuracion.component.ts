import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuariosComponent } from '../usuarios/usuarios.component';
import { VehiculoComponent } from '../vehiculo/vehiculo.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-configuraciones',
  standalone: true,
  imports: [CommonModule, FormsModule, UsuariosComponent, VehiculoComponent],
  templateUrl: './configuracion.component.html',
  styleUrls: ['./configuracion.component.css']
})
export class ConfiguracionComponent {
  seccionActiva: string = 'usuarios';

  mostrarFormularioUsuario: boolean = false;
  mostrarFormularioVehiculo: boolean = false;

  nuevoUsuario = {
    nombre: '',
    matricula: '',
    curp: '',
    rfc: '',
    tipo:'',
    asignacion:''
  };

  nuevoVehiculo = {
    tipo: '',
    placas: '',
    modelo: '',
    ecco: '',
    actualKilometraje: '',
    proximoServicio:''
  };

  cambiarSeccion(seccion: string) {
    this.seccionActiva = seccion;
    this.mostrarFormularioUsuario = false;
    this.mostrarFormularioVehiculo = false;
  }

  agregarUsuario() {
    this.mostrarFormularioUsuario = true;
  }

  guardarUsuario() {
    console.log('Usuario guardado:', this.nuevoUsuario);
    this.nuevoUsuario = { nombre: '', matricula: '', curp: '', rfc: '',tipo:'',asignacion:'' };
    this.mostrarFormularioUsuario = false;
  }

  agregarVehiculo() {
    this.mostrarFormularioVehiculo = true;
  }

  guardarVehiculo() {
    console.log('Vehículo guardado:', this.nuevoVehiculo);
    this.nuevoVehiculo = { tipo: '', placas: '', modelo: '', ecco: '', actualKilometraje: '',proximoServicio:'' };
    this.mostrarFormularioVehiculo = false;
  }
}
