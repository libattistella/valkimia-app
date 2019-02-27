import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientsRoutingModule } from './clients-routing.module';
import { ClientNewComponent } from './client-new/client-new.component';
import { ClientsListComponent } from './clients-list/clients-list.component';
import { ClientsComponent } from './clients.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EstadoPipe } from './estado.pipe';

@NgModule({
  declarations: [
    ClientsComponent,
    ClientsListComponent,
    ClientNewComponent,
    EstadoPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ClientsRoutingModule
  ]
})
export class ClientsModule { }
