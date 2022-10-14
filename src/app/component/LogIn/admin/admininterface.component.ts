import { Component, OnInit, OnDestroy } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Subscription } from "rxjs";
import { AdminService } from "src/app/admin.service";
import { AdminM } from "src/app/models/admin.model";
import { Cancellation } from "src/app/models/cancellation.model";
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
    
    cancelBId:Cancellation[]=[];
    constructor(
        private as: AdminService,
        private ar: ActivatedRoute,
        private route: Router,
        private uds:UserdetailsService
    ){
        this.uds.cancellation.subscribe(
            (bid:Cancellation)=>{
                alert('Cancellation request from booking Id'+ bid);
                this.cancelBId.push(bid);
        });
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
    cancellationDecline(cancell:string){
this.as.deleteBooking(cancell).subscribe({
    next:(response)=>{
        alert('Booking Cancelled');
    },
    error:(response)=>{
        console.log(response);
    }
})
    }


}