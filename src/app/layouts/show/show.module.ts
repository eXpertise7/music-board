import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ShowRoutingModule} from './show.routing.module';
import {ShowListComponent} from './list/show-list.component';
import {CreateShowComponent} from './create/create-show.component';
import {ShowComponent} from './show.component';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {CalendarModule} from 'primeng/calendar';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
    declarations: [
        ShowComponent,
        CreateShowComponent,
        ShowListComponent
    ],
    imports     : [
        CommonModule,
        ShowRoutingModule,
        ButtonModule,
        InputTextModule,
        CalendarModule,
        FormsModule,
        ReactiveFormsModule
    ],
    providers   : []
})
export class ShowModule {
}
