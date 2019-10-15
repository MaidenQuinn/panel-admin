import { CreerClientComponent } from './creer-client/creer-client.component';
import { ListeClientsComponent } from './liste-clients/liste-clients.component';
import { ClientsComponent } from './clients.component';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [
        CreerClientComponent,
        ListeClientsComponent,
        ClientsComponent
    ],
    imports: [
        SharedModule,
    ],
    exports: [
    ],
    providers: []
})
export class ClientsModule { }
