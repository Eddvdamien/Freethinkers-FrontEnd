
import { Component, OnInit, OnDestroy} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { CustomerM } from 'src/app/models/customer.model';
import { UserdetailsService } from 'src/app/services/user.service';

@Component({
    selector: 'app-userinterface',
    templateUrl: './userinterface.component.html'
})
export class UserInterfaceComponent implements OnInit, OnDestroy{
    adminlogin=true;
    userinfo:CustomerM=
    {userId: 0,
        userName:'',
        fullName:'',
        emailId:'',
        gender:'',
        age:0,
        phone:0,
        password:''};
        name:string='';
        urlusername:string='';
        destroy:Subscription;
        constructor(private ar: ActivatedRoute,
            private uds:UserdetailsService){}
    ngOnInit(): void {
        this.urlusername=this.ar.snapshot.params['id'];
        this.destroy= this.ar.paramMap.subscribe({
            next:(params)=>{
                const urlId=params.get('id');
            
                if(urlId){
                    this.uds.getingUserbyUN(urlId).subscribe({
                        next: (respons)=>{        
                        this.userinfo=respons;
                        }
                    })
                }            
            }, 
            error:(errorresponse)=>{
                console.log("dont know"+errorresponse);
            }
        })
        console.log(this.userinfo);
    }
    // @Input() userDetailInfo(userevent:CustomerM){
    //     this.userinfo.userName= userevent.userName;
    //     this.userinfo.age=userevent.age;
    //     this.userinfo.emailId= userevent.emailId;
    //     this.name=userevent.fullName;
    // }

  
     //here response donest have any meaning its just an identifier 
    //try any names it will work fine
    // this.uds.getingUserbyUN(this.urlusername).subscribe({
    //     next:(response)=>{
    //         this.userinfo=response;
            
    //     },
       
    // })
    ngOnDestroy(): void {
        //this.destroy.unsubscribe();
    }

   
}