import { Injectable } from '@angular/core';
import { ClientsModule } from './clients.module';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Observable, throwError, Subject } from 'rxjs';
import { ClientModel } from './clients.model';


@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  clientsChanged = new Subject<ClientModel[]>();
  private clients: any[] = [
    {
      documento: 123456789,
      apellido: 'Izan',
      nombre: 'Allan',
      direccion: 'Dirección 1',
      telefono: 56484213,
      estado: 1
    },
    {
      documento: 8712356489,
      apellido: 'Vera',
      nombre: 'Rigoberto',
      direccion: 'Dirección 2',
      telefono: 15641231651,
      estado: 1
    },
    {
      documento: 51556235435,
      apellido: 'Quito',
      nombre: 'Elta',
      direccion: 'Dirección 3',
      telefono: 564894123,
      estado: 0
    },
    {
      documento: 56135155,
      apellido: 'Hina',
      nombre: 'Edwin',
      direccion: 'Dirección 4',
      telefono: 1003505363,
      estado: 0
    }
  ];

  constructor(private http: HttpClient) {
  }

  fetchClients() {
    return this.http.get('http://www.mocky.io/v2/5c64a4053300005500b99924').pipe(map(
      (response) => {
        return response;
      },
      (err) => {
        console.log('err', err);
        return err;
      }), catchError(
        (err) => {
          console.log('catch', err);
          return throwError(err);
        }));
  }

  getClients() {
    return this.clients.slice();
  }

  addClient(client: ClientModel) {
    this.clients.push(client);
    this.clientsChanged.next(this.clients.slice());
  }

  editClient(client: ClientModel, id: string) {

    console.log('id', id);
    const clientIndex = this.clients.findIndex(c => {
      return c.documento == id;
    });

    this.clients[clientIndex] = client;
    this.clientsChanged.next(this.clients.slice());
  }

  deleteClient(index: number) {
    this.clients.splice(index, 1);
    this.clientsChanged.next(this.clients.slice());
  }

}
