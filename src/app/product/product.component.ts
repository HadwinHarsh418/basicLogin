import { Component, OnInit } from '@angular/core';
import { EnrollmentService } from '../enrollment.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  allData: any;
  
  constructor( private _enroll:EnrollmentService) {   }

  getAllData(){
    this._enroll.product().subscribe(res=>{
      this.allData = res.result
      console.log('AllData',this.allData)
    })
  }
 
  ngOnInit(): void {
    this.getAllData()
  }

}
