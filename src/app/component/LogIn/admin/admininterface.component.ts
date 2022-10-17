import { Component, OnInit, OnDestroy } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Subscription } from "rxjs";
import { AdminService } from "src/app/admin.service";
import { AdminM } from "src/app/models/admin.model";
import { Cancellation } from "src/app/models/cancellation.model";
import { PassengerM } from "src/app/models/passenger.model";
import { UserdetailsService } from "src/app/services/user.service";

@Component({
    selector:'app-ai',
    templateUrl:'./admininterface.component.html'
})
export class AdminInterfceComponent implements OnInit, OnDestroy{
    admininfo:AdminM={
        adminId:'',
        adminName:'',
        fullName:'',
        age:0,
        gender:'',
        emailId:'',
        phone:0,
        password:''
    };
    destroy:Subscription;
    urlid:string;
    
    cancelBId:PassengerM[]=[];

    constructor(
        private as: AdminService,
        private ar: ActivatedRoute,
        private route: Router,
        private uds:UserdetailsService
    ){
        this.uds.cancellationGet().subscribe({
            next: (response)=>{
                //alert('Cancellation request from booking Id'+ response);
                this.cancelBId=response;
                console.log(response);
        }});
    }
    ngOnInit(): void {
        this.urlid= this.ar.snapshot.params['id'];
        this.destroy= this.ar.paramMap.subscribe({
            next:(params)=>{
                const urlId=params.get('id');
            
                if(urlId){
                    this.as.getingAdminbyAN(urlId).subscribe({
                        next: (respons)=>{        
                        this.admininfo=respons;
                        }
                    })
                }            
            }, 
            error:(errorresponse)=>{
                console.log("dont know"+errorresponse);
            }
        })
        console.log(this.admininfo);
        
    }
    ngOnDestroy(): void {
        this.destroy.unsubscribe();
    }
    routetohome(){
        this.route.navigate(['/ai/',this.urlid]);
    }



    cancellationApproved(cancell:string, crid:number){
this.as.deleteBooking(cancell).subscribe({
    next:(response)=>{
        alert('Booking Cancelled');
        this.route.navigate(['/ai/',this.urlid]);
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
            this.route.navigate(['/ai/',this.urlid]);
        }
    });
    
}


}