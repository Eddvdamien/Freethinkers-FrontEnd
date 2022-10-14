import { Component } from "@angular/core";
import { AdminService } from "src/app/admin.service";
import { AdminM } from "src/app/models/admin.model";

@Component({
    selector: 'app-alladmin',
    templateUrl: './alladmin.component.html'
})

export class AllAdminComponent{
admindetails: AdminM[]=[];
adminlogin: boolean;
constructor(private as:AdminService){

}
ngOnInit(): void {
    this.as.getAlladmin().subscribe({
        next:(admindetails)=>{
            console.log(admindetails);
            this.admindetails = admindetails;
        },
        error: (response)=>{
            console.log(response);
        }
        
    })
}
}