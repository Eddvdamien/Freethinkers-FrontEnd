import { Component } from "@angular/core";
import { ActivatedRoute, Route, Router } from "@angular/router";
import { CustomerM } from "src/app/models/customer.model";
import { UserdetailsService } from "src/app/services/user.service";

@Component({
    selector: 'app-manageuser',
    templateUrl:'./manageuser.component.html'
})
export class ManageUserComponent{

    userdetailsbyid:CustomerM={       
        userId: 0,
        userName:'',
        fullName:'',
        emailId:'',
        gender:'',
        age:0,
        phone:0,
        password:''
    };
    constructor(private uds: UserdetailsService, private ar: ActivatedRoute, private router:Router){}
    ngOnInit(): void {
        this.ar.paramMap.subscribe({
            next:(params)=>{
                const urlId=params.get('id');
            
            if(urlId){
                this.uds.getUserbyId(urlId).subscribe({
                    next: (respons)=>{
                        this.userdetailsbyid=respons;
                        //here response donest have any meaning its just an identifier 
                        //try any names it will work fine
                    }
                })

            }
            }
        })
    }
    onSubmit() {
        this.uds.updateSingleUserdetails(this.userdetailsbyid.userId,this.userdetailsbyid).subscribe({
            next:(userdetailsbyid)=>{
                console.log(userdetailsbyid);
                this.router.navigate(['/userinterface',userdetailsbyid.userName]);
            }
        })
    }
    onToPassdata() {
       
    }
}