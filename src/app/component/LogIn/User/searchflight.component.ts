import { Component, OnInit, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { FlightM } from "src/app/models/flight.model";
import { SearchFlight } from "src/app/models/searchflight.model";
import { UserdetailsService } from "src/app/services/user.service";


@Component({
    selector: 'app-searchflight',
    templateUrl:'./searchflight.component.html'
})
export class SearchFlightbyUserComponent implements OnInit{
    @ViewChild('seat') seattype:NgForm;
    us:SearchFlight={
        source:'',
        destination:'',
        departuredate: new Date(2022-10-11),
        arrivaldate:new Date(2022-10-11),
        seattype:'',
        passengeradult:0,
        passengerchil:0,
       passengerinfant:0
       
    };
    user:FlightM={
        source:'',
        destination:'',
        departureOn:'',
        arrivalOn:'',
        ePrice:0,
        bPrice:0,
        flight:0,
        flightName:''
    }
    usr:FlightM[]=[];
    userurl:string='';
    table:boolean=false;
    Eseating:boolean=false;
    Bseat:boolean=false;
    search:boolean=true;
    flcl:number=0;

   constructor(private uds: UserdetailsService,private route:Router, private ar:ActivatedRoute){}
    ngOnInit(): void {
        this.userurl=this.route.url.split('/')[2];
    }
    onSubmit(){
       
    }
    
    Search(){
        console.log(this.us.arrivaldate, this.us.departuredate, this.us.source, this.us.destination);
        this.uds.searchflight(this.us.source,this.us.destination,this.us.departuredate).subscribe({
            next:(flights)=>{
                console.log(flights);
               this.usr=flights;
               
            }
        });
        this.table=true;
        this.search=false;
        if(this.us.seattype=="Etype"){
            this.Eseating=true;
            this.flcl=1;
        }
        if(this.us.seattype=="Btype"){
            this.Bseat=true;
            this.flcl=2;
        }

    }
   
    tripbooking(f1:number){
        
        this.route.navigate(['/userinterface',this.userurl,'booking',f1,0,
                                this.us.passengeradult,this.us.passengerchil,this.us.passengerinfant,this.flcl]);
    }

}