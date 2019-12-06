import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxsModule } from '@ngxs/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TetiereComponent } from './tetiere/tetiere.component';
import { FooterComponent } from './footer/footer.component';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { RecapComponent } from './recap/recap.component';
import { PhoneNumberPipe } from './phone-number.pipe';
import { ErrorDirective } from './error.directive';
import { ApiService } from './api.service';
import { VueProduitComponent } from './catalogue/vue-produit/vue-produit.component';

import { RouterModule, Routes } from '@angular/router';
import { PanierComponent } from './panier/panier.component';
import { PanierState } from './shared/states/panier-state';
import { DetailComponent } from './catalogue/detail/detail.component';
import { LoginComponent } from './login/login.component';


const appRoutes: Routes = [
  { path: 'vue-produit', component: VueProduitComponent },
  { path: 'formulaire', component: FormulaireComponent },
  { path: 'panier', component: PanierComponent },
  { path: 'detail', component: DetailComponent },
  { path: 'login', component: LoginComponent },
  { path: '',
    redirectTo: '/vue-produit',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    TetiereComponent,
    FooterComponent,
    FormulaireComponent,
    RecapComponent,
    PhoneNumberPipe,
    ErrorDirective,
    VueProduitComponent,
    PanierComponent,
    DetailComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes
    ),
    NgxsModule.forRoot([
      PanierState
    ])
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
