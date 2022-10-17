import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { BookingM } from '../models/booking.model';
import { Cancellation } from '../models/cancellation.model';

import { CustomerM } from '../models/customer.model';
import { FlightM } from '../models/flight.model';
import { PassengerM } from '../models/passenger.model';
import{SearchFlight} from '../models/searchflight.model';

@Injectable({
  providedIn: 'root'
})
export class UserdetailsService {

  usersUrl: string = environment.baseApiUrl;
  searchs:SearchFlight[]=[];

  constructor(private http:HttpClient) { }


  //a method to call the entire table from the DB 
  getAllUsers(): Observable<CustomerM[]>{
    return this.http.get<CustomerM[]>(this.usersUrl+'/api/user');
  }

  //to add an element to the serrver from UI 
  addUserstoDB(registerUser:CustomerM):Observable<CustomerM>{
   return this.http.post<CustomerM>(this.usersUrl+'/api/user', registerUser);
  }

  //a method to call a element from the db using id
  getUserbyId(tourlid:string):Observable<CustomerM>{
    return this.http.get<CustomerM>(this.usersUrl+'/api/user/'+tourlid);
  }

  //a method to post or update the edited single user called by usedId method 
  updateSingleUserdetails(updateurlId:number, updateUserED:CustomerM):Observable<CustomerM>{
    return this.http.put<CustomerM>(this.usersUrl+'/api/user/'+updateurlId, updateUserED);
  } 

  //to delete the user details from DB 
  deleteUserdetails(deleteurlId:number):Observable<CustomerM>{
    return this.http.delete<CustomerM>(this.usersUrl+'/api/user/'+deleteurlId);
  }

  //to verify login creditential using username by get method
  /* the wrong method to call get to process the request
  checkUserName(username1:string):Observable<Users>{
    return this.http.get<Users>(this.usersUrl+'/api/users/'+username1);
  }*/
  //after 2 days found that its a post method
  getingUserbyUN(urlid:string):Observable<CustomerM>{
    
    return this.http.get<CustomerM>(this.usersUrl+'/api/user/username?username='+urlid);
  }
  //user login verification
  checkUserName(logincreditentials:CustomerM):Observable<CustomerM>{
    return this.http.post<CustomerM>(this.usersUrl+'/api/user/logincreditentials', logincreditentials);
  }

  //searchflight
  searchflight(source:string, destination:string,dd:Date):Observable<FlightM[]>{
    return this.http.get<FlightM[]>(this.usersUrl+'/api/flight/search?source='+source+'&destination='+destination+'&dd='+dd);
  }
// getflightlist(id:number,search:FlightM):Observable<FlightM[]>{
//   return this.http.get<FlightM[]>(this.usersUrl+'/api/flight/grft/'+id,search);
// }
  
//getting fligths by ID
getflightbyID(id:number):Observable<FlightM>{
  return this.http.get<FlightM>(this.usersUrl+'/api/flight/'+id);
}

//to push booking details to server
createabooking( boo:BookingM):Observable<BookingM>{
  boo.bookingID="00000000-0000-0000-0000-000000000000";
  return this.http.post<BookingM>(this.usersUrl+'/api/booking',boo);
}

//to get user history
bookinghistory(uid:number):Observable<BookingM[]>{
 return this.http.get<BookingM[]>(this.usersUrl+'/api/booking/uid?userId='+uid);
}

//user rises a cancelation request to admin using services 



cancelationrequest(cancelrequest:PassengerM){
  return this.http.post<PassengerM>(this.usersUrl+'/api/passenger',cancelrequest);
}
cancellationGet():Observable<PassengerM[]>{
  return this.http.get<PassengerM[]>(this.usersUrl+'/api/passenger');
}

}
