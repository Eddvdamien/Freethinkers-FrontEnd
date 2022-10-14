import { Component,OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AdminService } from "src/app/admin.service";
import { FlightM } from "src/app/models/flight.model";

@Component({
    selector:'app=flightlist',
    templateUrl:'./flightlist.component.html'
})
export class FlightListComponent implements OnInit{
    flightlist:FlightM[]=[];
    constructor(private as: AdminService,
        private route:Router){

    }
    ngOnInit(): void {
        this.as.getallFlight().subscribe({
            next:(response)=>{
                this.flightlist=response;
                console.log(response);
            },
            error: response=>{
                console.log(response);
            }
        })
    }

}