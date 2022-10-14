import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { AdminService } from "src/app/admin.service";
import { FlightM } from "src/app/models/flight.model";
import { AdminInterfceComponent } from "./admininterface.component";

@Component({
    selector:'app-manageflight',
    templateUrl:'./manageflight.component.html'
})
export class ManageFlightComopnent implements OnInit{
    editflight:FlightM={
        flight:0,
        flightName:'',
        source:'',
        destination:'',
        departureOn:'',
        arrivalOn:'',
        ePrice:0,
        bPrice:0
    };
    urladminurlId:string='';
    urlflightID:string='';
    adminurlId:string='';
    constructor(private as:AdminService,
        private ar: ActivatedRoute,
        private route:Router){}
    ngOnInit(): void {
        //tryin to reroute to adminid itself
        this.ar.params.subscribe(
            (ownerurl:Params)=>{
this.urladminurlId=ownerurl['id'];
this.urlflightID=ownerurl['aid'];
            }
        );



        this.ar.paramMap.subscribe({
            next:(params)=>{
                const urlId=params.get('aid');
                if (urlId){
                    this.as.getFlightbyId(urlId).subscribe({
                        next:(response)=>{
                            this.editflight=response;
                        }
                    })
                }
            },
            error: (response)=>{
                console.log(response);
            }
        })
        this.adminurlId=this.route.url.split('/')[2];
        //console.log();
    }
    onSubmit(){
        this.as.updateFlightbyId(this.editflight.flight, this.editflight).subscribe({
            next:(response)=>{
                console.log(response);
                this.route.navigate(['/ai',this.adminurlId,'flightlist']);
            },
            error: (response)=>{
                console.log(response);
            }
        })
    }
    ontoPassdata(){}
}