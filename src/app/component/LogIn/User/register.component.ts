import { Component, EventEmitter, Input, Output, ViewChild } from "@angular/core";
import { NgForm, FormsModule } from "@angular/forms";
import { Router } from "@angular/router";
import { interval, reduce } from "rxjs";

import { CustomerM } from "src/app/models/customer.model";
import { UserdetailsService } from "src/app/services/user.service";


@Component({
    selector: 'app-resgitor',
    templateUrl: './register.component.html',
    styleUrls:['./register.component.css']
  
})
export class RegisterComponent{
    @ViewChild('tdRform') registerform:NgForm;
@Output() passDatatoUItable= new EventEmitter<CustomerM>();

    registerUser:CustomerM={
        userId: 0,
        userName:'',
        fullName:'',
        emailId:'',
        gender:'',
        age:0,
        phone:0,
        password:''
    };
    
    constructor(private uds: UserdetailsService, private route:Router ){}
    onSubmit(){
        
        this.uds.addUserstoDB(this.registerUser).subscribe({
            next:(userdetails)=>{
                console.log(userdetails);
                this.route.navigate(['/userlogin']);
            },
            error:(response)=>{
                console.log(response);
            }
        })

    }
    onToPassdata(){
        this.passDatatoUItable.emit(this.registerUser);
    }
}