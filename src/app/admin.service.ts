import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AdminM } from './models/admin.model';
import { BookingM } from './models/booking.model';
import { FlightM } from './models/flight.model';
import { UserdetailsService } from './services/user.service';


@Injectable({
    providedIn: 'root'
})

export class AdminService{
    adminurl:string=environment.baseApiUrl;

constructor(private http:HttpClient, private uds:UserdetailsService){

}


//to check admin creditentails using post method
checkAdmin(adminlogin:AdminM):Observable<AdminM>{
    adminlogin.adminId="00000000-0000-0000-0000-000000000000";
    return this.http.post<AdminM>(this.adminurl+'/api/admin/adminlogin',adminlogin);
}

//to get admin details by adminname
getingAdminbyAN(urlId:string):Observable<AdminM>{

    return this.http.get<AdminM>(this.adminurl+'/api/admin/adminname?adminname='+urlId);
}

//to get admin details by adminId
getAdminbyId(urlId:string):Observable<AdminM>{
    return this.http.get<AdminM>(this.adminurl+'/api/admin/'+urlId);
}

//to update the admin details
updateAdminDetailsbyId(urlId:string, updateadmin:AdminM):Observable<AdminM>{
    return this.http.put<AdminM>(this.adminurl+'/api/admin/'+urlId,updateadmin);
}

//to get all users from server
getAlladmin():Observable<AdminM[]>{
    return this.http.get<AdminM[]>(this.adminurl+'/api/admin');
}

//to update admin details
addAdmintoDB(register:AdminM):Observable<AdminM>{
    return this.http.post<AdminM>(this.adminurl+'/api/admin',register);
}

//to get data from Booking Tables
getBookingTable():Observable<BookingM[]>{
    return this.http.get<BookingM[]>(this.adminurl+'/api/booking');
}

//to get all Flight in the DB!
getallFlight():Observable<FlightM[]>{
    return this.http.get<FlightM[]>(this.adminurl+'/api/flight');
}

//get Flight by Id from DB!
getFlightbyId(urlId:string):Observable<FlightM>{
    return this.http.get<FlightM>(this.adminurl+'/api/flight/'+urlId);
}

//to add a newly created flight to DB!
addFlight(addflight:FlightM):Observable<FlightM>{
    return this.http.post<FlightM>(this.adminurl+'/api/flight',addflight);
}

//to update flight detaisl whihc is in the DB previously
updateFlightbyId(urlIDforupdate:number, updateflight:FlightM):Observable<FlightM>{
    return this.http.put<FlightM>(this.adminurl+'/api/flight/'+urlIDforupdate,updateflight);
}

//to cancell the booking from the booking table
deleteBooking(bid:string):Observable<BookingM>{
    return this.http.delete<BookingM>(this.adminurl+'/api/booking'+bid);
}

}