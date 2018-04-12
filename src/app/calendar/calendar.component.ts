import { Component, Input, Output, EventEmitter,OnInit } from '@angular/core';
import * as moment from 'moment';


export interface CalendarDate {
  mDate: moment.Moment;
  selected: boolean;
  }

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  nullcount = moment().startOf("month").day();  
  startDate:moment.Moment;
  endDate:moment.Moment;
  currentDate =null;
  nullValues: string[] = [];
  storedDates: moment.Moment[] = [];
  toDate:moment.Moment=null;
  fromDate:moment.Moment=null;
  defaultSelectedItemCss;

 @Input("arrowCss") arrowCss: string ;
 @Input("containerCss") containerCss;
 @Input("gridItemCss") gridItemCss: string;
 @Input("selectedItemCss") selectedItemCss;
 @Output() onCalenderClick = new EventEmitter<any>();
 

      
  constructor() {
     this.currentDate = moment();
     this.toDate=null;
     this.fromDate=null;
   
  this.generateCalendar();
  
  }
  isSelected(temp: moment.Moment): string   {
   
   if(this.selectedItemCss==null){
    if (temp.isBefore(this.toDate)  && temp.isAfter(this.fromDate)  || (temp.isSame(this.fromDate) || temp.isSame(this.toDate)))
    { 
    
      this.defaultSelectedItemCss="grid-item-days-selected";
      return this.defaultSelectedItemCss;
       
     }
     else
     {
      this.defaultSelectedItemCss="grid-item-days";
      return this.defaultSelectedItemCss;
     } 
   }
   else if(this.selectedItemCss!=null){
    if (temp.isBefore(this.toDate)  && temp.isAfter(this.fromDate)  || (temp.isSame(this.fromDate) || temp.isSame(this.toDate)))
    {     
      return this.selectedItemCss;       
     }
     else
     {      
      return this.gridItemCss;
     } 

   }        
  
  }
  prevMonth(): void {
    this.currentDate = moment(this.currentDate).subtract(1, 'months');
    this.generateCalendar();
  }
  nextMonth(): void {
   this.currentDate = moment(this.currentDate).add(1, 'months');
    this.generateCalendar();
  }
  prevYear(): void {
    this.currentDate = moment(this.currentDate).subtract(1, 'year');
    this.generateCalendar();
  }

  nextYear(): void {
    this.currentDate = moment(this.currentDate).add(1, 'year');
    this.generateCalendar();
  }
  calenderClick(){
      
      this.onCalenderClick.emit({
        "toDate":this.fromDate.format("DD-MM-YYYY"),
        "fromDate":this.toDate.format("DD-MM-YYYY")});
  }
  public Date(temp: moment.Moment): void {
    
    if(this.fromDate==null){      
      this.fromDate=temp;
  }
   else if(this.toDate==null && temp.isAfter(this.fromDate)){
        this.toDate=temp;
        this.calenderClick();
    }
    else {
      this.fromDate=null;
      this.toDate=null;
    }
    
    
  }
  generateCalendar(): void {
    this.storedDates=[];
    this.nullValues= [];
    this.startDate=moment(this.currentDate).startOf("month");  
    this.endDate=moment(this.currentDate).endOf("month");
    this.nullcount = moment(this.currentDate).startOf("month").day(); 
      for(var i=0;i<this.nullcount;i++ ) {
        this.nullValues.push("0");
      }
      console.log(moment().date());
      for(var i=this.startDate.date() ;i<=this.currentDate.endOf("month").date();i++ ) {
       this.storedDates.push( this.startDate);    
       this.startDate=moment(this.startDate).add(1,"d");      
      }
         
    }

  ngOnInit() {
  }
}