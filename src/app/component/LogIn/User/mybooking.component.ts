import { Component, OnInit, DoCheck,OnDestroy, OnChanges, SimpleChanges } from "@angular/core";
import { Router } from "@angular/router";
import { Subscription } from "rxjs";
import { BookingM } from "src/app/models/booking.model";
import { Cancellation } from "src/app/models/cancellation.model";
import { CustomerM } from "src/app/models/customer.model";
import { UserdetailsService } from "src/app/services/user.service";

@Component({
    selector:'app-mybooking',
    templateUrl:'./mybooking.component.html'
})
export class MyBookingComponent implements OnInit, DoCheck
, OnChanges{
    username:string='';
    userdetails:CustomerM={
        userId: 0,
        userName:'',
        fullName:'',
        emailId:'',
        gender:'',
        age:0,
        phone:0,
        password:''
    };
    userID:number=0;
    bookinghistory:BookingM[]=[];
    destroy:Subscription;
    bhtable:boolean=false;
    cancelrequest:Cancellation={
        bookingid:''
    }
    cancereq:boolean=false;
    constructor(private uds:UserdetailsService, private route:Router){ 
       
    }
    ngOnChanges(changes: SimpleChanges): void {
    
    
  
    console.log(changes);
    }
ngOnInit(): void {
    this.username=this.route.url.split('/')[2];
    console.log(this.username);    
    this.uds.getingUserbyUN(this.username).subscribe({
        next:(response)=>{
            console.log(response);
            this.userdetails=response;
            this.userID=response.userId;
        }, error:(response)=>{
            console.log(response);
        }
    }) ; 
    console.log(this.userdetails.userId);
    
    console.log(this.userID);   
}
ngDoCheck(): void {
   // this.destroy=
}

ontoloadHistory(){
    this.bhtable=true;
    this.uds.bookinghistory(this.userID).subscribe({
        next:(response)=>{
            console.log(response);
            this.bookinghistory=response;
         },
        error: (respones)=>{
        console.log(respones);
        }
    });
}
onCancellation(bid:string){
    alert("Request has been send to Admin");
    this.cancereq=true;
this.cancelrequest.bookingid=bid;
    this.uds.cancellation.emit(this.cancelrequest);
}

}