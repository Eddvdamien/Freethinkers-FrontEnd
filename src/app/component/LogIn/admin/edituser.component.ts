import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { CustomerM } from "src/app/models/customer.model";
import { UserdetailsService } from "src/app/services/user.service";

@Component({
    selector:'app-edituser',
    templateUrl:'./edituser.component.html'
})
export class EditUserComponent{
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
    urlis0:string='';
    urlis1:string='';
    urluser:boolean=false;
   
    constructor(private uds: UserdetailsService, private ar: ActivatedRoute, private route:Router){}
    ngOnInit(): void {
        this.urlis1=this.route.url.split('/')[2];
        this.ar.paramMap.subscribe({
            next:(params)=>{
                const urlId=params.get('id1');
            
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
        //this.topassid=this.userid.nativeElement.value();
        this.uds.deleteUserdetails(this.userdetailsbyid.userId).subscribe({
            next: (deleteUD)=>{
                console.log(deleteUD);
                this.route.navigate(['/ai',this.urlis1,'alluser']);
            }
        })
    }
    onToPassdata() {
        this.uds.updateSingleUserdetails(this.userdetailsbyid.userId,this.userdetailsbyid).subscribe({
            next:(userdetailsbyid)=>{
                console.log(userdetailsbyid);
                this.route.navigate(['/ai',this.urlis1,'alluser']);
            }
        })
    }
    onSubmitt(){}
}