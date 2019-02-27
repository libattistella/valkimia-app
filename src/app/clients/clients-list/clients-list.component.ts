import { Component, OnInit, OnDestroy } from '@angular/core';
import { ClientsService } from '../clients.service';
import { ClientModel } from '../clients.model';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-clients-list',
  templateUrl: './clients-list.component.html',
  styleUrls: ['./clients-list.component.css']
})
export class ClientsListComponent implements OnInit, OnDestroy {

  private headElements = ['Documento', 'Apellido', 'Nombre', 'Telefono', 'Direccion', 'Estado'];
  private clients: ClientModel[] = [];
  private subscription: Subscription;

  constructor(private clientsSvc: ClientsService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.subscription = this.clientsSvc.clientsChanged.subscribe(
      (clients: ClientModel[]) => {
        this.clients = clients;
      }
    );
    this.clientsSvc.fetchClients().subscribe((clients: ClientModel[]) => {
      this.clients =  this.clientsSvc.getClients();
      console.log(this.clients);
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onAddClient() {
    this.router.navigate(['add', {data: null}], {relativeTo: this.route});
  }

  onEditClient(index: number) {
    console.log('editing', index);
    this.router.navigate(['add', index], {relativeTo: this.route});
  }

  onDeleteClient(index: number) {
    this.clientsSvc.deleteClient(index);
  }

}
