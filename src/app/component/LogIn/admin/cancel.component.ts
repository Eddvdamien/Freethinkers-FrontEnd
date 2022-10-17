import { Component, OnInit } from "@angular/core";
import { AdminService } from "src/app/admin.service";
import { PassengerM } from "src/app/models/passenger.model";
import { UserdetailsService } from "src/app/services/user.service";

@Component({
    selector: 'app-cancel',
    templateUrl:'./cancel.comopnent.html'
})

export class CancelBRComponent implements OnInit{


    cancelBId:PassengerM[]=[];

    constructor(
        private uds:UserdetailsService,
        private as:AdminService
    ){ this.uds.cancellationGet().subscribe({
        next: (response)=>{
            //alert('Cancellation request from booking Id'+ response);
            this.cancelBId=response;
            console.log(response);
    }});
}
ngOnInit(): void {
    
}


    cancellationApproved(cancell:string, crid:number){
        this.as.deleteBooking(cancell).subscribe({
            next:(response)=>{
                alert('Booking Cancelled');
                // this.route.navigate(['/ai/',this.urlid]);
            },
            error:(response)=>{
                console.log(response);
            }
            })
            this.as.deletecancelrequest(crid).subscribe({
                next:(response)=>{
                    console.log(response);
                }
            })
        }
        deletecancelrequest(crid:number){
            this.as.deletecancelrequest(crid).subscribe({
                next: (response)=>{
                    alert('cancellation request is declined for '+response.passengerName);
                    // this.route.navigate(['/ai/',this.urlid]);
                }
            });
            
        }
        
}
