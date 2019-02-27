import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ClientNewComponent } from './client-new/client-new.component';
import { ClientsComponent } from './clients.component';
import { ClientsListComponent } from './clients-list/clients-list.component';

const clientsRoutes: Routes = [
  { path: '', component: ClientsComponent, children: [
      { path: '', component: ClientsListComponent },
      { path: 'add', component: ClientNewComponent },
      { path: 'add/:id', component: ClientNewComponent }
    ]}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(clientsRoutes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class ClientsRoutingModule { }
