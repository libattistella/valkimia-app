import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ClientsService } from '../clients.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-client-new',
  templateUrl: './client-new.component.html',
  styleUrls: ['./client-new.component.css']
})
export class ClientNewComponent implements OnInit {

  clientForm: FormGroup;
  private editMode = false;
  private id = null;

  constructor(private clientSvc: ClientsService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.initForm();
  }

  private initForm() {

    let documento = null;
    let nombre = null;
    let apellido = null;
    let telefono = null;
    let direccion = null;
    let estado = 1;

    if (this.route.snapshot.params.documento) {
      this.editMode = true;
      this.id = this.route.snapshot.params.documento;
      documento = this.route.snapshot.params.documento;
      nombre = this.route.snapshot.params.nombre;
      apellido = this.route.snapshot.params.apellido;
      telefono = this.route.snapshot.params.telefono;
      direccion = this.route.snapshot.params.direccion;
      estado = this.route.snapshot.params.estado;
    }

    this.clientForm = new FormGroup({
      documento: new FormControl(documento, Validators.required),
      apellido: new FormControl(apellido, Validators.required),
      nombre: new FormControl(nombre, Validators.required),
      telefono: new FormControl(telefono, Validators.required),
      direccion: new FormControl(direccion, Validators.required),
      estado: new FormControl(estado, Validators.required)
    });
  }

  onSubmit() {
    if (this.editMode) {
      console.log(this.clientForm.value);
      this.clientSvc.editClient(this.clientForm.value, this.id);
    } else {
      console.log(this.clientForm.value);
      this.clientSvc.addClient(this.clientForm.value);
    }
    this.onCancel();
  }

  onCancel() {
    this.router.navigate(['../', { relativeTo: this.route}]);
  }

}
