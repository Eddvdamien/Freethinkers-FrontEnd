import { Component, ElementRef, ViewChild } from "@angular/core";
import { CustomerM } from "src/app/models/customer.model";
import { UserdetailsService } from "src/app/services/user.service";
@Component({
    selector: 'app-allusers',
    templateUrl:'./allusers.component.html'
})
export class AllUsersComponent{
    //@ViewChild('lv', {static:true}) userid:ElementRef;
    topassid:number=0;
    //topassid:string=this.userid.nativeElement.value();
    userdetails:CustomerM[]=[];
    adminlogin:boolean=false;
    constructor(private uds: UserdetailsService){

    }
    ngOnInit(): void {
        this.uds.getAllUsers().subscribe({
            next:(userdetails)=>{
                console.log(userdetails);
                this.userdetails = userdetails;
            },
            error: (response)=>{
                console.log(response);
            }
            
        })
    }
    // onDelete(){
        // this.topassid=this.userid.nativeElement.value();
        // this.uds.deleteUserdetails(this.topassid).subscribe({
        //     next: (deleteUD)=>{
        //         console.log(deleteUD);
        //         //this.router.navigate(['userdetails']);
        //     }
        // })
    // }

}