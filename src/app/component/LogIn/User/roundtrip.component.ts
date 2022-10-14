import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { FlightM } from "src/app/models/flight.model";
import { SearchFlight } from "src/app/models/searchflight.model";
import { UserdetailsService } from "src/app/services/user.service";

@Component({
    selector:'app-roundtrip',
    templateUrl:'./roundtrip.component.html',
    styleUrls:['./roundtrip.component.css']
   
    
})
export class RoundTripComponent implements OnInit{
    us:SearchFlight={
        source:'',
        destination:'',
        departuredate:new Date(2022-10-11),
        arrivaldate:new Date(2022-10-11),
        seattype:'',
        passengeradult:0,
        passengerchil:0,
       passengerinfant:0
    };
    usr:FlightM[]=[];
    usr1:FlightM[]=[];   
    userurl:string='';
    table:boolean=false;
    Eseating:boolean=false;
    Bseat:boolean=false;
    search:boolean=true;
    flcl:number=0;
constructor(private uds:UserdetailsService,
    private route:Router){}
    ngOnInit(): void {
        this.userurl=this.route.url.split('/')[2];
    }


    Search(){
        console.log(this.us.arrivaldate, this.us.departuredate, this.us.source, this.us.destination);
        this.uds.searchflight(this.us.source,this.us.destination,this.us.departuredate).subscribe({
            next:(flights)=>{
                console.log(flights);
               this.usr=flights;
               
            }
        });
        this.uds.searchflight(this.us.destination,this.us.source,this.us.arrivaldate).subscribe({
            next:(flights)=>{
                console.log(flights);
               this.usr1=flights;
               
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

gt:boolean=true;
gtid:number=0;
  Goingtrip(f1:number){
this.gt=false;
this.gtid=f1;
  }
 
  rtid:number=0;
  Returningtrip(f2:number){
this.rtid=f2;
this.route.navigate(['/userinterface',this.userurl,'booking',this.gtid,this.rtid,
this.us.passengeradult,this.us.passengerchil,this.us.passengerinfant,this.flcl]);
  }
  

    }


    
    //to selec the multiple rows by clicking event in row 
    //got the idea from stock overflow
  //   selectedRowIds: Set<number> = new Set<number>();
  //   selectedId: string;

  // onRowClick(flight: number) {
  //   if(this.selectedRowIds.has(flight)) {
  //    this.selectedRowIds.delete(flight);
  //   }
  //   else {
  //     this.selectedRowIds.add(flight);
  //   }
  // }

  // rowIsSelected(flight: number) {
  //   return this.selectedRowIds.has(flight);
  // }

  // getSelectedRows(){
  //   return this.usr.filter(x => this.selectedRowIds.has(x.flight));
  // }

  // onLogClick() {
  //   console.log(this.getSelectedRows());
  // }
