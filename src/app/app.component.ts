import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  title = 'app';
  public toDate:any;
  public fromDate:any;
  
  dateReturned(Date){
       this.toDate=Date.toDate;
       this.fromDate=Date.fromDate;
  }      
}
