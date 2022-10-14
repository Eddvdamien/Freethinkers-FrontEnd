import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { AdminService } from "src/app/admin.service";
import { FlightM } from "src/app/models/flight.model";

@Component({
    selector: 'app-addflight',
    templateUrl:'./addflight.component.html'
})
export class AddFlightComponent implements OnInit{
    addflight:FlightM={
        flight:0,
        flightName:'',
        source:'',
        destination:'',
        departureOn:'',
        arrivalOn:'',
        ePrice:0,
        bPrice:0
    };
    urladminid:string='';
    constructor(private as: AdminService,
        private route: Router,
        private ar: ActivatedRoute){

    }
    ngOnInit(): void {
       this.urladminid= this.route.url.split('/')[2];
    }

    
    onSubmit(){
this.as.addFlight(this.addflight).subscribe({
    next:(response)=>{
        console.log(response);
        this.route.navigate(['/ai/',this.urladminid,'flightlist']);
    },
    error: (response)=>{
        console.log(response);
    }
})
    }
    ontoPassdata(){}
}