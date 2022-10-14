import { Component, EventEmitter, Input, Output, ViewChild } from "@angular/core";
import { NgForm, FormsModule } from "@angular/forms";
import { Router } from "@angular/router";
import { interval, reduce } from "rxjs";
import { AdminService } from "src/app/admin.service";
import { AdminM } from "src/app/models/admin.model";

import { CustomerM } from "src/app/models/customer.model";
import { UserdetailsService } from "src/app/services/user.service";


@Component({
    selector: 'app-addadmin',
    templateUrl: './addadmin.component.html',
    //styleUrls:['./register.component.css']
  
})
export class AddAminComponent{
    @ViewChild('tdRform') registerform:NgForm;
@Output() passDatatoUItable= new EventEmitter<CustomerM>();

    registerUser:AdminM={
        adminId:'',
        adminName:'',
        fullName:'',
        age:0,
        gender:'',
        emailId:'',
        phone:0,
        password:''
    };
    
    constructor(private as: AdminService, private route:Router ){}
    onSubmit(){
        
        this.as.addAdmintoDB(this.registerUser).subscribe({
            next:(admindetails)=>{
                console.log(admindetails);
                this.route.navigate(['/userlogin']);
            },
            error:(response)=>{
                console.log(response);
            }
        })

    }
    onToPassdata(){
       // this.passDatatoUItable.emit(this.registerUser);
    }
}