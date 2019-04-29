import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DatePipe} from '@angular/common';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//COMPONENTS
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { CarroComponent } from './components/carro/carro.component';
//SERVICES
import { RepositoryService } from './services/repository.service';
import { ProductService } from './services/product.service';
import { GlobalService } from './services/global.service';
import { LoginComponent } from './components/login/login.component';
//LIBRERIAS
import { NouisliderModule } from 'ng2-nouislider';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { PurchaseConfirmationSpanishComponent } from './components/purchase-confirmation/purchase-confirmation-spanish/purchase-confirmation-spanish.component';
import { PurchaseConfirmationEnglishComponent } from './components/purchase-confirmation/purchase-confirmation-english/purchase-confirmation-english.component';
import { PurchaseConfirmationPortugueseComponent } from './components/purchase-confirmation/purchase-confirmation-portuguese/purchase-confirmation-portuguese.component';
import { AdminComponent } from './components/admin/admin.component';
import { AdminAddComponent } from './components/admin-add/admin-add.component';
import { AdminUpdateComponent } from './components/admin-update/admin-update.component';


const appRoutes: Routes = [
  { path: 'header', component: HeaderComponent },
  { path: 'login',      component: LoginComponent },
  { path: 'main',      component: MainComponent },
  { path: 'detail',      component: ProductDetailComponent },
  { path: 'carro',      component: CarroComponent },
  { path: 'admin',      component: AdminComponent },
  { path: 'admin-add',      component: AdminAddComponent },
  { path: '',
    redirectTo: '/mian',
    pathMatch: 'full'
  },
  { path: '**', component: MainComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    ProductDetailComponent,
    CarroComponent,
    LoginComponent,
    PurchaseConfirmationSpanishComponent,
    PurchaseConfirmationEnglishComponent,
    PurchaseConfirmationPortugueseComponent,
    AdminComponent,
    AdminAddComponent,
    AdminUpdateComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule,
    NouisliderModule,
    AngularFontAwesomeModule,
    BrowserAnimationsModule
  ],
  providers: [
    RepositoryService,
    ProductService,
    GlobalService,
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
