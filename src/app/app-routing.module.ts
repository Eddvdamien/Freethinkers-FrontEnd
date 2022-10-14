import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutusComponent } from './component/dummycomponent/aboutus.component';
import { FeddbackComponent } from './component/dummycomponent/feedback.component';
import { HomeComponent } from './component/home.component';
import { AddAminComponent } from './component/LogIn/admin/addadmin.component';
import { AddFlightComponent } from './component/LogIn/admin/addflight.component';
import { AdminInterfceComponent } from './component/LogIn/admin/admininterface.component';
import { AdminLoginComponent } from './component/LogIn/admin/adminlogin.component';
import { AllAdminComponent } from './component/LogIn/admin/alladmin.component';
import { AllUsersComponent } from './component/LogIn/admin/allusers.component';
import { BookingTableComponent } from './component/LogIn/admin/botable.component';
import { EditUserComponent } from './component/LogIn/admin/edituser.component';
import { FlightListComponent } from './component/LogIn/admin/flightlist.component';
import { ManageAdminComponent } from './component/LogIn/admin/manageadmin.component';
import { ManageFlightComopnent } from './component/LogIn/admin/manageflight.component';
import { BookingComponent } from './component/LogIn/User/booking.component';
//import { UserFLComponent } from './component/LogIn/User/listofflight.component';
import { ManageUserComponent } from './component/LogIn/User/manageuser.component';
import { MyBookingComponent } from './component/LogIn/User/mybooking.component';
import { RegisterComponent } from './component/LogIn/User/register.component';
import { RoundTripComponent } from './component/LogIn/User/roundtrip.component';
import { SearchFlightbyUserComponent } from './component/LogIn/User/searchflight.component';
import { UserInterfaceComponent } from './component/LogIn/User/userinterface.component';
import { UserLoginComponent } from './component/LogIn/User/userlogin.component';

const routes: Routes = [ 

  {path:'home', component: HomeComponent},
  {path:'aboutus', component:AboutusComponent},
  {path:'feedback', component:FeddbackComponent},
  {path: 'userlogin', component:UserLoginComponent},
  {path:'userinterface/:id', component:UserInterfaceComponent, children:[
    {path:'searchflight', component:SearchFlightbyUserComponent},
    {path:'roundtrip', component:RoundTripComponent},
    {path:'booking/:t1/:t2/:pa/:pc/:pi/:cl', component:BookingComponent},
    {path:'mybooking', component:MyBookingComponent}
    
  ]},
  {path:'adminlogin', component:AdminLoginComponent},
  {path:'ai/:id', component:AdminInterfceComponent, children:[
    {path:'alladmin', component:AllAdminComponent},
    {path:'alluser',component:AllUsersComponent, children:[
      {path:'edituser/:id1', component:EditUserComponent}
    ]},
    {path:'addadmin', component:AddAminComponent},
    {path:'booking', component:BookingTableComponent},
    {path:'addflight', component:AddFlightComponent},
    {path:'flightlist', component:FlightListComponent},
    {path:'manageflight', component:ManageFlightComopnent},
    {path:'flightlist/manageflight/:aid',component:ManageFlightComopnent}
  ]
},

  {path:'register', component:RegisterComponent},
  {path:'usermanage/:id', component:ManageUserComponent},
  {path:'adminmanage/:id', component:ManageAdminComponent},




  {path:'**', component:AboutusComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
