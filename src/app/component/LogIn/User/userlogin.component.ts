import { Component, ViewChild, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { CustomerM } from 'src/app/models/customer.model';
import { UserdetailsService } from 'src/app/services/user.service';



@Component({
    selector: 'app-userlogin',
    templateUrl:'./userlogin.component.html'
})
export class UserLoginComponent implements OnInit{
    @ViewChild('tdULform') ulform:NgForm;
    logindetails:CustomerM={
        userId: 0,
        userName:'',
        fullName:'',
        emailId:'',
        gender:'',
        age:0,
        phone:0,
        password:''
    };
    username:string='';
    password:string='';

    constructor(
      private uds:UserdetailsService,
        private route:Router,
        private ar:ActivatedRoute
         ){
    }
    onSubmit(){
       
        this.ulform.reset();
    }
   onVerification(){
    this.logindetails.userName=this.username;
    this.logindetails.password=this.password;
    this.uds.checkUserName(this.logindetails).subscribe({
        next:(ucheck)=>{
            this.route.navigate(['/userinterface',ucheck.userName]);
        },
        error:(response)=>{
            console.log(response);
        }
    }
    );

   }
   ngOnInit(): void {
       
   }

}

