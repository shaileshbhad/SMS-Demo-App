import { Component, OnInit } from '@angular/core';
import { SmsServiceService } from './sms-service.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public data: any = [];
  title = 'smsdemoapp';
  dtOptions: DataTables.Settings = {};
  constructor(private smsServiceService :SmsServiceService){
  }
  
  ngOnInit() {
    
    this.smsServiceService.getSmsDetail().subscribe((response)=>{
      this.data=response;
      console.log(response);
    });

    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      processing: true
    };
    
}
}