import { Component, OnInit, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { BookingM } from "src/app/models/booking.model";
import { CustomerM } from "src/app/models/customer.model";
import { FlightM } from "src/app/models/flight.model";
import { UserdetailsService } from "src/app/services/user.service";

@Component({
    selector:'app-booking',
    templateUrl:'./booking.component.html'
})
export class BookingComponent implements OnInit{

    @ViewChild('tdLast') form:NgForm;
userid:string='';
sflightid:number=0;
dflightid:number=0;
adultpa:number=0;
childpa:number=0;
infantpa:number=0;
totalpa:number=0;
seattype:number=0;
pricing:boolean=false;
totalprice:number=0;
sflightresult:FlightM={
    flight:0,
        flightName:'',
        source:'',
        destination:'',
        departureOn:'',
        arrivalOn:'',
        ePrice:0,
        bPrice:0
};
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
dflightresult:FlightM={
    flight:0,
        flightName:'',
        source:'',
        destination:'',
        departureOn:'',
        arrivalOn:'',
        ePrice:0,
        bPrice:0
};
// flightresultsssss:FlightM[]=[];
// bookignarray:BookingM[]=[];
bookingtable:BookingM={
    bookingId:'',
    passengerId:this.userdetails.userId,
    passengerName:'',
    age:0,
    gender:'',
    flight:this.sflightresult.flight,
    flightName:this.sflightresult.flightName,
    source:this.sflightresult.source,
    destination:this.sflightresult.destination,
    departureOn:this.sflightresult.departureOn,
    arrivalOn:this.sflightresult.arrivalOn,
    ePrice:this.sflightresult.ePrice,
    bPrice:this.sflightresult.bPrice
}
pname:string='';
page:number=0;
pgender:string='';
counter:number=0;
count:number=1;

    constructor(private route:Router,private uds: UserdetailsService){
        this.userid=this.route.url.split('/')[2];
        this.sflightid=parseInt(this.route.url.split('/')[4]);
        this.dflightid=parseInt(this.route.url.split('/')[5]);
        this.adultpa=parseInt(this.route.url.split('/')[6]);
        this.childpa=parseInt(this.route.url.split('/')[7]);
        this.infantpa=parseInt(this.route.url.split('/')[8]);
        this.totalpa=this.adultpa+this.childpa+this.infantpa;
        this.seattype=parseInt(this.route.url.split('/')[9]);
        this.count=this.totalpa;
    }
    ngOnInit(): void {
        

        
        this.uds.getflightbyID(this.sflightid).subscribe({
            next:(response)=>{
                console.log(response);
                this.sflightresult=response;
            },
            error:(response)=>{
                console.log('error in the code'+response);
            }
        }); 
        this.uds.getflightbyID(this.dflightid).subscribe({
            next:(response)=>{
                this.dflightresult=response;
            }
        })
        this.uds.getingUserbyUN(this.userid).subscribe({
            next:(response)=>{
                console.log(response);
                this.userdetails=response;
            }, error:(response)=>{
                console.log(response);
            }
        }) ;
        console.log('seattype is'+this.seattype + 'count is '+this.count);
       
    }
    ontonextentry(){
        if(this.seattype==1){
            this.bookingtable.ePrice=this.sflightresult.ePrice;
                    } else{this.bookingtable.ePrice=this.sflightresult.bPrice;}
        this.bookingtable.passengerName=this.pname;
        this.bookingtable.age=this.page;
        this.bookingtable.gender=this.pgender;
        this.bookingtable.arrivalOn=this.sflightresult.arrivalOn;
        //this.bookingtable.bPrice=this.sflightresult.bPrice;
        this.bookingtable.departureOn=this.sflightresult.departureOn;
        this.bookingtable.destination=this.sflightresult.destination;
        this.bookingtable.ePrice=this.sflightresult.ePrice;
        this.bookingtable.flight=this.sflightresult.flight;
        this.bookingtable.flightName=this.sflightresult.flightName;
        this.bookingtable.source=this.sflightresult.source;
        this.bookingtable.passengerId=this.userdetails.userId;
       
        this.uds.createabooking(this.bookingtable).subscribe({
            next:(respone)=>{
                console.log(respone);
                alert(this.counter+' out of '+this.count+ ' done, click ok to fill the rest of passenger details')
            },
            error:(response)=>{
                console.log(response);
            }
        });
        
        console.log(this.dflightid);
        if(this.dflightid!=0){
            this.bookingtable.passengerName=this.pname;
            this.bookingtable.age=this.page;
            this.bookingtable.gender=this.pgender;
            this.bookingtable.arrivalOn=this.dflightresult.arrivalOn;
            //this.bookingtable.bPrice=this.dflightresult.bPrice;
            this.bookingtable.departureOn=this.dflightresult.departureOn;
            this.bookingtable.destination=this.dflightresult.destination;
            this.bookingtable.ePrice=this.dflightresult.ePrice;
            this.bookingtable.flight=this.dflightresult.flight;
            this.bookingtable.flightName=this.dflightresult.flightName;
            this.bookingtable.source=this.dflightresult.source;
            this.bookingtable.passengerId=this.userdetails.userId;
           
            this.uds.createabooking(this.bookingtable).subscribe({
                next:(respone)=>{
                    console.log(respone);
                    alert(this.counter+' out of '+this.count+ ' done, click ok to fill the rest of passenger details')
                },
                error:(response)=>{
                    console.log(response);
                }
            });
        }
        this.totalprice=this.count*this.bookingtable.ePrice;
        this.counter=this.counter+1;
        this.pricing=true;
        this.form.reset();

    }
    onSubmit(){
        // for(let n=0;n<=this.totalpa;n++){
        //     this.bookignarray.push({
        //         bookingId:'',
        //         passengerId:
        //     })
        // }
        alert('Congratulations, You got a free raid in out partnered AirLines')
       
        this.route.navigate(['/userinterface',this.userid]);
    }



}
