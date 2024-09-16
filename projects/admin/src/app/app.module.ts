import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardModule } from 'primeng/card';
import { ShellComponent } from './shared/shell/shell.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { OrdersComponent } from './pages/orders/orders.component';
import { UsersFormComponent } from './pages/users/users-form/users-form.component';
import { UserListComponent } from './pages/users/user-list/user-list.component';
import { CategoriesFormComponent } from './pages/categories/categories-form/categories-form.component';
import { CategoriesListComponent } from './pages/categories/categories-list/categories-list.component';
import { OrdersDetailComponent } from './pages/orders/orders-detail/orders-detail.component';
import { OrdersListComponent } from './pages/orders/orders-list/orders-list.component';
import { ProductListComponent } from './pages/products/product-list/product-list.component';
import { ProductFormComponent } from './pages/products/product-form/product-form.component';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api'; 
import { InputNumberModule } from 'primeng/inputnumber';
import { InputSwitchModule } from 'primeng/inputswitch';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditorModule } from 'primeng/editor';
import { CommonModule } from '@angular/common';
import { FormationListComponent } from './formations/formation-list/formation-list.component';
import { FormationFormComponent } from './formations/formation-form/formation-form.component';
import { EvenementListComponent } from './evenements/evenement-list/evenement-list.component';
import { EvenementFormComponent } from './evenements/evenement-form/evenement-form.component';
import { AtelierListComponent } from './ateliers/atelier-list/atelier-list.component';
import { AtelierFormComponent } from './ateliers/atelier-form/atelier-form.component';
import { UtilisateurListComponent } from './utilisateurs/utilisateur-list/utilisateur-list.component';
import { UtilisateurFormComponent } from './utilisateurs/utilisateur-form/utilisateur-form.component';
import { SousAtelierListComponent } from './sousAteliers/sous-atelier-list/sous-atelier-list.component';
import { SousAtelierFormComponent } from './sousAteliers/sous-atelier-form/sous-atelier-form.component';
import { ArtistListComponent } from './artists/artist-list/artist-list.component';
import { ArtistFormComponent } from './artists/artist-form/artist-form.component';
import { HttpClientModule } from '@angular/common/http';
import { FormationUpdateComponent } from './formations/formation-update/formation-update.component';
import { LoginComponent } from './loginPage/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    ShellComponent,
    SidebarComponent,
    DashboardComponent,
    OrdersComponent,
    UsersFormComponent,
    UserListComponent,
    CategoriesFormComponent,
    CategoriesListComponent,
    OrdersDetailComponent,
    OrdersListComponent,
    ProductListComponent,
    ProductFormComponent,
    FormationListComponent,
    FormationFormComponent,
    EvenementListComponent,
    EvenementFormComponent,
    AtelierListComponent,
    AtelierFormComponent,
    UtilisateurListComponent,
    UtilisateurFormComponent,
    SousAtelierListComponent,
    SousAtelierFormComponent,
    ArtistListComponent,
    ArtistFormComponent,
    FormationUpdateComponent,
    LoginComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    CardModule,
    ToastModule,
    ToolbarModule,
    TableModule,
    ButtonModule,
    ConfirmDialogModule,
    InputNumberModule,
    InputSwitchModule,
    DropdownModule,
    EditorModule,
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
  ],
  providers: [
    provideClientHydration(),
    MessageService,
    ConfirmationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
