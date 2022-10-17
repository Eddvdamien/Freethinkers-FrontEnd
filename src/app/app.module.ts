import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutusComponent } from './component/dummycomponent/aboutus.component';
import { FeddbackComponent } from './component/dummycomponent/feedback.component';
import { HomeComponent } from './component/home.component';
import { UserInterfaceComponent } from './component/LogIn/User/userinterface.component';
import { AdminLoginComponent } from './component/LogIn/admin/adminlogin.component';
import { UserLoginComponent } from './component/LogIn/User/userlogin.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AdminInterfceComponent } from './component/LogIn/admin/admininterface.component';
import { RegisterComponent } from './component/LogIn/User/register.component';
import { ManageUserComponent } from './component/LogIn/User/manageuser.component';
import { ManageAdminComponent } from './component/LogIn/admin/manageadmin.component';
import { AllAdminComponent } from './component/LogIn/admin/alladmin.component';
import { AllUsersComponent } from './component/LogIn/admin/allusers.component';
import { EditUserComponent } from './component/LogIn/admin/edituser.component';
import { AddAminComponent } from './component/LogIn/admin/addadmin.component';
import { BookingTableComponent } from './component/LogIn/admin/botable.component';
import { AddFlightComponent } from './component/LogIn/admin/addflight.component';
import { FlightListComponent } from './component/LogIn/admin/flightlist.component';
import { ManageFlightComopnent } from './component/LogIn/admin/manageflight.component';
import { SearchFlightbyUserComponent } from './component/LogIn/User/searchflight.component';
import { RoundTripComponent } from './component/LogIn/User/roundtrip.component';
import { BookingComponent } from './component/LogIn/User/booking.component';
import { MyBookingComponent } from './component/LogIn/User/mybooking.component';
//import { UserFLComponent } from './component/LogIn/User/listofflight.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutusComponent,
    FeddbackComponent,
    UserLoginComponent,   
    UserInterfaceComponent,
    AdminLoginComponent,
    AdminInterfceComponent,
    RegisterComponent,
    ManageUserComponent,
    ManageAdminComponent,
    AllAdminComponent,
    AllUsersComponent,
    EditUserComponent,
    AddAminComponent,
    BookingTableComponent,
    AddFlightComponent,
    FlightListComponent,
    ManageFlightComopnent,
    SearchFlightbyUserComponent,
    RoundTripComponent,
    BookingComponent,
    MyBookingComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
