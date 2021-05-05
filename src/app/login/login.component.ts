import { Component, OnInit } from '@angular/core';
import { SelectControlValueAccessor } from '@angular/forms';
import { Router } from '@angular/router';
import { EnrollmentService } from '../enrollment.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userModel:any ={}
  allData:any
  constructor(private _enroll:EnrollmentService, private router: Router) {}

  onSubmit() { 
       this._enroll.login(this.userModel).subscribe(res=>{
        alert(res.result.return_message)
         if(res.result.return_value != -1){
          sessionStorage.setItem('token', res.result.token)
          sessionStorage.setItem('user_id', res.result.return_value)
            this.router.navigate(['/product'])
         }
        
       })
      }


  ngOnInit(): void {
  
}
}

function getAllData() {
  throw new Error('Function not implemented.');
}

