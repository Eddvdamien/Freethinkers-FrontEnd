import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { AdminService } from "src/app/admin.service";
import { AdminM } from "src/app/models/admin.model";


@Component({
    selector: 'app-manageadmin',
    templateUrl:'./manageadmin.component.html'
})
export class ManageAdminComponent implements OnInit{
    admindetailsbyid:AdminM={
        adminId:'',
        adminName:'',
        fullName:'',
        age:0,
        gender:'',
        emailId:'',
        phone:0,
        password:'',
    };
    urladminid:string='';
    constructor(
        private as:AdminService,
        private ar:ActivatedRoute,
        private router:Router
    ){}
    ngOnInit(): void {
        this.urladminid=this.ar.snapshot.params['id'];
        this.ar.paramMap.subscribe({
            next:(params)=>{
                const urlId=params.get('id');
            
            if(urlId){
                this.as.getAdminbyId(urlId).subscribe({
                    next: (respons)=>{
                        this.admindetailsbyid=respons;                        
                    }
                })

            }
            }
        })
    }
    onSubmit(){
        this.as.updateAdminDetailsbyId(this.admindetailsbyid.adminId, this.admindetailsbyid).subscribe({
            next:(response)=>{
                console.log(response);
                this.router.navigate(['/ai',this.urladminid]);
            }
        })
    }
    onToPassdata(){}
}