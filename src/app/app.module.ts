import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from '../environments/environment';
import {AngularFireModule} from '@angular/fire';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {HttpService} from './shared/services/http-service';
import {SharedModule} from './shared/shared.module';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
    declarations: [AppComponent],
    imports     : [
        BrowserModule,
        AppRoutingModule,
        SharedModule,
        NgbModule,
        HttpClientModule,
        BrowserAnimationsModule,
        AngularFireModule.initializeApp(environment.firebaseConfig, 'musicBoard'),
        AngularFirestoreModule,
        StoreDevtoolsModule.instrument({
            name   : 'scout-ui-exercise',
            logOnly: environment.production,
        }),
    ],
    providers   : [
        HttpService
    ],
    bootstrap   : [AppComponent],
})
export class AppModule {
}
