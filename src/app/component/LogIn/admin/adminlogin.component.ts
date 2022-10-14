import {Component, ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/admin.service';
import { AdminM } from 'src/app/models/admin.model';


@Component({
    selector:'app-adminlogin',
    templateUrl:'./adminlogin.component.html'
})

export class AdminLoginComponent{
    @ViewChild('tdALform') adminform:NgForm;
    alertform:boolean=false;

    adminname:string='';
    password:string='';
    logindetails:AdminM={
        adminId:'',
    adminName:'',
    fullName:'',
    age:0,
    gender:'',
    emailId:'',
    phone:0,
    password:'',
    };
    constructor(private as:AdminService,
        private route:Router){

    }
   
    onSubmit(){
        this.logindetails.adminName=this.adminname;
        this.logindetails.password=this.password;
        this.adminform.reset();

    }
    onVerification(){
        this.logindetails.adminName=this.adminname;
        this.logindetails.password=this.password;
        this.as.checkAdmin(this.logindetails).subscribe({
            next:(logSuccess)=>{
                //console.log(logSuccess);
                this.route.navigate(['/ai',logSuccess.adminName]);               
            },
            error: (response)=>{
                console.log(response);
                this.alertform=true;
            }
        })
    }
}