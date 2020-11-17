import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {ShowComponent} from './show.component';
import {ShowListComponent} from './list/show-list.component';
import {CreateShowComponent} from './create/create-show.component';

const routes: Routes = [
    {
        path     : '',
        component: ShowComponent,
        children : [
            {
                path     : 'list',
                component: ShowListComponent
            },
            {
                path     : 'create',
                component: CreateShowComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ShowRoutingModule {
}
