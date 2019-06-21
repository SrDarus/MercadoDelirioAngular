import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DatePipe} from '@angular/common';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//COMPONENTS
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { AdminComponent } from './components/admin/admin.component';
import { ProductosComponent } from './components/productos/productos.component';
import { TipoProductoComponent } from './components/tipoProducto/tipoProducto.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { CarroComponent } from './components/carro/carro.component';
//SERVICES
import { RepositoryService } from './services/repository.service';
import { TipoProductoService } from './services/tipoProducto.service';
import { ProductService } from './services/product.service';
import { GenericoService } from './services/generico.service';
import { GlobalService } from './services/global.service';
import { UserService } from './services/user.service'

//LIBRERIAS
import { NouisliderModule } from 'ng2-nouislider';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { PurchaseConfirmationSpanishComponent } from './components/purchase-confirmation/purchase-confirmation-spanish/purchase-confirmation-spanish.component';
import { PurchaseConfirmationEnglishComponent } from './components/purchase-confirmation/purchase-confirmation-english/purchase-confirmation-english.component';
import { PurchaseConfirmationPortugueseComponent } from './components/purchase-confirmation/purchase-confirmation-portuguese/purchase-confirmation-portuguese.component';
import { RegistrousuarioComponent } from './components/registrousuario/registrousuario.component';


const appRoutes: Routes = [
  { path: 'header', component: HeaderComponent },
  { path: 'login',      component: LoginComponent },
  { path: 'main',      component: MainComponent },
  { path: 'detail',      component: ProductDetailComponent },
  { path: 'carro',      component: CarroComponent },
  { path: 'admin',      component: AdminComponent },
  { path: 'tipoProductos',      component: TipoProductoComponent },
  { path: 'productos',      component: ProductosComponent },
  { path: 'registrousuario',    component: RegistrousuarioComponent},
  { path: '',
    redirectTo: '/main',
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
    TipoProductoComponent,
    ProductosComponent,
    RegistrousuarioComponent
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
    GenericoService,
    ProductService,
    TipoProductoService,
    GlobalService,
    UserService,
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
