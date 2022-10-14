import { Component, OnInit } from "@angular/core";
import { AdminService } from "src/app/admin.service";
import { BookingM } from "src/app/models/booking.model";

@Component({
    selector: 'app-botable',
    templateUrl:'./botable.component.html'
})
export class BookingTableComponent implements OnInit{
    // btable1:BookingM={
    //     bookingId:'',
    //     passengerId:0,
    //     passengerName:'',
    //     age:0,
    //     gender:'',
    //     flight:0,
    //     flightName:'',
    //     source:'',
    //     destination:'',
    //     departureOn:'',
    //     arrivalOn:'',
    //     ePrice:0,
    //     bPrice:0,
    // }
    btable:BookingM[]=[];
    constructor(private as:AdminService){}
    ngOnInit(): void {
        this.as.getBookingTable().subscribe({
            next: (response)=>{
                console.log(response);
                this.btable=response;
            },
            error: (eresponse)=>{
                console.log(eresponse);
            }
        })
    }

}